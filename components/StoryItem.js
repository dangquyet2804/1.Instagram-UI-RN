import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const StoryItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: item.image}}
                style={styles.image}
            />
            <Text>{item.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'pink',
        borderWidth: 3
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    }
})
export default StoryItem
