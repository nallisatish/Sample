import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, TextInput, View, Pressable, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
const lock = require("./assets/lock.jpg")

export default function App() {
  const {number,setNumber}=  useState("");
  const {password,setPassword}=  useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image source={lock}/>
      <Text>Login</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='Enter Mobile Num' maxLength={10} value={number} onChangeText={setNumber} autoCorrect={false}
          autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} maxLength={8} autoCorrect={false}
          autoCapitalize='none'/>
      </View>
      <View style={styles.rememberView}>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View>
          <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "black",
    borderWidth : 1,
    borderRadius: 7
  },
  button : {
    backgroundColor : "red",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
});
