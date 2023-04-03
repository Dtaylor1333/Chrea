import React, { useEffect, useState } from "react"
import Event from "../backend/models/event.model"
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, FlatList} from 'react-native';
import eventCardStyles from "../styles/eventCardStyles";

export default function EventCard({navigation, route, event, eventCardStyles, user}) {


    /*const [img, setImg] = useState("");

    const fetchImage = async () => {
        const res = await fetch();
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);*/
    
    
    return (
        <View>
            <TouchableOpacity style={eventCardStyles.card} onPress={() => navigation.navigate("Event Details", {event: event, user: user})}>
                <Image style={eventCardStyles.cardImg}
                    source={{uri: `http://ec2-3-84-42-180.compute-1.amazonaws.com/Images/${event.event_flyer}`}}></Image>
            <View style={{flexDirection:'row', height: 50}}>   
                <Text style = {eventCardStyles.eventName}>{event.event_title}</Text>
                <View>
                    {/* <Text style={eventCardStyles.attendanceM}>200</Text> */}
                    <Text style={eventCardStyles.attendance}>{event.votes}</Text>
                    <Text style={eventCardStyles.attendanceP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 25}}>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={eventCardStyles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
                            <Text style={eventCardStyles.plus}>+</Text>
                        </View>
                </View>
            </View>
                <Text style={eventCardStyles.catagory}>{event.venue_type}</Text>
                <Text style={eventCardStyles.time}>8PM-1:30AM </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={eventCardStyles.promoterImg} source={{uri: `http://ec2-3-84-42-180.compute-1.amazonaws.com/Images/${event.promoter_image}`}}></Image>
                        <Text style={eventCardStyles.promoterName}>Promoted by {event.promoter}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}