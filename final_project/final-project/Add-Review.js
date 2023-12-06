import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function AddReview({ navigation }) {
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");

    return (
       <View style={styles.container}>
          <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Write the title for your review here"
            onChangeText={(newText)=>{
              setTitle(newText);
            }}
         
          />
          <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Write your review here"
            onChangeText={(newText)=>{
              setReview(newText);
            }}
        
          />
          <Button title="Save" onPress={()=>navigation.navigate("Home", {key: "0011", word: word, definition: definition})}/>
         
       </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
    },
    itemName: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemDesc: {
      padding: 10,
      fontSize: 10,
      height: 44,
    },
    border: {
      borderWidth: 4,
      borderColor: "blue",
    },
});
  