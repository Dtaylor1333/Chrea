import React, { Component, useState, useEffect } from 'react'
import { Button, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';
import { Image, StyleSheet, Text, View, Linking, RefreshControl, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function EventDetails4({navigation}) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, };
    const[votes4, setVotes4] = useState(0);
    const [changeColor, setChangeColor]= useState(0);
    const [refreshing, setRefreshing] = React.useState(false);
    // const navigation = useNavigation();
    const [tempList, setTempList] = useState([]);

    const submit = () => {
        navigation.navigate({
            name: "Best Moves",
            params: {votes4: votes4},
            merge: true,
        });
    }

    useEffect(()=>{
        fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(json => console.log(json))
    }, [])

    function upVote(){
        if(votes4 !== 1) {
            setVotes4(votes4 + 1);
            }
    }   

    function downVote(){
        if(votes4 ===1){
            setVotes4(votes4 - 1)
        }
        else {
            navigation.navigate("Best Moves")
        }
    }

    const [price] = useState(20);

    const buttonColor = () => {
        // setChangeColor(!changeColor)
        setChangeColor(changeColor)
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const createTwoButtonAlert = () =>
    Alert.alert('Success', 'Vote has been counted', [
      {text: 'OK'},
    ]);

    function goback(){
        navigation.navigate({
            name: "Best Moves",
            params: {votes4: votes4},
            merge: true,
        })
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
        <Ionicons style={styles.backB} name="arrow-back-outline" onPress={goback}/>
        </View>
        <Image style={styles.flyerImg} source={require('/Users/deandretaylor/ChreaApp/Images/Img4.jpg')}></Image>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={styles.heading}>Power & Light District </Text>
                <Text style={styles.address}>50 East 13th Street, Kansas City, MO 64106</Text>
                <Text style={styles.details}>March 23rd | 12AM-12AM | Ages: 21+ | Plaza</Text>
            </View>
            <View style={{width: 122}}>
                <Text style={styles.heading2}>Cover Charge</Text>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.update}>Updated 15 minutes ago</Text>
                <Text style={styles.directions} onPress={() => {Linking.openURL("")}}>Directions</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.promoterImgM} source={require('../Images/Headshot1.jpg')}></Image>
            <Text style={styles.promoterNameM}>Promoted by Scott M.</Text>
        </View>
        <View>
            <Text style={styles.planQues}>Sound like a plan?</Text>
            <View style ={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity 
                onPress={()=>{upVote(); buttonColor(); createTwoButtonAlert()}} 
                disabled={votes4 === 1}
                style={styles.button2}>
                    <View >
                        <Text style = {styles.buttonText2} >Going</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {downVote(); goback()}}
                disabled={votes4 === 0}>
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

