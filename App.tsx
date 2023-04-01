import React from 'react';
import {StyleSheet, Text, Image, View, ImageBackground, SafeAreaView, Button, StatusBar, Linking} from 'react-native';
import WelcomePage from './Pages/WelcomePage';
import PlaceSelectPage from './Pages/PlaceSelectPage';
import { useState, useRef, useCallback, useEffect, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import FindEvents from './Pages/FindEvents';
import BestMoves from './Pages/BestMoves';
import WelcomePage2 from './Pages/WelcomePage2';
import EventDetails from './Pages/EventDetails';
import StackNavigator from './StackNavigator';
import EventDetails4 from './Pages/EventDetails4';
import EventDetails3 from './Pages/EventDetails3';
import EventDetails2 from './Pages/EventDetails2';
import ListOrderTest from './ListOrderTest';
import CardlistSortTest from './CardlistSortTest';
import AnotherTest from './AnotherTest';
import AnotherTest2 from './AnotherTest2';



const Stack = createNativeStackNavigator();


export default function App () {

  return (

     <NavigationContainer>
      <View style={styles.container}>
        {/* <FindEvents /> */}
        
        {/* <MainContainer /> */}
        {/* <Dashboard /> */}
        {/* <MoreDetails /> */}

        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "Welcome Page" component= {WelcomePage}/>
          <Stack.Screen name = "Choose Location" component= {PlaceSelectPage}/>
          <Stack.Screen name = "Best Moves" component= {BestMoves}/>
          <Stack.Screen name = "Event Details" component= {EventDetails}/>
          <Stack.Screen name = "Event Details2" component= {EventDetails2}/>
          <Stack.Screen name = "Event Details3" component= {EventDetails3}/>
          <Stack.Screen name = "Event Details4" component= {EventDetails4}/>
        </Stack.Navigator> */}
        {/* <ListOrderTest /> */}
        <CardlistSortTest navigation={undefined} route={undefined} />
        {/* <AnotherTest /> */}
        
        {/* <Test /> */}
        {/* ----------------------------WORKING PAGES---------------------- */}
        {/* <LoadingScreen /> */}
        {/* <WelcomePage /> */}
        {/* <PlaceSelectPage /> */}
        {/* <BestMoves /> */}
        {/* <EventDetails /> */}
        {/* <WelcomePage2 /> */}
        {/* <Dashboard /> */}
        {/* -------------------------------------------------- */}
    </View>   
    
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  view: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    height: 850,
  },

  image1:{
    height: 215,
    width: 150,
    marginLeft: 45,
    justifyContent: 'center',
    alignItems: 'center',
    },
});
