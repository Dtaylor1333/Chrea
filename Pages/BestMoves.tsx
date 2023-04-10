import React, { Component, useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, FlatList, ImageBackground, Modal, Pressable, Alert} from 'react-native';
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
import { getAuth } from 'firebase/auth';
import AppContext from '../AppContext';
import SwitchSelector from 'react-native-switch-selector';


export default function BestMoves({navigation, route}){

    const auth = getAuth();
    const user = auth.currentUser;
    const myContext = useContext(AppContext);
    //const { location } = route.params
    const isFocused = useIsFocused()
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Event[]>([]);
    const [myData, setMyData] = useState<Event[]>([]);
    const db = getDatabase();
    const [voted, setVoted] = useState<boolean[]>([])
    const [modalVisible, setModalVisible] = useState(false)
    const [bestMoves, setMoves] = useState(0)
    const dbRef = ref(db);

    const options = [
        { label: "Best Moves", value: "bestMoves", disabled: true },
        { label: "Your Moves", value: "yourMoves" },
      ];

      const optionsY = [
        { label: "Best Moves", value: "bestMoves" },
        { label: "Your Moves", value: "yourMoves", disabled: true},
      ];

    const getEvents = async () => {
        try {
            console.log(isLoading)
            get(query(ref(db, `events/${myContext.locationName}`), orderByChild('votes'))).then((snapshot) => {
                if(snapshot.exists()) {
                    var count = 0
                    snapshot.forEach((event) => {
                        if (count == snapshot.size-1) {
                            if (event.val().usersVoted && event.val().usersVoted[user!.uid] == true) {
                                setVoted(current => [...current, true].reverse())
                            }
                            else {
                                setVoted(current => [...current, false].reverse())
                            }
                            setData(current => [...current, event.val()].reverse())
                        }
                        else{
                            if (event.val().usersVoted && event.val().usersVoted[user!.uid] == true) {
                                setVoted(current => [...current, true])
                            }
                            else {
                                setVoted(current => [...current, false])
                            }
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

    const getMyEvents = async () => {
        try {
            console.log(isLoading)
            get(query(ref(db, `events/${myContext.locationName}`), orderByChild('votes'))).then((snapshot) => {
                if(snapshot.exists()) {
                    var count = 0
                    snapshot.forEach((event) => {
                        if (count == snapshot.size-1) {
                            if (event.val().usersVoted && event.val().usersVoted[user!.uid] == true) {
                                setMyData(current => [...current, event.val()].reverse())
                            }
                        }
                        else{
                            if (event.val().usersVoted && event.val().usersVoted[user!.uid] == true) {
                                setMyData(current => [...current, event.val()])
                            }
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
        setVoted([])
        setData([])
        setMyData([])
        setLoading(true)
        getEvents();
        getMyEvents();
    }, [isFocused]);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if(!bestMoves) {
        return (
            <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}>
            
            <SafeAreaView style= {styles.width}>
                <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.selector}>
                    <SwitchSelector
                    options={options}
                    initial={bestMoves}

                    onPress={() => setMoves(1)}
                    borderColor={'#c65304'}
                    buttonColor={'#c65304'}
                    backgroundColor={'#f8eee2'}
                    
                    />
                </View>
            
                <Text style = {styles.heading1}>Best Moves </Text>
                <Text style = {styles.heading2}>Check out the top moves in {'\n'}your area.</Text>
            <View>
                {data.map((event, index) => <EventCard attending={voted[index]} location={myContext.locationName} event={event} navigation={navigation} route={route} eventCardStyles={voted[index] ? eventCardStylesM : eventCardStyles}></EventCard>)}
            </View>
            </ScrollView> 
            </SafeAreaView>
            </ImageBackground>  
        )
    }
    
    else {
        return (
        <ImageBackground style = {styles.backgroundImg} source = {require('../Images/LoadingPageBackground.png')}>
            <SafeAreaView style= {styles.width}>
                <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.selector}>
                    <SwitchSelector
                    options={optionsY}
                    initial={bestMoves}
                    onPress={() => setMoves(0)}
                    borderColor={'#c65304'}
                    buttonColor={'#c65304'}
                    backgroundColor={'#f8eee2'}
                    
                    />
                </View>
                <Text style = {styles.heading1}>Your Moves </Text>
                <Text style = {styles.heading2}>Check out the moves you {'\n'}are going to attend.</Text>
            <View>
                {myData.map((event, index) => <EventCard attending={true} location={myContext.locationName} event={event} navigation={navigation} route={route} eventCardStyles={eventCardStylesM}></EventCard>)}
            </View>
            </ScrollView> 
            </SafeAreaView>
            </ImageBackground>
        )
    }
 }

const styles = StyleSheet.create({

    width: {
        minWidth: '85%'
    },

    heading1: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#3c1c07',
        textAlign: 'left',
        marginBottom: 6,
        marginLeft: 13,
        marginTop: 20,
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

    profile:{
        position: 'absolute',
        color: '#3c1c07',
        right: 30,
        top: 80,
        fontSize: 40,
    },

    profileX:{
        position: 'absolute',
        top: '10%',
        right: '5%'
    },

    backgroundImg: {
        // flex:1,
        height: '102%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#c65304',
        margin: 10
      },
      buttonDelete: {
        backgroundColor: 'red',
        margin: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      selector: {
        width: '60%',
        left: '20%'
      }
});
