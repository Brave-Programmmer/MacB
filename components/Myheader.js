import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
const Myheader = (props) => {
    return (
        <View>
            <Header
                centerComponent={{ text: <Text style={{ color: '#fff' }}>{props.title}</Text> }}
                rightComponent={{
                   text: <Text>{ props.right }</Text>
                }}
            />
        </View >
    )
}

export default Myheader


