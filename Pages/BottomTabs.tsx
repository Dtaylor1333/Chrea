import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BestMoves from './BestMoves';
import FindEvents from './FindEvents';
import PlaceSelectPage from './PlaceSelectPage';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YourMoves from './YourMoves';
import NewSelectPage from './NewSelectionPage';
import MyAccount from './MyAccount';
import Moves from './Moves';



const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarStyle:{
                  backgroundColor:'#3c1c07',
                  height: '10%',
                },
                tabBarItemStyle:{
                  marginTop: 5,
                },
                tabBarIcon: ({focused}) => {
                  if (route.name === 'Best Moves') {
                  return <Ionicons name="trophy-outline" size={25} color={focused ? "tomato":"white"}/>
                  }
                  // if (route.name === 'Add Event') {
                  //   return <Ionicons name="add-circle-outline" size={25} color={focused ? "tomato":"white"}/>
                  // }
                  if (route.name === 'My Account') {
                    return <Ionicons name="person-circle-outline" size={25} color={focused ? "tomato":"white"}/>
                  }
                  else {
                    return <Ionicons name="bookmarks-outline" size={25} color={focused ? "tomato":"white"}/>
                  }
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
            })}>
              <Tab.Screen name="Best Moves" component={BestMoves} options={{headerShown:false}}/>
              {/* <Tab.Screen name="Add Event" component={YourMoves} options={{headerShown:false}}/>   */}
              <Tab.Screen name="My Account" component={MyAccount} options={{headerShown:false}}/>  
            </Tab.Navigator>
    );
  }
  const screenOptions = {
    
}

  export default BottomTabs;