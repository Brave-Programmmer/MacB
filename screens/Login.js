import React, { useContext, useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Myheader from '../components/Myheader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebase'
import UserState from '../context/user/UserState'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import UserContext from '../context/user/UserContext';
const Login = () => {
    const cred =  useContext(UserContext);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const onLogin = async () => {
        if (Username && Password) {
            try {
                const log = await signInWithEmailAndPassword(auth, Username, Password);
                onAuthStateChanged(auth,(user)=>{
                    // cred.UpdateUsercred()
                    console.log(user);
                })
            } catch (error) {
                Alert.alert('Error!!', "Invaild Credentials", error)
            }
        } else {
            Alert.alert('Error!!', 'Please Enter Username and Password');
        }
    }
    const onSignup = () => {

    }
    return (
        <UserState>
            <View>
                <Myheader title="Login" right={<TouchableOpacity
                    onPress={() => { }}
                >
                    <Icon name="sign-out" size={30} color="#eee" />
                </TouchableOpacity>} />
                <View style={styles.container}>
                    <KeyboardAvoidingView
                        style={{
                            marginTop: 20,
                            width: "80%"
                        }}
                    >
                        <Input
                            value={Username}
                            onChangeText={setUsername}
                            style={styles.input}
                            placeholder="Enter your Username"
                        />
                        <Input
                            value={Password}
                            onChangeText={setPassword}
                            style={styles.input}
                            placeholder="Enter your password"
                        />
                        <Button
                            onPress={onLogin}
                            containerStyle={{
                                marginBottom: 20
                            }}
                            title="Login"
                        />
                        <Button
                            onPress={onSignup}
                            type="outline"
                            title="Sign Up"
                        />
                    </KeyboardAvoidingView>
                </View>
            </View>
        </UserState>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "80%"
    }
})
