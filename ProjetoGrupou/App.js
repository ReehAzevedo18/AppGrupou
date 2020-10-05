import React from 'react';
import {Stylesheet, Text, View, TextInput, Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cadastro from './src/Cadastro';
import Home from './src/Home';

const Stack = createStackNavigator();

export default function App(){
  return (
    <View style={style.container}>
      {/* Menu */}
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Cadastro" component={Cadastro} />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = Stylesheet.create({
  container: {
      flex: 1,
      backgroundColor: '#C4C4C4',
      alignItems: 'center',
      justifyContent: 'center'
  },
});

