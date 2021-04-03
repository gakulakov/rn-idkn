import React from 'react'
import {View, Text, Button} from 'react-native'


export const SecondScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Second Screen</Text>
            <Button
            onPress={() => {navigation.navigate('Home')}}
            title={'Go to Home Screen'}
             />
             <Button
             onPress={() => navigation.goBack()}
             title={'Back'}
              />
        </View>
    )
}