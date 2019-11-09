import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const KeyItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#D7DDE3',
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginRight: 10,
    }
});
export default KeyItem
