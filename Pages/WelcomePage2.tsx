import React from "react";
import {StyleSheet, Image, View, Text, Button, Pressable, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as RootNavigation from '../RootNavigation';
import PlaceSelectPage from "./PlaceSelectPage";



// const WelcomePage2 = () => {
//     // const { handlePress, title = 'Get Started' } = props;
//     // const handlePress = () => false;

//     const isDarkMode = useColorScheme() === 'dark';

//     // const navigation = useNavigation();

//     const backgroundStyle = {
//       backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     };

//     return(
        
//         // <SafeAreaView>
            
//             <View>
//                 <StatusBar
//             barStyle={isDarkMode ? 'light-content' : 'light-content'}
//             backgroundColor={backgroundStyle.backgroundColor}/>
//                 <Image style = {styles.image1} source={require('../Images/Welcome.jpg')} />
//                 <Text style = {styles.text1}> Welcome to Chrea</Text>
//                 <Text style = {styles.text2}> Decide where to spend your {"\n"}time faster. </Text>
//                 <Pressable style={styles.button} >
//                     <Text style={styles.buttonText}></Text>
//                 </Pressable>
//                 {/* <Button style ={styles.button} title="Learn More"></Button> */}
//             </View>
//         // </SafeAreaView>
//     );
// };

 // const { handlePress, title = 'Get Started' } = props;
    // const handlePress = () => false;


export default function WelcomePage2(){
    
    const isDarkMode = useColorScheme() === 'dark';

    // const navigation = useNavigation();

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

    return (
        // <SafeAreaView>
            
        <View>
        <StatusBar
    barStyle={isDarkMode ? 'light-content' : 'light-content'}
    backgroundColor={backgroundStyle.backgroundColor}/>
        <Image style = {styles.image1} source={require('../Images/Welcome.jpg')} />
        <Text style = {styles.text1}> Welcome to Chrea</Text>
        <Text style = {styles.text2}> Decide where to spend your {"\n"}time faster. </Text>
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
        {/* <Button style ={styles.button} title="Learn More"></Button> */}
    </View>
// </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    image1:{
        height: 600,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        },

    text1:{
        fontSize: 38,
        textAlign: 'center',
        marginTop: 25,
        fontWeight: 'bold',
        color: '#3c1c07',
        },

    text2:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 13,
        color: '#a38c84',
        },

    buttonText:{
        color: 'white',
    },

    button:{
        color: '#c65304',
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C65304',
        marginLeft: 53,
        marginRight: 50,
        marginBottom: 60,
        padding: 15,
    },
})

