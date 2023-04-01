import React from "react";
import { StyleSheet } from "react-native";

const eventCardStyles = StyleSheet.create({
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
        height: 115,
        borderRadius: 8,
    },

    eventName:{
        // justifyContent: 'center',
        width: 120,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 8,
        marginTop: 2,
    },

    card:{
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 12,
        borderRadius: 13,
        margin: 5,
        marginLeft: 0,
        alignSelf: 'center',
        width: 360,
        height: 138,
        shadowColor: 'black',
        backgroundColor: '#f8eee2',
        flexWrap: 'wrap',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },

    catagory: {
        color: '#a38c84',
        marginLeft: 8,
        marginTop: 1,
        marginBottom: 2,
        width: 120,
    },

    
    time:{
        color: 'black',
        marginLeft: 8,
        marginTop: 0,
        width: 120,
    },

    attendance:{
        color: '#c65304',
        fontSize: 37,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 90,
    },

    profiles:{
        width: 9,
        height: 9,
        borderRadius: 20,
        marginTop: 4,
    },

    promoterImg: {
        width: 19,
        height: 19,
        borderRadius: 20,
        marginLeft: 8,
        marginTop: 5,
    },

    attendanceP:{
        color: '#3c1c07',
        textAlign: 'right',
        marginTop: 0,
        width: 90,
        fontWeight: '600',
    },

    attendanceMP:{
        color: 'white',
        textAlign: 'right',
        marginTop: 0,
        fontWeight: '600',
        width: 90,

    },

    promoterName: {
        color: '#3c1c07',
        // margin: 3,
        marginLeft: 5,
        marginTop: 6,
    },

    plus: {
        color: '#c65304',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: -2,
        marginTop: .5,
    },

    backB:{
        color: '#3c1c07',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 0,
    },
});

export default eventCardStyles;