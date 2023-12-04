import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {

const dataSource = [
    { title: "Algorithms and Data Structures I ", courseCode: "CSC 1051" },
    { title: "The Enrichment Seminar", courseCode: "CSC 1990" },
    { title: "Algorithms and Data Structures II", courseCode: "CSC 1052" },
    { title: "Discrete Structures", courseCode: "CSC 1300" },
    { title: "Computing Systems I ", courseCode: "CSC 2400" },
    { title: "Platform Based Computing", courseCode: "CSC 2053" },
    { title: "Statistics for Computing", courseCode: "CSC 2300" },
    { title: "Computing Systems II", courseCode: "CSC 2405" },
    { title: "Analysis of Algorithms", courseCode: "CSC 1700" },
    { title: "Programming Languages", courseCode: "CSC 1800" },
    { title: "Theory of Computation", courseCode: "CSC 4480" },
    { title: "Database Systems ", courseCode: "CSC 2405" },
    { title: "Software Engineering", courseCode: "CSC 4700" },
    { title: "Senior Project", courseCode: "CSC 4790" },

  ];

  const [classes, setClasses] = useState(dataSource);
         
  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        extraData={classes}
        renderItem={({item}) => 
        <TouchableOpacity style = {styles.border} onPress={() => {navigation.navigate('Details', {title: item.title, 
          releaseYear: item.courseCode});}}>
              <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity> 
        } 
      />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8FF',
      paddingTop: 30,
    },
    item: {
      padding: 8,
      fontSize: 25,
      height: 45,
    },
    border: {
      borderWidth: 3,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: "black",
      marginBottom: 15,
      padding: 20,
    }
  });  
export default Home;