import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';



export default function CardlistSortTest({navigation, route}){

    const [refreshing, setRefreshing] = React.useState(false);
    // const navigation = useNavigation();
     

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    // const [data, setData] = useState(jsonfile);
    const [data, setData] = useState([
        { title: 'Friday Night Lights', description: 'Bridgers', upvotes: 3, time: '6AM-12AM', category: 'Club', promoter: 'Jammie G.', source: require('/Users/deandretaylor/ChreaApp/Images/Welcome.jpg')},
        { title: 'College Night', description: 'Ale House', upvotes: 1, time: '2AM-1AM', category: 'Bar', promoter: 'Scott F.', source: require('/Users/deandretaylor/ChreaApp/Images/Img3.jpg')},
        { title: 'St. Pats Party', description: 'The Levee', upvotes: 2, time: '9AM-3AM', category: 'Bar', promoter: 'James K.', source: require('/Users/deandretaylor/ChreaApp/Images/Img1.jpg')},
        { title: 'March Madness', description: 'Power & Light', upvotes: 0, time: '10AM-5AM', category: 'Venue', promoter:'Xavier M.', source: require('/Users/deandretaylor/ChreaApp/Images/Img2.jpg')},
      ]);
    
      function handleUpvote(item) {
        const newData = data.map((card) => {
          if (card.title === item.title) {
            return { ...card, upvotes: card.upvotes + 1 };
          }
          return card;
        });
        setData(newData.sort((a, b) => b.upvotes - a.upvotes));
      }
    
      function renderItem({item}) {
        return (
          <Card
            title={item.title}
            description={item.description}
            upvotes={item.upvotes}
            time={item.time}
            category={item.category}
            promoterName={item.promoter}
            source={item.source}
            onPress={() => handleUpvote(item)}
          />
        );
      }
    
      function keyExtractor(item) {
        return item.title;
      }


    return (

        <SafeAreaView>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View>
                <Ionicons style={styles.backB} name="arrow-back-outline" onPress={() => navigation.navigate("Choose Location")}/>
                </View>

                <Text style = {styles.heading1}>Best Moves </Text>
                <Text style = {styles.heading2}>Check out the top 4 moves in {'\n'}your area.</Text>
                
                
                 <View>
                   {/* <View> 
                        <TouchableOpacity style={styles.cardM} onPress={() => handleUpvote(card.id)}>
                             <Image style={styles.cardImgM} source={require('/Users/deandretaylor/ChreaApp/Images/Img1.jpg')}></Image> 
                        <View style={{flexDirection:'row', height: 50}}>   
                            <Text style = {styles.eventNameM}>Bridger's Westport</Text>
                            <View>
                                <Text style={styles.attendanceM}>{card.upvotes}</Text>
                                <Text style={styles.attendanceMP}>People attending</Text>
                                    <View style={{flexDirection: 'row', marginLeft: 25}}>
                                         <Image style={styles.profilesM} source={require('/Images/Headshot1.jpg')}></Image>
                                        <Image style={styles.profilesM} source={require('/Images/Headshot2.jpg')}></Image>
                                        <Image style={styles.profilesM} source={require('/Images/Headshot3.jpg')}></Image>
                                        <Image style={styles.profilesM} source={require('/Images/Headshot4.jpg')}></Image>
                                        <Image style={styles.profilesM} source={require('/Images/Headshot5.jpg')}></Image>
                                        <Image style={styles.profilesM} source={require('/Images/Headshot6.jpg')}></Image>
                                        <Text style={styles.plusM}>+</Text>
                                    </View>
                            </View>
                        </View>
                            <Text style={styles.catagoryM}>Club/Bar</Text>
                            <Text style={styles.timeM}>8PM-1:30AM </Text>
                                <View style={{flexDirection: 'row'}}>
                                     <Image style={styles.promoterImgM} source={require('./Images/Headshot1.jpg')}></Image> 
                                    <Text style={styles.promoterNameM}>Promoted by Emmanuel K.</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                   

                    <View>
                    
                        <TouchableOpacity style={styles.card} onPress={() => handleUpvote(card.id)}>
                             <Image style={styles.cardImg}
                                source={require('/Users/deandretaylor/ChreaApp/Images/Img2.jpg')}></Image> 
                        <View style={{flexDirection:'row', height: 50}}>
                            <Text style = {styles.eventName}>Westport Ale House</Text>
                            <View>
                                <Text style={styles.attendance}></Text>
                                <Text style={styles.attendanceP}>People attending</Text>
                                    <View style={{flexDirection: 'row', marginLeft: 30}}>
                                         <Image style={styles.profiles} source={require('./Images/Headshot1.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot2.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot3.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot4.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot5.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot6.jpg')}></Image>
                                        <Text style={styles.plus}>+</Text>
                                    </View>
                            </View>
                        </View>
                            <Text style={styles.catagory}>Bar</Text>
                            <Text style={styles.time}>4PM-11PM</Text>
                                <View style={{flexDirection: 'row'}}>
                                     <Image style={styles.promoterImg} source={require('/Images/Headshot5.jpg')}></Image>
                                    <Text style={styles.promoterName}>Promoted by Jammi G. </Text>
                                </View>
                        </TouchableOpacity>
                       
                    </View>

                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => handleUpvote(card.id)}>
                             <Image style={styles.cardImg}
                            source={require('/Users/deandretaylor/ChreaApp/Images/Img3.jpg')}></Image> 
                        <View style={{flexDirection:'row', height: 50}}>
                            <Text style = {styles.eventName}>The Levee Westport</Text>
                            <View>
                                <Text style={styles.attendance}></Text>
                                <Text style={styles.attendanceP}>People attending</Text>
                                    <View style={{flexDirection: 'row', marginLeft: 30}}>
                                         <Image style={styles.profiles} source={require('./Images/Headshot1.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot2.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot3.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot4.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot5.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('./Images/Headshot6.jpg')}></Image>
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
                        <TouchableOpacity style={styles.card} onPress={() => handleUpvote(card.id)}>
                             <Image style={styles.cardImg}
                                source={require('/Users/deandretaylor/ChreaApp/Images/Img4.jpg')}></Image> 
                            <View style={{flexDirection:'row', height: 50}}>
                                <Text style = {styles.eventName}>Power & Light District</Text>
                                <View>
                                <Text style={styles.attendance}></Text>
                                <Text style={styles.attendanceP}>People attending</Text>
                                    <View style={{flexDirection: 'row', marginLeft: 30}}>
                                         <Image style={styles.profiles} source={require('/Images/Headshot1.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('/Images/Headshot2.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('/Images/Headshot3.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('/Images/Headshot4.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('/Images/Headshot5.jpg')}></Image>
                                        <Image style={styles.profiles} source={require('/Images/Headshot6.jpg')}></Image>
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
                    </View>  */}
                </View> 

                <View style={styles.container1}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
 }

 function Card(props) {
    const { title, description, upvotes, onPress, image, category, promoterName, source, time } = props;

    return (
      <View>
      <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.cardImg} source={source}></Image>
            <View style={{flexDirection:'row', height: 50}}>
                <Text style = {styles.eventName}>{title}</Text>
                <View>
                    <Text style={styles.attendance}>{upvotes}</Text>
                    <Text style={styles.attendanceP}>People attending</Text>
                        <View style={{flexDirection: 'row', marginLeft: 30}}>
                            {/* <Image style={styles.profiles} source={require('../Images/Headshot1.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot2.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot3.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot4.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot5.jpg')}></Image>
                            <Image style={styles.profiles} source={require('../Images/Headshot6.jpg')}></Image> */}
                            <Text style={styles.plus}>+</Text>
                        </View>
                </View>
            </View>
                <Text style={styles.catagory}>{category}</Text>
                <Text style={styles.time}>{time}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {/* <Image style={styles.promoterImg} source={require('../Images/Headshot5.jpg')}></Image> */}
                        <Text style={styles.promoterName}>Promoted by {promoterName}</Text>
                    </View>
            </TouchableOpacity>
          </View>
    );
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

    
function renderSwitch(param: any) {
    throw new Error('Function not implemented.');
}

