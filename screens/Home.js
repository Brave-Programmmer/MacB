import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Myheader from '../components/Myheader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Overlay } from 'react-native-elements';
import { db } from '../firebase';
import { collection } from "firebase/firestore";
import UserContext from '../context/user/UserContext';
const Home = (props) => {
    const cred = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [AddC, setAddC] = useState('');
    console.log(cred.User);
    const usersCollectionRef = collection(db, cred.User.username);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Myheader title="Home" right={<TouchableOpacity
                onPress={() => { }}
            >
                <Icon name="sign-out" size={30} color="#eee" />
            </TouchableOpacity>} />
            <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                <Button
                    onPress={toggleOverlay}
                    color="#000"
                    type="clear"
                    icon={<Icon name="plus-circle" size={40} color="#197dd7" style={{ marginRight: 15 }} />}
                    title="Add Client"
                    containerStyle={{
                        width: "100%",
                        backgroundColor: '#eee'
                    }}
                />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{
                    width: '80%',
                    alignItems: 'center',
                    height: '60%'
                }}>
                    <TouchableOpacity
                        onPress={toggleOverlay}
                        style={{
                            backgroundColor: '#eeee',
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20
                        }}>
                        <Text>x</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>
                        Add Client Name
                    </Text>
                    <Input
                        value={AddC}
                        onChangeText={setAddC}
                        inputStyle={{ textAlign: 'center', alignItems: 'center' }}
                        style={{ width: 80 }}
                        placeholder="Enter Client Name"
                    />
                    <Button
                        type='solid'
                        onPress={()=>{
                            Collection()
                        }}
                        title='Add'
                    />
                </Overlay>
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
