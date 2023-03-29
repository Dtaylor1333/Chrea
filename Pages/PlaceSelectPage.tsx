import React from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity} from 'react-native';
import DropdownComponent from './DropdownTemplate';
import FlatButton from './FlatButton';
import * as RootNavigation from '../RootNavigation';
import BottomTabs from '../BottomTabs';
import BestMoves from './BestMoves';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';



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

export default function PlaceSelectPage(navigation, route){
    // const navigation = useNavigation();
    // const Tab = createBottomTabNavigator();
    // const navigation = useNavigation();

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

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
                <DropdownComponent />
                <FlatButton />
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