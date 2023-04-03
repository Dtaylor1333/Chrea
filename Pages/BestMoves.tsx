import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, FlatList} from 'react-native';
import FindEvents from './FindEvents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import WelcomePage from './WelcomePage';
import BottomTabs from './BottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native';
import EventDetails from './EventDetails';
import Event from '../backend/models/event.model';
import EventCard from './EventCard';
import eventCardStylesM from '../styles/eventCardStyles';
import eventCardStyles from '../styles/eventCardStyles copy';


 


// const BestMoves = () => {

//     return (

//         <SafeAreaView style = {styles.container1}>
//           <Text style = {styles.heading1}>Best Moves </Text>
//           <Text style = {styles.heading2}>Check out the top 4 moves in {'\n'}your area.</Text>
//           <View> 
//             <TouchableOpacity style={styles.cardM}>
//                 <Image style={styles.cardImgM}
//                     source={require('../Images/Img1.jpg')}></Image>
//             <View style={{flexDirection:'row', height: 50}}>   
//                 <Text style = {styles.eventNameM}>Best Party of The Year</Text>
//                 <View>
//                     <Text style={styles.attendanceM}>803</Text>
//                     <Text style={styles.attendanceMP}>Attending</Text>
//                         <View style={{flexDirection: 'row', marginLeft: 25}}>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot1.jpg')}></Image>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot2.jpg')}></Image>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot3.jpg')}></Image>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot4.jpg')}></Image>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot5.jpg')}></Image>
//                             <Image style={styles.profilesM} source={require('../Images/Headshot6.jpg')}></Image>
//                             <Text style={styles.plusM}>+</Text>
//                         </View>
//                 </View>
//             </View>
//                 <Text style={styles.catagoryM}>Venue Party</Text>
//                 <Text style={styles.timeM}>8PM-1:30AM </Text>
//                     <View style={{flexDirection: 'row'}}>
//                         <Image style={styles.promoterImgM} source={require('../Images/Headshot1.jpg')}></Image>
//                         <Text style={styles.promoterNameM}>Promoted by Future H.</Text>
//                     </View>
//             </TouchableOpacity>
//           </View>
          
//           <View>
//             <TouchableOpacity style={styles.card}>
//                 <Image style={styles.cardImg}
//                     source={require('../Images/Img2.jpg')}></Image>
//             <View style={{flexDirection:'row', height: 50}}>
//                 <Text style = {styles.eventName}>Dry Tals Cocktails</Text>
//                 <View>
//                     <Text style={styles.attendance}>589</Text>
//                     <Text style={styles.attendanceP}>Attending</Text>
//                         <View style={{flexDirection: 'row', marginLeft: 30}}>
//                             <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
//                             <Text style={styles.plus}>+</Text>
//                         </View>
//                 </View>
//             </View>
//                 <Text style={styles.catagory}>Bar</Text>
//                 <Text style={styles.time}>2PM-11PM</Text>
//                     <View style={{flexDirection: 'row'}}>
//                         <Image style={styles.promoterImg} source={require('../Images/Headshot1.jpg')}></Image>
//                         <Text style={styles.promoterName}>Promoted by Keith G. </Text>
//                     </View>
//             </TouchableOpacity>
//           </View>
          
//           <View>
//             <TouchableOpacity style={styles.card}>
//                 <Image style={styles.cardImg}
//                 source={require('../Images/Img3.jpg')}></Image>
//             <View style={{flexDirection:'row', height: 50}}>
//                 <Text style = {styles.eventName}>My House Bar & Pub</Text>
//                 <View>
//                     <Text style={styles.attendance}>569</Text>
//                     <Text style={styles.attendanceP}>Attending</Text>
//                         <View style={{flexDirection: 'row', marginLeft: 30}}>
//                             <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
//                             <Text style={styles.plus}>+</Text>
//                         </View>
//                 </View>
//             </View>
//                 <Text style={styles.catagory}>Bar & Resturant</Text>
//                 <Text style={styles.time}>10AM-10PM</Text>
//                     <View style={{flexDirection: 'row'}}>
//                         <Image style={styles.promoterImg} source={require('../Images/Headshot1.jpg')}></Image>
//                         <Text style={styles.promoterName}>Promoted by EYL.     </Text>
//                     </View>
//             </TouchableOpacity>
//           </View>

//           <View>
//             <TouchableOpacity style={styles.card}>
//                 <Image style={styles.cardImg}
//                     source={require('../Images/Img4.jpg')}></Image>
//                 <View style={{flexDirection:'row', height: 50}}>
//                     <Text style = {styles.eventName}>Back to School Darty</Text>
//                     <View>
//                     <Text style={styles.attendance}>321</Text>
//                     <Text style={styles.attendanceP}>Attending</Text>
//                         <View style={{flexDirection: 'row', marginLeft: 30}}>
//                             <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
//                             <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
//                             <Text style={styles.plus}>+</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <Text style={styles.catagory}>Day Party</Text>
//                 <Text style={styles.time}>11AM-7PM</Text>
//                     <View style={{flexDirection: 'row'}}>
//                         <Image style={styles.promoterImg} source={require('../Images/Headshot1.jpg')}></Image>
//                         <Text style={styles.promoterName}>Promoted by Howard U.</Text>
//                     </View>
//             </TouchableOpacity>
//           </View>
          
//         {/* <BottomTabs /> */}
//         </SafeAreaView>
//     )
//  }

// export default BestMoves;


export default function BestMoves({navigation, route}){

    const { location, user } = route.params
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Event[]>([]);
    const imagesUrls = []

    const getEvents = async (location: string) => {
        try {
            const response = await fetch('https://ec2-3-84-42-180.compute-1.amazonaws.com/mock/chrea_mock_db.json');
            const json = await response.json();
            console.log(json)
            setData(json["events"][location]);

            data.forEach(element => {
                imagesUrls.push(`https://ec2-3-84-42-180.compute-1.amazonaws.com/Images/${element.event_flyer}`)
            });     
        } catch (error) {
            console.error(error, "FAILURE");

        } finally {
            setLoading(false);
        }
    };

    // const navigation = useNavigation();
    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        getEvents(location);
    }, []);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (

        <SafeAreaView >
            <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View>
        <Ionicons style={styles.backB} name="arrow-back-outline" onPress={() => navigation.goBack()}/>
        </View>
            <Text style = {styles.heading1}>Best Moves </Text>
            <Text style = {styles.heading2}>Check out the top 4 moves in {'\n'}your area.</Text>
        <View>
            {data.map((event, index) => <EventCard user={user} event={event} navigation={navigation} route={route} eventCardStyles={index == 0 ? eventCardStylesM : eventCardStyles}></EventCard>)}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
 }

const styles = StyleSheet.create({

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

    backB:{
        color: '#3c1c07',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 0,
    },
});

    
