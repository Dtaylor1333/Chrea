import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MoreDetails() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, };

    return (
    
    <SafeAreaView>
        <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'light-content'}
                backgroundColor={backgroundStyle.backgroundColor}/>
      <ScrollView>
        <View>
            <Image style={styles.flyerImg} source={require('../Images/Welcome.jpg')}></Image>
            <Text style={styles.heading}>Best Party of The Year </Text>
            <Text style={styles.address}>123 Adress Street Columbia, MO 65201</Text>
            <Text style={styles.details}>January 1st | 8PM-2AM | Ages: 21+ | Venue Party</Text>
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.promoterImgM} source={require('../Images/Headshot1.jpg')}></Image>
                <View>
                    <Text style={styles.promoterNameM}>Promoted by Future H.</Text>
                    <Text style={styles.subhead}>26 Events Hosted</Text>
                </View>
            </View>
        </View>
        <Image style={styles.flyerImg} source={require('../Images/Welcome.jpg')}></Image>
        <Text>Here are the average times other are going.</Text>
        <Text>What time do you plan on going?</Text>
        <Text>Cover Charge</Text>
        {/* <Text>Last updated by {time}</Text> */}
        {/* <Text>${value}</Text> */}
        <Text>Good</Text><Text>Ehhh</Text><Text>Not Good</Text>
        <Text>Vibe Check</Text>
        <Text>There Now? How is it looking?</Text>
        <Text>Good</Text><Text>Ehhh</Text><Text>Not Good</Text>
        <Image style={styles.flyerImg} source={require('../Images/Welcome.jpg')}></Image>

      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    flyerImg: {
        height: 325,
        width: 'auto',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
    },

    heading: {
        fontSize: 30,
        marginLeft: 15,
        marginTop: 15,
        width: 240,
        textAlign: 'left',
        fontWeight: '700',
        color: '#3c1c07',
    },

    address: {
        fontSize: 13,
        marginLeft: 15,
        marginTop: 1,
        width: 240,
    },

    details: {
        fontSize: 10,
        marginLeft: 15,
        marginTop: 5,
        width: 240,
    },

    promoterImgM:{
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 15,
        marginTop: 14,
    },

    promoterNameM:{
        // marginBottom: 3,
        fontSize: 14,
        marginLeft: 7,
        marginTop: 22,
        height: 16,
        width: 240,
    },

    planQues:{
        fontSize: 25,
        fontWeight: '600',
        color: '#3c1c07',
        textAlign: 'center',
        marginTop: 200,
    },

    button2: {
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: '#3c1c07',
        width: 160,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        margin: 5,
    },

    buttonText3: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        
    },

    subhead: {
        fontSize: 12,
        color: '#a38c84',
        marginLeft: 7,
        marginTop: 2,
    },

});

