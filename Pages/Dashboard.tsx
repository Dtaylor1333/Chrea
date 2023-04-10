import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import {StyleSheet, Image, View, ImageBackground, Text,SafeAreaView} from 'react-native';


// MapboxGL.setAccessToken('pk.eyJ1IjoiZHRheWxvcjEzIiwiYSI6ImNsZW50eXd1MDA3cXIzc3J3OXN5dnl5cTYifQ.ERQR-1j3g9O2X07naHy2LA');

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      container: {
        height: 300,
        width: 300,
        backgroundColor: 'tomato'
      },
      map: {
        flex: 1
      }
});

const Dashboard = () => {
  const navigation = useNavigation();
    return(
        <SafeAreaView>
            <Text>Hi</Text>{/* <MapboxGL.MapView style={styles.map} /> */}
        </SafeAreaView>
    );
};

export default Dashboard;