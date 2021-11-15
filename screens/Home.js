import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import Myheader from '../components/Myheader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Overlay, ListItem } from 'react-native-elements';
import { db } from '../firebase';
import { collection, doc, setDoc, updateDoc, getDocs } from "firebase/firestore";
import UserContext from '../context/user/UserContext';
const Home = (props) => {

    const cred = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [AddC, setAddC] = useState('');
    const [client, setClient] = useState()
    const [cstate, setCstate] = useState()
    const [payment, setpayment] = useState()
    const [remain, setremain] = useState()
    const usersCollectionRef = collection(db, cred.User.username);
    const [clientvis, setClientvis] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleclientOverlay = () => {
        setClientvis(!clientvis);
    };
    useEffect(() => {
        dis()
    }, [])
    const dis = async () => {
        const docSnap = await getDocs(collection(db, cred.User.username));
        setClient(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
                    <View style={{
                        width: '100%'
                    }}>
                        <Button
                            type='solid'
                            onPress={async () => {
                                await setDoc(doc(db, cred.User.username, AddC), {
                                    payment: 0,
                                    remain: 0
                                });
                                dis()
                                toggleOverlay()
                            }}
                            title='Add'
                        />
                    </View>
                </Overlay>
                {/* client Overlay */}
                <Overlay isVisible={clientvis} onBackdropPress={toggleclientOverlay} overlayStyle={{
                    width: '80%',
                    alignItems: 'center',
                    height: '70%'
                }}>
                    <TouchableOpacity
                        onPress={toggleclientOverlay}
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
                        Edit Client Info
                    </Text>
                    <Input
                        value={cstate}
                        onChangeText={setCstate}
                        inputStyle={{ textAlign: 'center', alignItems: 'center' }}
                        style={{ width: 80 }}
                        placeholder="Update Client Name"
                    />
                    <Input
                        value={payment}
                        keyboardType = 'numeric'
                        onChangeText={setpayment}
                        inputStyle={{ textAlign: 'center', alignItems: 'center' }}
                        style={{ width: 80 }}
                        placeholder="Update Client Payment"
                    />
                    <Input
                        value={remain}
                        onChangeText={setremain}
                        inputStyle={{ textAlign: 'center', alignItems: 'center' }}
                        style={{ width: 80 }}
                        placeholder="Update Client Remaining"
                    />
                    <View style={{
                        width: '100%'
                    }}>
                        <Button
                            containerstyle={{
                                width: 100,
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            type='solid'
                            onPress={async () => {
                                await updateDoc(doc(db, cred.User.username, cstate), {
                                    payment: 0,
                                    remain: 0
                                });
                            }}
                            title='Update'
                        />
                    </View>
                </Overlay>

            </View>
            <Button
                title="a"
                onPress={dis}
            />
            {
                client ?
                    client.map((doc) => {
                        console.log(doc.payment)
                        return (

                            <ListItem key={doc.id} bottomDivider>
                                <ListItem.Content>
                                    <View
                                        style={{
                                            width: '100%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 20
                                        }}>{doc.id}</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => {
                                                toggleclientOverlay()
                                                setCstate(doc.id)
                                                setpayment(doc.payment)
                                                console.log(payment)
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <ListItem.Subtitle>
                                                        Payment:
                                                    </ListItem.Subtitle>
                                                    <ListItem.Subtitle>
                                                        {doc.payment}
                                                    </ListItem.Subtitle>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <ListItem.Subtitle>
                                                        Remain:
                                                    </ListItem.Subtitle>
                                                    <ListItem.Subtitle>
                                                        {doc.remain}
                                                    </ListItem.Subtitle>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ListItem.Content>
                            </ListItem>

                        )
                    }) : <Text>No Clients</Text>
            }

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
