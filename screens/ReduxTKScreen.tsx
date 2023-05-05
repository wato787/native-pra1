import { View, Text} from 'react-native'
import React, { FC, useEffect } from 'react'
import tw from 'tailwind-rn'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Types';
import Button from 'react-native-elements/dist/buttons/Button'

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>


export const ReduxTKScreen:FC<Props> = ({navigation}) => {
    useEffect(() => {
        console.log('redux')
        return () => {
            console.log('redux cleanup')
        }
    }, [])
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>ReduxTKScreen</Text>
      <View style={tw('my-3')}>

      <Button title='Go to FlexBox' onPress={()=>navigation.navigate('FlexBox')}/>
      </View>
    </View>
  )
}

