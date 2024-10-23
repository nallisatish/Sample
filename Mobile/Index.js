import { useState } from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from '../Mobile/Style';
const grain = require('./assets/grain.jpg');

export default function Mobile() {
    const {number, setNumber} = useState("");
    return(
        <SafeAreaView style={StyleSheet.cons}>
            <View style={styles.inputView}>
                <Text>Mobile Number</Text>
                <TextInput style={styles.input} placeholder='Enter Number' value={number} onChangeText={setNumber} autoCorrect={false}
                autoCapitalize='none' />
            </View>
            <View style={styles.button}>
                <Button title='Send OTP'/>
            </View>
            <View style={styles.text}>
                <Text>New to DigiGrain?<Button title="Sign Up"/></Text>
                <Image source={grain}/>
            </View>
        </SafeAreaView>
    )
}