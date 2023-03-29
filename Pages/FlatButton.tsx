import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import WelcomePage from './WelcomePage';
import * as RootNavigation from '../RootNavigation';
import Dashboard from './Dashboard';




export default function FlatButton(){

    const navigation = useNavigation();
    return(
    <SafeAreaView>
        <View>
            <View>
                <View>
                <TouchableOpacity onPress={()=> navigation.navigate("Best Moves")}>
                    <View style = {styles.button2}>
                        <Text style = {styles.buttonText3}> Confirm</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
                <View>
                <TouchableOpacity 
                onPress={()=> navigation.navigate("Welcome Page")}>
                    <View style = {styles.button3}>
                        <Text style = {styles.buttonText4}> Cancel</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
    );
};


// const FlatButton = () => {

const styles = StyleSheet.create({

    container: {
        // flexDirection: 'row',
        // // flexWrap: 'wrap',
        // justifyContent: 'center',
        // // marginBottom: 400,
        // flex: 1,
        // borderColor: 'black',
        // borderWidth: 2,
    },
    
    container2: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'flex-end',
        // flex: 1,
       borderColor: 'red',
       borderWidth: 12,
    },

    row:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
    text1:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 130,
        margin: 30,
        color: '#3c1c07',
        },

    Heading:{
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3c1c07',
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
        marginTop: 235,
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
