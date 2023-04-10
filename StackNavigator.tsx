import React from "react";
import { View } from "react-native/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./Pages/WelcomePage";
import PlaceSelectPage from "./Pages/PlaceSelectPage";
import Dashboard from "./Pages/Dashboard";
import FindEvents from "./Pages/FindEvents";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const navigation = useNavigation();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome Page" component={WelcomePage} />
            <Stack.Screen name="Select Location" component={PlaceSelectPage} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Find Events" component={FindEvents} />
        </Stack.Navigator>
    );
};

export default StackNavigator;