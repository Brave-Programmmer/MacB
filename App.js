import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import UserState from './context/user/UserState';
import Signup from './screens/Signup';
import Edit from './screens/Edit';

const Stack = createStackNavigator();
export default function App() {
  return (
    <UserState>
      <NavigationContainer>
        <StatusBar
          barStyle='light-content'
        />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer></UserState>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
