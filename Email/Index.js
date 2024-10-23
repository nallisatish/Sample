import { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native';
import {Navigationcontainer} from '@react-navigation/native';
import { Button, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from './Style';

export default function Email() {
    const stack = createNativeStackNavigator();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return(
        <Navigationcontainer>
            <stack.Navigator>
                <SafeAreaView style={StyleSheet.container}>
                    <View style={styles.inputView}>
                        <Text>Mail Id</Text>
                        <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                        autoCapitalize='none' />
                        <Text>Password</Text>
                        <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                        autoCapitalize='none'/>
                    </View>
                    <View style={styles.buttonview}>
                        <Button title='Forgot Your Password?'>Forgot Your Password?</Button>
                    </View>
                    <View style={styles.buttonmain}>
                        <Button title='Sign In'>Sign In</Button>
                    </View>
                    <View style={styles.text}>
                        <Text>New to DigiGrain?<Button title="Sign Up"/>Sign Up</Text>
                    </View>
                </SafeAreaView>
            </stack.Navigator>
        </Navigationcontainer>
        
    )
}