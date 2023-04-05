import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, FlatList} from 'react-native';
import FindEvents from './FindEvents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import WelcomePage from './WelcomePage';
import BottomTabs from './BottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import EventDetails from './EventDetails';
import Event from '../backend/models/event.model';
import EventCard from './EventCard';
import eventCardStylesM from '../styles/eventCardStyles';
import eventCardStyles from '../styles/eventCardStyles copy';
import { child, get, getDatabase, orderByChild, query, ref } from '@firebase/database';


export default function BestMoves({navigation, route}){

    const { location } = route.params
    const isFocused = useIsFocused()
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Event[]>([]);
    const db = getDatabase();
    const dbRef = ref(db);

    const getEvents = async () => {
        try {
            console.log(isLoading)
            get(query(ref(db, `events/${location}`), orderByChild('votes'))).then((snapshot) => {
                if(snapshot.exists()) {
                    var count = 0
                    snapshot.forEach((event) => {
                        if (count == snapshot.size-1) {
                            setData(current => [...current, event.val()].reverse())
                        }
                        else{
                        setData(current => [...current, event.val()])
                        }
                        
                        count++;
                    })
                }
                setLoading(false);
            })
        } catch (error) {
            console.error(error, "FAILURE");

        }
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setData([])
        setLoading(true)
        getEvents();
    }, [isFocused]);

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
            {data.map((event, index) => <EventCard location={location} event={event} navigation={navigation} route={route} eventCardStyles={index == 0 ? eventCardStylesM : eventCardStyles}></EventCard>)}
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

    
