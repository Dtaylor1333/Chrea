import React, { useEffect, useState } from "react"
import Event from "../backend/models/event.model"
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, FlatList} from 'react-native';
import eventCardStyles from "../styles/eventCardStyles";
import { child, get, getDatabase, ref } from "@firebase/database";
import FastImage from 'react-native-fast-image'

import {
    getStorage,
    ref as refS,
    getDownloadURL
  } from 'firebase/storage';

export default function EventCard({attending, location, navigation, route, event, eventCardStyles}) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const storage = getStorage();
    const [image, setImage] = useState("../Images/ChreaLogo.png");
    const [pImage, setpImage] = useState("../Images/ChreaLogo.png")
    const [rerender, setRerender] = useState(true)
    const [isBack, setBack] = useState(false)

    async function getImage() {
        await getDownloadURL(refS(storage, `Images/${event.event_flyer}`)).then((url) => setImage(url));
    }

    async function getPromoterImage() {
        await getDownloadURL(refS(storage, `Images/Headshot${getRandomInt(1,6)}.jpg`)).then((url) => setpImage(url));
    }

    useEffect(() => {
        getImage()
        getPromoterImage()
    }, [])
    
    return (
        <View>
            <TouchableOpacity style={eventCardStyles.card} onPress={() => navigation.navigate("Event Details", {event: event, attending: attending})}>
                 <FastImage style={eventCardStyles.cardImg} source={{uri: image}}></FastImage>
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
                <Text style={eventCardStyles.catagory}>{event.category[0]}</Text>
                <Text style={eventCardStyles.time}>{event.time}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <FastImage style={eventCardStyles.promoterImg} source={{uri: pImage}}></FastImage>
                        <Text style={eventCardStyles.promoterName}>Promoted by {event.promoter_name}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}