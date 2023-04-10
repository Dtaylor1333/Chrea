import React from 'react';
import {StyleSheet, Text, Image, View, ImageBackground, SafeAreaView, Button, StatusBar, Linking, LogBox} from 'react-native';
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
import CardlistSortTest from './Pages/CardlistSortTest';
import LoginPage from './Pages/LoginPage';
import CreateAccount from './Pages/CreateAccount';
import BottomTabs from './Pages/BottomTabs';
import AppContext from './AppContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from './src/firebase/config';
import YourMoves from './Pages/YourMoves';



const Stack = createNativeStackNavigator();


export default function App () {
  
  LogBox.ignoreAllLogs();
  const [location, setLocation] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const chooseLocation = (choice: string) => {
    setLocation(choice)
  };

  const locationSettings = {
    locationName: location,
    setLocation,
    chooseLocation,
  };

  const logged = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user is logged');
        setLoggedIn(true)
      }
      console.log("I TRIED")
  });

  useEffect(() => {
    logged
  }, [loggedIn])

if (loggedIn) {
  console.log("YES USER")
  return (
    <AppContext.Provider value={locationSettings}>
    <NavigationContainer>
      <View style={styles.container}>
        { <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "Home" component= {BottomTabs}/>
          <Stack.Screen name = "Event Details" component= {EventDetails}/>
          <Stack.Screen name = "Welcome Page" component= {WelcomePage}/>
          <Stack.Screen name = "Create Account Page" component= {CreateAccount}/>
          <Stack.Screen name = "Login Page" component={LoginPage}/>
          <Stack.Screen name = "Choose Location" component= {PlaceSelectPage}/>    
        </Stack.Navigator> }
    </View>   
    
    </NavigationContainer>
    </AppContext.Provider>
  );
} else {
  console.log("NO-USER")
  return (
    <AppContext.Provider value={locationSettings}>
    <NavigationContainer>
      <View style={styles.container}>
        { <Stack.Navigator screenOptions={{headerShown: false}}>
          
          <Stack.Screen name = "Login Page" component={LoginPage}/>
          <Stack.Screen name = "Choose Location" component= {PlaceSelectPage}/>
          <Stack.Screen name = "Home" component= {BottomTabs}/>
          <Stack.Screen name = "Event Details" component= {EventDetails}/>
          <Stack.Screen name = "Welcome Page" component= {WelcomePage}/>
          <Stack.Screen name = "Create Account Page" component= {CreateAccount}/>
        </Stack.Navigator> }
    </View>   
    
    </NavigationContainer>
    </AppContext.Provider>
  );
}

}
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



