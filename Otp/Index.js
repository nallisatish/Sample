import React from "react";
import { SafeAreaView, PreviewLayout, Pressable } from "react-native-safe-area-context";
import Styles from './style.js';

const otp = () => {
    return(
        <SafeAreaView style={Styles.container}>
            <View>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
            </View>
            <Pressable style={styles.button} onPress={() => Alert.alert("OTP Verified Succeessfully")}>
                <Text style={styles.buttonText}>Submit OTP</Text>
            </Pressable> 
        </SafeAreaView>
    )
}