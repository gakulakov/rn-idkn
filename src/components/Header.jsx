import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


export const Header = () => {
    return (
        <View style={styles.container}>
            <Text>
                Header
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    }
})