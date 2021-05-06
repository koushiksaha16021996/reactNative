import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter,setCounter]=useState(0)
  const img= {uri : "./image/background.jpg"}
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./image/background.jpg')} style={styles.image}>
      
      </ImageBackground>
      <View style={styles.text}>
      <Text style={{fontSize: 30}}>Counter : {counter}</Text>
      </View>
      <View style={styles.counter}>
      <Button

        color="#90ee90"
        width= "30"
        title="increment"
        onPress={() => setCounter(counter+1)}
      />
      <Button
        color="#cd5c5c"
        
        title="decrement"
        onPress={() => setCounter(counter-1)}
      />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
  counter:{
    
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:30
  },
  image:{
    flex:1
  },
  text:{
    alignItems: 'center',
  }
});
