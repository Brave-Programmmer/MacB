import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import Myheader from '../components/Myheader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Overlay, ListItem, ButtonGroup } from 'react-native-elements';
import { db } from '../firebase';
import { collection, doc, setDoc, onSnapshot, getDocs } from "firebase/firestore";
import UserContext from '../context/user/UserContext';
const Home = (props) => {

    const cred = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [AddC, setAddC] = useState('');
    const [client, setClient] = useState()
const [clientvis, setClientvis] = useState()

    const [cstate, setCstate] = useState(false)
    // console.log(cred.User.username);
    const usersCollectionRef = collection(db, cred.User.username);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleclientOverlay = () => {
        setClientvis(!visible);
    };
    useEffect(() => {
        dis()
    }, [])
    const dis = async () => {
        const docSnap = await getDocs(collection(db, "b@b.com"));
        // console.log(docSnap.docs);
        setClient(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(client);
        // docSnap.forEach((doc) => {
        //     doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id,doc.data());
        //   });
        // onSnapshot(usersCollectionRef, (d) => {
        //     d.forEach(element => {
        //         return(<Button>{element.id}</Button>)
        //         console.log(element.id);
        //         setClient(element.id)
        //         console.log(client);
        //     })
        // })
    }
    const Find = async () => {
        if (cstate == false) {
            // const docSnap = await getDocs(usersCollectionRef);
            // docSnap.forEach((doc) => {
            //     doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id);
            //     let d = [];
            //     console.log(doc.id);
            //     d.push(doc.id)
            //     setClient(d)
            //     setCstate(true)
            // });
        } else {
            return client
        }

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
                                payment: [0],
                                remain: [0]
                            });
                        }}
                        title='Add'
                    />
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
                                            <TouchableOpacity onPress={toggleOverlay}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <ListItem.Subtitle>Payment:</ListItem.Subtitle>
                                                    <ListItem.Subtitle>{doc.payment}</ListItem.Subtitle>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <ListItem.Subtitle>Remain:</ListItem.Subtitle>
                                                    <ListItem.Subtitle>{doc.remain}</ListItem.Subtitle>
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
