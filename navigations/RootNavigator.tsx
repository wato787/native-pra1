import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HelloScreen } from '../screens/HelloScreen'
import { FlexBoxScreen } from '../screens/FlexBoxScreen'
import { ReduxTKScreen } from '../screens/ReduxTKScreen'

const Stack = createStackNavigator()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='ReduxTK'>
            <Stack.Screen name="Hello" component={HelloScreen} />
            <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
            <Stack.Screen name="ReduxTK" component={ReduxTKScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  
  )
}
