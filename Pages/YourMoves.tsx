import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {StyleSheet, Image, View, ImageBackground, Text, SafeAreaView, StatusBar, useColorScheme, Touchable, TouchableOpacity, TextInput} from 'react-native';
import DropdownComponent from './DropdownTemplate';
import FlatButton from './FlatButton';
import * as RootNavigation from '../RootNavigation';
import BottomTabs from './BottomTabs';
import BestMoves from './BestMoves';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import firebase from '../src/firebase/config';
import DatePicker from 'react-native-date-picker';


export default function CreateAccount({navigation, route}){

    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
    const [isLoading, setLoading] = useState(false);
    const firstRender = useFirstRender();
    const [responseOk, setResponse] = useState(false);
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [openT, setOpenT] = useState(false)
    const [openD, setOpenD] = useState(false)

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

const handleLogin = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 5 characters long.');
    }

    else if (confirmPassword !== password) {
        setPasswordError('Passwords do not match.');
    } else {
        setPasswordError('');
    }

    if (password.length >= 6 && confirmPassword === password) {
      // Perform login logic here
      console.log(`email: ${email}, Password: ${password}`);
      setLoading(true);
    }
  };


    function useFirstRender() {
        const firstRender = useRef(true);
      
        useEffect(() => {
          firstRender.current = false;
        }, []);
      
        return firstRender.current;
    }
    
    useEffect(() => {
        if (!firstRender) {
            
        }
      }, [firstRender, isLoading]);




    
    return(

    <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}> 
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}/>
        <View style={styles.container}>
            <Text style = {styles.text1}>Add an event.</Text>
            <Text style = {styles.text2}>Please enter the event info below. The more details the better.</Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.inputTitle}>  Event Title: </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                autoCapitalize='none'
                value={email}
                placeholder="Enter title"
                maxLength={25}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            <View style={styles.row}>
                <View style={styles.time}>
                    <Text style={styles.inputTitle}>Time:</Text>
                    <TextInput
                    onPressIn={() => setOpenT(true)}
                    style={styles.inputRow1}
                    value={time.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                    placeholder="Enter Time"
                    />
                </View>
                <DatePicker
                    modal
                    open={openT}
                    mode="time"
                    date={time}
                    onConfirm={(res) => {
                    setOpenT(false)
                    setTime(res)
                    }}
                    onCancel={() => {
                    setOpenT(false)
                    }}
                />
                <View style={styles.date}>
                    <Text style={styles.inputTitle2}>Date:</Text>
                    <TextInput
                    onPressIn={() => setOpenD(true)}
                    style={styles.inputRow2}
                    value={date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
                }
                    placeholder="Enter Date"
                    />
                </View>
                <DatePicker
                    modal
                    open={openD}
                    mode="date"
                    date={date}
                    onConfirm={(res) => {
                    setOpenD(false)
                    setDate(res)
                    }}
                    onCancel={() => {
                    setOpenD(false)
                    }}
                />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            </View>
            <Text style={styles.inputTitle}>  Address:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="Enter Address"
                secureTextEntry={true}
                maxLength={25}
            />
            {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null} 
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            <View style={styles.container2}>
                <View>
                <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
                    <View style = {styles.button2}>
                        <Text style = {styles.buttonText3}>Next</Text>
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
        marginTop: 40,
        alignContent: 'center',
        textAlign: 'left'
    },

    row: {
        flexDirection: 'row',
        left: 12,
        width: 300,
        marginBottom: 5
    },

    time: {
        flex: 1
    },
    date: {
        flex: 2
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

    input2: {
    height: 40,
    alignSelf: 'flex-end',
    margin: 12,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    width: 300,
    },

    inputRow1: {
        height: 40,
        marginTop: 12,
        alignSelf: 'flex-start',
        marginBottom: 0,
        borderWidth: 1,
        padding: 10,
        width: 120,
      },

      inputRow2: {
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 12,
        marginBottom: 0,
        borderWidth: 1,
        padding: 10,
        width: 120,
      },

    text1:{
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
        marginTop: 150,
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
    inputTitle2:{
        alignSelf: 'flex-end',
        right: 78,
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
        position: 'absolute',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: '#c65304',
        width: '100%',
        top: 80,
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