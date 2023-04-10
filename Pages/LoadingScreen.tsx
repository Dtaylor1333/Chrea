import React, { Dispatch, SetStateAction } from 'react';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';
import WelcomePage from './WelcomePage';


const styles = StyleSheet.create({

    image1:{
        height: 215,
        width: 150,
        marginTop: 300,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 140,
        },

    container: {
        flex:1,
        height: 900,
        alignItems: 'center',
        justifyContent: 'center',
        },
})

const LoadingScreen = () => {
  return(
    <View >
      <ImageBackground source = {require('../Images/LoadingPageBackground.png')} style = {styles.container}></ImageBackground>
      <Image  style = {styles.image1} source = {require('../Images/ChreaLogo.png')} />
    </View > 
  );
};

export default LoadingScreen;