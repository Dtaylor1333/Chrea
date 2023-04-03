import React from "react";
import { StyleSheet } from "react-native";

const eventCardStylesM = StyleSheet.create({
    container1: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // marginLeft: -150,
    },    

    container2: {
        flex:1,
    },    

    heading1: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#3c1c07',
        textAlign: 'left',
        marginBottom: 6,
        marginLeft: 13,
        marginTop: 0,
    },

    heading2: {
        fontSize: 15,
        color: '#c65304',
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: 14,
    },

    cardImg: {
        width: 120,
        height: 123,
        borderRadius: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    eventName:{
        // justifyContent: 'center',
        width: 120,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginLeft: 8,
        marginTop: 2,
    },

    card:{
        borderColor: 'black',
        borderStyle: 'solid',
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 0,
        borderRadius: 13,
        margin: 5,
        alignSelf: 'center',
        width: 360,
        height: 148,
        shadowColor: 'black',
        backgroundColor: '#3c1c07',
        flexWrap: 'wrap',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    catagory: {
        color: '#a38c84',
        alignSelf: 'flex-start',
        marginBottom: 3,
        marginLeft: 8,
        marginTop: 3,
        width: 120,
        // width: 100,
        
    },

    
    time:{
        color: 'white',
        marginLeft: 8,
        marginTop: 1,  
        width: 120,
    },

    attendance:{
        color: '#c65304',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 80,
        marginLeft:13,
        marginTop: 0,
    },

    profiles:{
        width: 10,
        height: 10,
        borderRadius: 20,
        marginTop: 5,
    },

    promoterImg: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginLeft: 8,
        marginTop: 8,
    },

    attendanceP:{
        color: 'white',
        textAlign: 'right',
        marginTop: 0,
        fontWeight: '600',
        width: 90,

    },

    promoterName: {
        color: 'white',
        // marginBottom: 3,
        marginLeft: 5,
        marginTop: 8,
        height: 16,
    },

    plus: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: -2,
        marginTop: 1.5,
    },

    backB:{
        color: '#3c1c07',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 0,
    },
});

export default eventCardStylesM;