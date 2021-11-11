import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Myheader from '../components/Myheader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Overlay, ListItem } from 'react-native-elements';
import { db } from '../firebase';
import { collection, doc, setDoc, onSnapshot, getDocs } from "firebase/firestore";
import UserContext from '../context/user/UserContext';
const Home = (props) => {

    const cred = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [AddC, setAddC] = useState('');
    const [client, setClient] = useState([])
    // console.log(cred.User);
    const usersCollectionRef = collection(db, cred.User.username);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
     useEffect(() => {
         Find()
     })
    const Find = async () => {
        const docRef = doc(db, cred.User.username, 'mohit');
        const docSnap = await getDocs(usersCollectionRef);
        docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            setClient(client.push(doc.id))
        });
        // console.log(client);
    }

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
                    height: '70%'
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
                        onPress={async () => {
                            await setDoc(doc(db, cred.User.username, AddC), {
                                payment: [],
                                remain: []
                            });
                        }}
                        title='Add'
                    />
                </Overlay>

            </View>
            <Button
                title="a"
                onPress={Find}
            />
            {
                client.map((l) => (
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
