<script src="http://localhost:8097"></script>

import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity} from 'react-native';
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

export default function PlaceSelectPage({navigation, route}){
    // const navigation = useNavigation();
    // const Tab = createBottomTabNavigator();
    const myContext = useContext(AppContext);
    const isDarkMode = useColorScheme() === 'dark';
    const [isFocus, setIsFocus] = useState(false);
    const [location, setLocation] = useState("Pick");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([{value: "No Choice"}])
    const db = getDatabase();
    const dbRef = ref(db);
    const user = getAuth().currentUser

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
        set(ref(db, 'users/' + user?.uid), {
          email: user?.email,
          location: myContext.locationName
        });
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
                <Text style = {styles.text1}> Choose a place to {'\n'} explore.</Text>
            </View>
            <View style={styles.container2}>
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
                        placeholder={!isFocus ? 'Select Location' : '...'}
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
                <View>
                    <View style={buttonStyles.container2}>
                        <View>
                        <TouchableOpacity onPress={()=> {writeUserData(); navigation.navigate("Home")}}>
                            <View style = {buttonStyles.button2}>
                                <Text style = {buttonStyles.buttonText3}> Confirm</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        
                        <View>
                        <TouchableOpacity onPress={()=> navigation.navigate("Welcome Page")}>
                            <View style = {buttonStyles.button3}>
                                <Text style = {buttonStyles.buttonText4}> Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
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
        // borderColor: 'red',
        // borderWidth: 4,
        },
    
    container2:{
        flex: 2,
        marginTop: 60,
    },

    text1:{
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
        marginTop: 150,
        },

    backgroundImg: {
        // flex:1,
        height: '102%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

});