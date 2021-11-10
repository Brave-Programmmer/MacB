import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';

const Stack = createStackNavigator();
export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
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
