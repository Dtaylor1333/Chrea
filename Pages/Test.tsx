import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, ScrollView } from "react-native";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";



type Locations = {
    id: number;
    'Venue Name': string;
    Address: string;
    Time: string;
    Date: string;
    Title: string;
    Flyer: string;
    Category: string;
    'Promoter Image': string;
    'Promoter Name': string;
    'Cover Charge': string;
    'Age Requirment': string;
    'Directions': string;
  };

export default function Test(){

    const [apiData, setApiData] = useState([])

    // useEffect(()=> {
    //     async function getDataFromApi(){
    //         const apiResponse = await fetch ('file:///Users/deandretaylor/ChreaApp2/locations.json');
    //         const finalData = await apiResponse.json()
            
    //         if(finalData){
    //             setApiData(finalData.users.map((userItem: any) => userItem.Time))
    //         }
    //     }
    //     getDataFromApi()
    // },[]);

    // console.log(apiData);

    // function onPress() {
    //     fetch("http://localhost:3000/locations")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Use the data from the server here
    //             setApiData(JSON.stringify(data));
    //         })
    // }

    useEffect(()=>{
    
    //     async function getDataFromApi(){
    //         const apiResponse = await fetch ('file:///Users/deandretaylor/ChreaApp2/locations.json');
    //         const finalData = await apiResponse.json()
                    
    //         if(finalData){
    //             setApiData(finalData.users.map((userItem: any) => userItem.Time))
    //         }
    // }
        getLocations();
    }, [])

    const getLocations = () =>{
        fetch("http://localhost:3000/locations",{
            method: "GET"
        }).then(res=>{
            return res.json()
        }).then(res=>{
            if(res){
                setApiData(res.apiData)
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        });
    }

    return(
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Hello Today is Saturday</Text>
                <Button title="Get" onPress={getLocations} />
                <ScrollView>
                </ScrollView>
          </View>
       
    );
};



const styles = StyleSheet.create({

    text:{
        fontSize: 100,
    }

});

function getLocations() {
    throw new Error("Function not implemented.");
}


{/* <View style={{ flex: 1, padding: 24}}> */}
// {isLoading ? (
//     <ActivityIndicator />
//     ): (
//         <FlatList 
//         data={data}
//         keyExtractor={({Address}) => Address}
//         renderItem={({item}) => (
//             <Text>
//                 {item.Address}, {item.Time}
//             </Text>
//         )}
//         />
//     )}


{/* <Button title="Get" onPress={getLocations} /> */}
{/* <Button title="Get" onPress={getLocations} />
<Button title="Get" onPress={getLocations} />
<Button title="Get" onPress={getLocations} />
<Button title="Get" onPress={getLocations} /> */}

{/* {isLoading ? <Text>Loading...</Text> :
(
    <FlatList
        data={locations}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <Text>{item.Address}  </Text>}
    />
)} */}
// </View>