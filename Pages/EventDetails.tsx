import React, { Component, useState, useEffect, useCallback, useMemo } from 'react'
import { Button, FlatList, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';
import { Image, StyleSheet, Text, View, Linking, RefreshControl, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, runTransaction, get, child} from "firebase/database";
import { getAuth } from "firebase/auth";
import {
    getStorage,
    ref as refS,
    getDownloadURL
  } from 'firebase/storage';

import LoadingScreen from './LoadingScreen';


export default function EventDetails({navigation, route }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const { event } = route.params
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, };
    const[votes, setVotes] = useState(0);
    const [changeColor, setChangeColor]= useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [image, setImage] = useState("../Images/ChreaLogo.png");
    const storage = getStorage();

    function addVote(uid) {
        const db = getDatabase();
        console.log(`${event.location}/${parseInt(event.id)}`)
        const eventRef = ref(db, `events/${event.location}/${parseInt(event.id)}`);

        runTransaction(eventRef, (post) => {
          if (post) {
            if (post.usersVoted && !post.usersVoted[uid]) {
              post.votes++;
              post.usersVoted[uid] = true;
              createTwoButtonAlert();
            } else {
              if (!post.usersVoted) {
                post.usersVoted = {};
              }
              if (!post.usersVoted[uid] || post.usersVoted[uid] == false ) {
                post.votes++;
                createTwoButtonAlert();
              }  
              else {
                createFalseButtonAlert();
              }
              post.usersVoted[uid] = true;
            }
          }
          return post;
        });
    }

    function remoteVote(uid) {
        const db = getDatabase();
        const eventRef = ref(db, `events/${event.location}/${parseInt(event.id)}`);
      
        runTransaction(eventRef, (post) => {
          if (post) {
            if (post.usersVoted && post.usersVoted[uid] == true) {
              post.votes--;
              
              createTwoButtonAlert();
            } 
            else {
                if(post.usersVoted[uid] == false) {
                    createFalseButtonAlert();
                }
                else {
                   post.usersVoted[uid] = false; 
                   post.votes--;
                   createTwoButtonAlert();
                } 
            }
          }
          return post;
        });
    }


    async function getImage() {
        await getDownloadURL(refS(storage, `Images/${event.event_flyer}`)).then((url) => setImage(url));
    }

    const submit = () => {
        navigation.navigate({
            name: "Best Moves",
            params: {votes: votes},
            merge: true,
        });
    }

    const createTwoButtonAlert = () =>
    Alert.alert('Success!', 'Vote has been counted!', [
      {text: 'OK'},
    ]);

    const createFalseButtonAlert = () =>
    Alert.alert('Oh, no!', 'You have already voted.', [
      {text: 'OK'},
    ]);

    const downVote = useCallback(() => {
        if(votes ===1){
            setVotes(votes - 1)
        }
        else {
            navigation.navigate("Best Moves")
        }
    }, [votes])

    const [price] = useState(20);

    const buttonColor = () => {
        // setChangeColor(!changeColor)
        setChangeColor(changeColor)
    }

    useEffect(() => {
        getImage()
    },[])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    if(isLoading) {
        console.log("LOADING")
        return (
        <LoadingScreen></LoadingScreen>
        )
    }
    
    return (
    <SafeAreaView>
    
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}/>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View>
        <View>
        {/* <Ionicons style={styles.backB} name="arrow-back-outline" onPress={() => props.navigation.navigate("Best Moves")(upVote)}/> */}
        <Ionicons style={styles.backB} name="arrow-back-outline" onPress={() => navigation.goBack()}/>
        </View>
        <Image style={styles.flyerImg} source={{uri: image}}></Image>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={styles.heading}>{event.event_title}</Text>
                <Text style={styles.address}>{event.address}</Text>
                <Text style={styles.details}>{event.date} | CLOSED | Ages: {event.ages} | Venue</Text>
            </View>
            <View style={{width: 122}}>
                <Text style={styles.heading2}>Cover Charge</Text>
                <Text style={styles.price}>${event.price}</Text>
                <Text style={styles.update}>Updated 15 minutes ago</Text>
                <Text style={styles.directions} onPress={() => {Linking.openURL("https://www.google.com/maps/place/Bridger's/@39.0528367,-94.5939444,17z/data=!3m2!4b1!5s0x87c0efc53e795c4d:0xe2f601662744fd1a!4m6!3m5!1s0x87c0ef1ea4583933:0x32c1fd088e7728ec!8m2!3d39.0528367!4d-94.5917557!16s%2Fg%2F11fm_76g09")}}>Directions</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.promoterImgM} source={{uri: `http://ec2-3-84-42-180.compute-1.amazonaws.com/Images/${event.promoter_image}`}}></Image>
            <Text style={styles.promoterNameM}>Promoted by {event.promoter_name}</Text>
        </View>
        <View>
            <Text style={styles.planQues}>Sound like a plan?</Text>
            {/* <Text>{votes}</Text> */} 
            <View style ={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity 
                onPress={()=>{ addVote(user?.uid) }} 
                style={styles.button2}>
                    <View >
                        <Text style = {styles.buttonText2} >Going</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {remoteVote(user?.uid)}}>
                    <View style = {styles.button2} >
                        <Text style = {styles.buttonText2} >Not Going</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    flyerImg: {
        height: 300,
        width: 'auto',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
    },

    heading: {
        fontSize: 40,
        marginLeft: 15,
        marginTop: 15,
        width: 240,
        textAlign: 'left',
        fontWeight: '700',
        color: '#3c1c07',
    },

    address: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 5,
        width: 240,
    },

    details: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        width: 240,
        color: '#a38c84',
    },

    promoterImgM:{
        width: 35,
        height: 35,
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 8,
    },

    promoterNameM:{
        // marginBottom: 3,
        fontSize: 16,
        marginLeft: 7,
        marginTop: 16,
        // height: 16,
        width: 240,
    },

    planQues:{
        fontSize: 25,
        fontWeight: '600',
        color: '#3c1c07',
        textAlign: 'center',
        marginTop: 40,
    },

    button: {
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: '#3c1c07',
        width: 160,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        margin: 5,
        borderColor: '#3c1c07',
    },

    button2: {
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: 'transparent',
        width: 160,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        margin: 5,
        borderColor: '#3c1c07',
        borderWidth: 1,
        borderStyle: 'solid',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    buttonText2: {
        color: '#c65304',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    directions: {
        fontSize: 18,
        color: '#c65304',
        textAlign: 'right',
        marginTop: 25,
    },

    price:{
        // marginTop: 20,
        fontSize: 50,
        color: '#c65304',
        fontWeight: '800',
        textAlign: 'right',
    },

    update:{
        fontSize: 10,
        color: '#a38c84',
        textAlign: 'right',
        alignSelf: 'flex-end',
        width: 100,
        // borderColor: 'red',
        // borderWidth: 2,
    },

    heading2:{
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'right',
        marginTop: 22,
    },

    backB:{
        color: '#3c1c07',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 0,
    },
});

