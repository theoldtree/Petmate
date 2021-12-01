import {
  StyleSheet,
  View,
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ColorCheck from './src/screens/ColorCheck/ColorCheck'
import Camera from './src/screens/Camera/Camera'
import Result from './src/screens/Result/Result'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "측정지표선택" component={Camera}/>
        <Stack.Screen name = "색상검출" component={ColorCheck}/>
        <Stack.Screen name = "분석하기" component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})