import React from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPage({navigation, route}){
    

    const isDarkMode = useColorScheme() === 'dark';
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    const auth = getAuth();

    const handleLogin = () => {

        if (username.length >= 5 && password.length >= 5) {
        // Perform login logic here
        console.log(`Username: ${username}, Password: ${password}`);
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("Choose Location", user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });   
        }
    };


    return(

    <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}> 
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}/>
        <View style={styles.container}>
            <Text style = {styles.text1}>Log in to your account</Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.inputTitle}>Username:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                autoCapitalize='none'
                value={username}
                placeholder="username"
                maxLength={25}
            />
            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                autoCapitalize='none'
                value={password}
                placeholder="password"
                secureTextEntry={true}
                maxLength={25}
            />
                {/* <DropdownComponent /> */}
            
            <View style={styles.container2}>
                <View>
                <TouchableOpacity onPress={()=> handleLogin()}>
                    <View style = {styles.button2}>
                        <Text style = {styles.buttonText3}> Confirm</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
                <View>
                <TouchableOpacity>
                    <View style = {styles.button3}>
                        <Text style = {styles.buttonText4}> Cancel</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </ImageBackground>
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

    input: {
        height: 40,
        margin: 12,
        marginBottom: 0,
        borderWidth: 1,
        padding: 10,
        width: 300,
      },

    text1:{
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
        marginTop: 150,
        width: 350,
        },

    text2:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#a38c84',
        marginTop: 20,
        width: 300,
    },

    inputTitle:{
        fontSize: 18,
        marginTop: 10,
    },

    backgroundImg: {
        // flex:1,
        height: '102%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderRadius: 13,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: 'rgba(163, 140, 132, .5)',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 150,
        height: 50,
        marginTop: 100,
        marginRight: 10,
    },

    button4: {
        borderRadius: 13,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: 'rgba(163, 140, 132, .5)',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 150,
        height: 50,
        marginTop: 100,
        marginLeft: 10,
    },

    button2: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: '#3c1c07',
        width: 160,
        height: 50,
        alignSelf: 'center',
        
    },

    button3: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 160,
        height: 50,
        alignSelf: 'center',
        marginTop: 15,
    },

    buttonText1: {
        color: '#a38c84',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },

    buttonText2: {
        color: '#a38c84',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },

    buttonText3: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    buttonText4: {
        color: '#3c1c07',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

});