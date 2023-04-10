import React from "react";
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({

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
       marginTop: 235,
       marginLeft: 100,
       marginRight: 100,
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

export default buttonStyles;