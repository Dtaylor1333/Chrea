import React from "react";
import { StyleSheet } from "react-native";


const dropdownStyles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
    //   padding: 16
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        // marginBottom: 180,
        marginTop: 0,
    },

    row:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    dropdown: {
      height: 50,
      width: 300,
      // flex: 1,
      borderColor: 'rgba(163, 140, 132, .5)',
      borderWidth: 1,
      borderRadius: 13,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginTop: 0,
      backgroundColor: 'transparent',
    },

    icon: {
      marginRight: 5,
    },

    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },

    placeholderStyle: {
        color: '#a38c84',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },

    selectedTextStyle: {
      fontSize: 20,
      textAlign: 'center',
      color: '#3c1c07',
    },

    iconStyle: {
      width: 20,
      height: 20,
    },
    
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      
    },

    container2: {
        flex: 1,
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
      },
      textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
      },
      btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
  });

export default dropdownStyles;