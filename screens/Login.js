import React, { useContext, useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Myheader from '../components/Myheader'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import UserContext from '../context/user/UserContext';
const Login = (props) => {

    const cred = useContext(UserContext);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    // console.log(cred.User);
    const onLogin = async () => {
        // console.log(Username);
        if (Username) {
            try {
                const log = await signInWithEmailAndPassword(auth, Username, Password);
                // console.log(log.user);
                cred.UpdateUsercred(log.user.email, log.user.uid, Password)
                // console.log(cred.User.username);
                props.navigation.navigate('Home',);
            } catch (error) {
                Alert.alert('Error!!', "Invaild Credentials", error)
            }
        } else {
            Alert.alert('Error!!', 'Please Enter Username and Password');
        }
    }

    return (
        // <UserState>
        //     <UserContext>
        <View>
            <Myheader title="Login" right={<Text></Text>} />
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
                        onPress={() => {
                            props.navigation.navigate('Signup');
                        }}
                        type="outline"
                        title="Sign Up"
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
        //     </UserContext>

        // </UserState>

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
