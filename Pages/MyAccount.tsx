<script src="http://localhost:8097"></script>

import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity, Alert, Pressable} from 'react-native';
import DropdownComponent from './DropdownTemplate';
import FlatButton from './FlatButton';
import * as RootNavigation from '../RootNavigation';
import BottomTabs from './BottomTabs';
import BestMoves from './BestMoves';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import dropdownStyles from '../styles/dropdownStyles';
import buttonStyles from '../styles/buttonStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { screensEnabled } from 'react-native-screens';
import { child, get, getDatabase, ref } from '@firebase/database';
import AppContext from '../AppContext';
import { set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-switch';



// const PlaceSelectPage = () => {

//     const navigation = useNavigation();
//     const Tab = createBottomTabNavigator();

//     return(
//             <SafeAreaView>
//                 <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}> 
//                     <View>
//                         <Text style = {styles.text1}> Choose a place to {'\n'} explore.</Text>
//                         {/* <DropdownComponent /> */}
//                         {/* <FlatButton /> */}
//                         {/* <BottomTabs /> */}
//                     </View>
//                     <Tab.Navigator>
//                         <Tab.Screen name="Select Place" component={PlaceSelectPage} options={{headerShown:false}}/>
//                         <Tab.Screen name="Best Moves" component={BestMoves} options={{headerShown:false}}/>
//                     </Tab.Navigator>
//                 </ImageBackground>
//             </SafeAreaView>
//     );
// };

// export default PlaceSelectPage;

export default function MyAccount({navigation, route}){
    // const navigation = useNavigation();
    // const Tab = createBottomTabNavigator();
    const myContext = useContext(AppContext);
    const auth = getAuth()
    const isDarkMode = useColorScheme() === 'dark';
    const [isFocus, setIsFocus] = useState(false);
    const [location, setLocation] = useState("Pick");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([{value: "No Choice"}])
    const db = getDatabase();
    const user = getAuth().currentUser
    const dbRef = ref(db);

    const getLocations = async () => {
        try {
            get(child(dbRef, "locations")).then((snapshot) => {
                if(snapshot.exists()) {
                    snapshot.val().map((location: string )=> { setData(current => [...current, {value: location}])})
                }
            })
        } catch (error) {
            console.error(error, "FAILURE");
        } finally {
            setLoading(false);
        }
    };

    function writeUserData() {
        set(ref(db, 'users/' + user?.uid + "/location"),
          myContext.locationName
        );
    }

    function signOut() {
        auth.signOut();
        navigation.popToTop();
    }

    function deleteAccount() {
        Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
            {
              text: 'Cancel',
              onPress: () => {console.log('Cancel Pressed')},
              style: 'cancel',
            },
            {text: 'Yes', onPress: () => {
                user?.delete();
                auth.signOut();
                navigation.popToTop();
            }},
          ]);
        
    }

    function saved() {
        Alert.alert('Account Saved', 'Your account information has been saved!', [
            {text: 'Ok'},
          ]);
    }

    useEffect(() => {
        getLocations();
    }, []);
    
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

    if(isLoading) {
        return (<Text>Loading...</Text>)
    }

    return(

        // <SafeAreaView>
            <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}> 
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}/>
            <View style={styles.container}>
                <Ionicons style={styles.icon} size={100} onPress={() => {console.log("clicked")}} name="person-circle-outline" />
                <Text style = {styles.emailText}> {user?.email}</Text>      
            </View>
            
            <View style={styles.container2}>
                <Text style = {styles.text1}> Preferred Location:</Text>
                <View style={dropdownStyles.container}>
                    <Dropdown
                        style={[dropdownStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={dropdownStyles.placeholderStyle}
                        selectedTextStyle={dropdownStyles.selectedTextStyle}
                        inputSearchStyle={dropdownStyles.inputSearchStyle}
                        iconStyle={dropdownStyles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="value"
                        valueField="value"
                        placeholder={!isFocus ? myContext.locationName : '...'}
                        searchPlaceholder="Search..."
                        value={location}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                        setIsFocus(false);
                        myContext.chooseLocation(item.value)
                        }}
                    />
                    </View>
            <SafeAreaView>
                <View style={styles.container3}>
            
                        <TouchableOpacity onPress={()=> {saved()}}>
                            <View style = {buttonStyles.button2}>
                                <Text style = {buttonStyles.buttonText3}> Save</Text>
                            </View>
                        </TouchableOpacity>
                        
                <Pressable
              style={[styles.button3, styles.buttonClose]}
              onPress={() => signOut()}>
              <Text style={styles.textStyle}>Sign Out</Text>
            </Pressable>
            <Pressable
              style={[styles.button3, styles.buttonDelete]}
              onPress={() => deleteAccount()}>
              <Text style={styles.textStyle}>Delete Account</Text>
            </Pressable>        
            </View>          
            </SafeAreaView>
            </View>
            </ImageBackground>
        // </SafeAreaView>
    );
}



const styles = StyleSheet.create({

    container: {
        flex:1,
        textAlign: 'center',
        alignContent: 'center',
        marginTop: 100
        },
    icon: {
        textAlign: 'center',
        color: '#3c1c07',
    },
    container2:{
        flex: 2,
        marginTop: 20,
        marginBottom: 40
    },
    container3:{
        flex: 2,
        marginTop: 70,
        marginBottom: 40
    },
    emailText:{
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
        },
        
    text1:{
        fontSize: 36,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
        },

    backgroundImg: {
        // flex:1,
        height: '102%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#c65304'
      },
      buttonDelete: {
        backgroundColor: 'red',
        margin: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 11
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      button3: {
        borderRadius: 15,
        justifyContent:'center',
        paddingHorizontal: 3,
        backgroundColor: 'transparent',
        width: 120,
        height: 40,
        alignSelf: 'center',
        marginTop: 15,
    },
});