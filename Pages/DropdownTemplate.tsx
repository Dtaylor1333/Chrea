import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
  import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';


  const data = [
    { label: 'Columbia, MO', value: '1' },
    { label: 'St. Louis, MO', value: '2' },
    { label: 'Kansas City, MO', value: '3' },
    { label: 'Chicago, IL', value: '4' },
    { label: 'Southbend, IN', value: '5' },
    { label: 'Dallas, TX', value: '6' },
    { label: 'Washington, DC', value: '7' },
    { label: 'Macomb, IL', value: '8' },
  ];


  // const DropdownComponent = () => {
  //   const [value, setValue] = useState(null);
  //   const [isFocus, setIsFocus] = useState(false);
    


  //   return (
  //     <NavigationContainer>
  //       <View style={styles.container}>
  //         <Dropdown
  //           style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
  //           placeholderStyle={styles.placeholderStyle}
  //           selectedTextStyle={styles.selectedTextStyle}
  //           inputSearchStyle={styles.inputSearchStyle}
  //           iconStyle={styles.iconStyle}
  //           data={data}
  //           search
  //           maxHeight={300}
  //           labelField="label"
  //           valueField="value"
  //           placeholder={!isFocus ? 'Select Location' : '...'}
  //           searchPlaceholder="Search..."
  //           value={value}
  //           onFocus={() => setIsFocus(true)}
  //           onBlur={() => setIsFocus(false)}
  //           onChange={item => {
  //             // setValue(item.value);
  //             setIsFocus(false);
  //           }}
  //         />
  //       </View>
  //     </NavigationContainer>
  //   );
  // };

  // export default DropdownComponent;

export default function DropdownTemplate(navigation, route){
  const [value, setValue] = useState(null);
  
  const [isFocus, setIsFocus] = useState(false);
    

    return (
      
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Location' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              // setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      
    );
}
  
  const styles = StyleSheet.create({
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