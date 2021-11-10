import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Myheader from '../components/Myheader'

const Home = () => {
    return (
        <View>
            <Myheader title="Home" right={<TouchableOpacity
                onPress={() => { }}
            >
                <Icon name="sign-out" size={30} color="#eee" />
            </TouchableOpacity>} />
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
