import React, { Component, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView} from 'react-native';
import FindEvents from './FindEvents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import WelcomePage from './WelcomePage';
import BottomTabs from '../BottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native';
import EventDetails from './EventDetails';


 


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

    // const { votes } = this.props.route.params;
    const [refreshing, setRefreshing] = React.useState(false);
    // const navigation = useNavigation();
    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    return (

        <SafeAreaView >
            <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View>
        <Ionicons style={styles.backB} name="arrow-back-outline" onPress={() => navigation.navigate("Choose Location")}/>
        </View>
            <Text style = {styles.heading1}>Best Moves </Text>
            <Text style = {styles.heading2}>Check out the top 4 moves in {'\n'}your area.</Text>
        <View>
          <View> 
            <TouchableOpacity style={styles.cardM} onPress={() => navigation.navigate("Event Details")}>
                <Image style={styles.cardImgM}
                    source={require('/Users/deandretaylor/ChreaApp/Images/Img1.jpg')}></Image>
            <View style={{flexDirection:'row', height: 50}}>   
                <Text style = {styles.eventNameM}>Bridger's Westport</Text>
                <View>
                    {/* <Text style={styles.attendanceM}>200</Text> */}
                    <Text style={styles.attendanceM}>{route.params?.votes}</Text>
                    <Text style={styles.attendanceMP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 25}}>
                            <Image style={styles.profilesM} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={styles.profilesM} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={styles.profilesM} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={styles.profilesM} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={styles.profilesM} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={styles.profilesM} source={require('../Images/Headshot6.jpg')}></Image>
                            <Text style={styles.plusM}>+</Text>
                        </View>
                </View>
            </View>
                <Text style={styles.catagoryM}>Club/Bar</Text>
                <Text style={styles.timeM}>8PM-1:30AM </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.promoterImgM} source={require('../Images/Headshot1.jpg')}></Image>
                        <Text style={styles.promoterNameM}>Promoted by Emmanuel K.</Text>
                    </View>
            </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Event Details2", )}>
                <Image style={styles.cardImg}
                    source={require('/Users/deandretaylor/ChreaApp/Images/Img2.jpg')}></Image>
            <View style={{flexDirection:'row', height: 50}}>
                <Text style = {styles.eventName}>Westport Ale House</Text>
                <View>
                    <Text style={styles.attendance}>{route.params?.votes2}</Text>
                    <Text style={styles.attendanceP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 30}}>
                            <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
                            <Text style={styles.plus}>+</Text>
                        </View>
                </View>
            </View>
                <Text style={styles.catagory}>Bar</Text>
                <Text style={styles.time}>4PM-11PM</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.promoterImg} source={require('../Images/Headshot5.jpg')}></Image>
                        <Text style={styles.promoterName}>Promoted by Jammi G. </Text>
                    </View>
            </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Event Details3")}>
                <Image style={styles.cardImg}
                source={require('/Users/deandretaylor/ChreaApp/Images/Img3.jpg')}></Image>
            <View style={{flexDirection:'row', height: 50}}>
                <Text style = {styles.eventName}>The Levee Westport</Text>
                <View>
                    <Text style={styles.attendance}>{route.params?.votes3}</Text>
                    <Text style={styles.attendanceP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 30}}>
                            <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
                            <Text style={styles.plus}>+</Text>
                        </View>
                </View>
            </View>
                <Text style={styles.catagory}>Bar & Resturant</Text>
                <Text style={styles.time}>4PM-3AM</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.promoterImg} source={require('../Images/Headshot4.jpg')}></Image>
                        <Text style={styles.promoterName}>Promoted by James K.</Text>
                    </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Event Details4")}>
                <Image style={styles.cardImg}
                    source={require('/Users/deandretaylor/ChreaApp/Images/Img4.jpg')}></Image>
                <View style={{flexDirection:'row', height: 50}}>
                    <Text style = {styles.eventName}>Power & Light District</Text>
                    <View>
                    <Text style={styles.attendance}>{route.params?.votes4}</Text>
                    <Text style={styles.attendanceP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 30}}>
                            <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image>
                            <Text style={styles.plus}>+</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.catagory}>Plaza</Text>
                <Text style={styles.time}>12AM-12AM</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.promoterImg} source={require('../Images/Headshot2.jpg')}></Image>
                        <Text style={styles.promoterName}>Promoted by Power & Light.</Text>
                    </View>
            </TouchableOpacity>
          </View>
          
        {/* <BottomTabs /> */}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
 }

const styles = StyleSheet.create({
    container1: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // marginLeft: -150,
    },    

    container2: {
        flex:1,
    },    


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

    cardImg: {
        width: 120,
        height: 115,
        borderRadius: 8,
    },

    cardImgM: {
        width: 120,
        height: 123,
        borderRadius: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    eventName:{
        // justifyContent: 'center',
        width: 120,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 8,
        marginTop: 2,
    },

    eventNameM:{
        // justifyContent: 'center',
        width: 120,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginLeft: 8,
        marginTop: 2,
    },

    cardM:{
        borderColor: 'black',
        borderStyle: 'solid',
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 0,
        borderRadius: 13,
        margin: 5,
        alignSelf: 'center',
        width: 360,
        height: 148,
        shadowColor: 'black',
        backgroundColor: '#3c1c07',
        flexWrap: 'wrap',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    card:{
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 12,
        borderRadius: 13,
        margin: 5,
        marginLeft: 0,
        alignSelf: 'center',
        width: 360,
        height: 138,
        shadowColor: 'black',
        backgroundColor: '#f8eee2',
        flexWrap: 'wrap',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },

    catagoryM: {
        color: '#a38c84',
        alignSelf: 'flex-start',
        marginBottom: 3,
        marginLeft: 8,
        marginTop: 3,
        width: 120,
        // width: 100,
        
    },

    
    timeM:{
        color: 'white',
        marginLeft: 8,
        marginTop: 1,  
        width: 120,
    },

    attendanceM:{
        color: '#c65304',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 80,
        marginLeft:13,
        marginTop: 0,
    },

    catagory: {
        color: '#a38c84',
        marginLeft: 8,
        marginTop: 1,
        marginBottom: 2,
        width: 120,
    },

    
    time:{
        color: 'black',
        marginLeft: 8,
        marginTop: 0,
        width: 120,
    },

    attendance:{
        color: '#c65304',
        fontSize: 37,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 90,
    },

    profilesM:{
        width: 10,
        height: 10,
        borderRadius: 20,
        marginTop: 5,
    },

    profiles:{
        width: 9,
        height: 9,
        borderRadius: 20,
        marginTop: 4,
    },

    promoterImgM: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginLeft: 8,
        marginTop: 8,
    },

    promoterImg: {
        width: 19,
        height: 19,
        borderRadius: 20,
        marginLeft: 8,
        marginTop: 5,
    },

    attendanceP:{
        color: '#3c1c07',
        textAlign: 'right',
        marginTop: 0,
        width: 90,
        fontWeight: '600',
    },

    attendanceMP:{
        color: 'white',
        textAlign: 'right',
        marginTop: 0,
        fontWeight: '600',
        width: 90,

    },

    promoterNameM: {
        color: 'white',
        // marginBottom: 3,
        marginLeft: 5,
        marginTop: 8,
        height: 16,
    },

    promoterName: {
        color: '#3c1c07',
        // margin: 3,
        marginLeft: 5,
        marginTop: 6,
    },

    plusM: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: -2,
        marginTop: 1.5,
    },

    plus: {
        color: '#c65304',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: -2,
        marginTop: .5,
    },

    backB:{
        color: '#3c1c07',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 0,
    },
});

    
