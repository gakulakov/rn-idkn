import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'


export const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Home Screen
            </Text>
            <Button 
            onPress={() => navigation.navigate('Second')}
            title={'Go to Second Screen'}
            />
        </View>
    )
}