import React, { useContext, useEffect } from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import {reactNativeLocalPersistence} from "firebase/auth/react-native"
import { get, getDatabase, ref } from 'firebase/database';
import AppContext from '../AppContext';


export default function LoginPage({navigation, route}){
    

    const isDarkMode = useColorScheme() === 'dark';
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [usernameError, setUsernameError] = React.useState('');
    const myContext = useContext(AppContext);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    const auth = getAuth();

    const handleLogin = () => {

        if (email.length >= 5 && password.length >= 5) {
        // Perform login logic here
        console.log(`Email: ${email}, Password: ${password}`);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const db = getDatabase();

                get(ref(db, 'users/' + user.uid + "/location")).then((snapshot)=>{
                    console.log(snapshot)
                    if (snapshot.exists()) {
                        myContext.chooseLocation(snapshot.val())
                        navigation.navigate("Home")
                    }
                    else {
                        navigation.navigate("Choose Location", user)
                    }
                }
                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (error.code === 'auth/invalid-email') {
                    setEmailError('Bad Email Format');
                    setPasswordError('');
                }
                else {
                    setEmailError('Invalid Username or Password.');
                    setPasswordError('');
                }
                console.log(errorMessage);

            }); 
        }
        else {
            if(email.length < 5) {
                setEmailError('Email should be at least 5 characters.');
            }
            else {
                setEmailError('');
            }
            if(password.length < 5) {
                setPasswordError('Password should be at least 5 characters.');
            }
            else {
                setPasswordError('');
            }
        }
    };

    useEffect(() => {
    })

    return(

    <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}> 
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}/>
        <View style={styles.container}>
            <Text style = {styles.text1}>Log in to your account</Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.inputTitle}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                autoCapitalize='none'
                value={email}
                placeholder="email"
                maxLength={25}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
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
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            
            <View style={styles.container2}>
                <View>
                <TouchableOpacity onPress={()=> handleLogin()}>
                    <View style = {styles.button2}>
                        <Text style = {styles.buttonText3}> Confirm</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
                <View>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome Page")}>
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

    error:{
        marginLeft: 12,
        marginTop: 5,
        color: '#ff0000'
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
        width: '100%',
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