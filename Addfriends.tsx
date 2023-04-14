import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { View, TextInput, Button, Text, StyleSheet, Linking, Share } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, getDatabase, ref } from 'firebase/database';
import { Auth, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

const AddFriendScreen = (navigation, route) => {
  const [friendEmail, setFriendEmail] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [emailError, setEmailError] = React.useState('');
//   const auth = getAuth();

//   if (friendEmail.length >= 5) {
//     console.log(`Adding Friend Email: ${friendEmail}`);
//     addFriendWithEmail(auth, friendEmail)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             const db = getDatabase();

//             get(ref(db, 'users/' + user.uid + "/location")).then((snapshot)=>{
//                 console.log(snapshot)
//                 if (snapshot.exists()) {
//                     setFriendsList([...friendsList, {email: friendEmail}]);
//                     setFriendEmail('');
//                     console.log(`Adding friend: (${friendEmail})`);
//                 }
//                 else {
//                     console.log(`didnt work`);
//                 }
//             }
//             )
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             if (error.code === 'auth/invalid-email') {
//                 setEmailError('Bad Email Format');
//             }
//             else {
//                 setEmailError('Invalid Username or Password.');
//             }
//             console.log(errorMessage);
//         }); 
//     }
//     else {
//         if(friendEmail.length < 5) {
//             setEmailError('Email should be at least 5 characters.');
//         }
//         else {
//             setEmailError('');
//         }
//     }




  const handleAddFriend = () => {
    if(friendEmail !== ''){
    setFriendsList([...friendsList, {email: friendEmail}]);
    setFriendEmail('');
    console.log(`Adding friend: (${friendEmail})`);
    }
  };

  const removeFriend = (index) => {
    const updatedFriendsList = [...friendsList];
    updatedFriendsList.splice(index, 1);
    setFriendsList(updatedFriendsList);
    console.log(`Removed: (${friendEmail})`);
  };    

const handleShareLink = () => {
    const shareUrl = `Hey${friendEmail}, check out this awesome app I found! You can download it at https://apps.apple.com/us/app/chrea-social-event-app/id6447280079`;
    Linking.openURL(`sms:&body=${shareUrl}`);
  };


  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>Add Friends</Text>
      <Text style={styles.heading1}>Email</Text>
      <View style={styles.form}>
        <TextInput
            placeholder="Enter friends email"
            value={friendEmail}
            onChangeText={setFriendEmail}
            keyboardType="email-address"
            style={styles.input}
        />
        
        <TouchableOpacity onPress={handleAddFriend} style={styles.button}>
            <Text style={styles.buttonText}>Add Friend</Text>
        </TouchableOpacity>

        <Text style={styles.heading2}>Share With Others</Text>
        <Ionicons style={{fontSize: 30,}} name="share-social-outline" onPress={handleShareLink}/>


        <View style={styles.friendList}>
        <Text style={styles.friendsHeading}>My Friends:</Text>
            <ScrollView>
            {friendsList.length > 0 && (
            <View>
            {friendsList.map((friend, index) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }} key={index}>
                <Text>{friend.email}</Text>
                <TouchableOpacity onPress={() => removeFriend(index)}>
                    <Text style={{ color: 'red' }}>Remove</Text>
                </TouchableOpacity>
                </View>
            ))}
            </View>
            )}
            </ScrollView>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendList:{
    borderColor: '#3c1c07',
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    width: '90%',
    marginTop: 20,
    height: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
    color: '#3c1c07',
  },
  form: {
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#3c1c07',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
  },
  heading1:{
    textAlign: 'left',
    marginRight: 275,
    color: '#3c1c07',
  },
  heading2:{
    textAlign: 'left',
    marginTop: 20,
    color: '#3c1c07',
  },
  button: {
    marginTop: 16,
    width: 125,
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#3c1c07'
  },
  friendsHeading:{
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: '#3c1c07',
  },
});

export default AddFriendScreen;
function addFriendWithEmail(auth: Auth, friendEmail: string) {
    throw new Error('Function not implemented.');
}

