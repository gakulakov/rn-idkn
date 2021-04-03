import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'


export const ThirdScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Third Screen
            </Text>
            <Button 
            onPress={() => navigation.navigate('Second')}
            title={'Go to Second Screen'}
            />
        </View>
    )
}