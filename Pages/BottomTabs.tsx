import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BestMoves from './BestMoves';
import FindEvents from './FindEvents';
import PlaceSelectPage from './PlaceSelectPage';



const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                  <Tab.Screen name="Select Place" component={PlaceSelectPage} options={{headerShown:false}}/>
                  <Tab.Screen name="Best Moves" component={BestMoves} options={{headerShown:false}}/>
            </Tab.Navigator>
              {/* <Entypo name="location"/>
                    <Fontisto name="fire"/>
                    <MaterialIcons name="local-fire-department"/> */}
        </NavigationContainer>
    );
  }

  export default BottomTabs;