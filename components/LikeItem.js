import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

const LikeItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: item.image}}
                style={styles.image}
            />
            <View style={{marginHorizontal: 5}}>
                <Text>Your {item.name} is on Instagram as</Text>
                <Text style={{fontWeight: '600'}}>{item.name}</Text>
            </View>
            <View style={{backgroundColor: '#3e64ff', borderRadius: 5}}>
                <Button 
                    title="Follow"
                    color='white'
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#D7DDE3',
        borderBottomWidth: 1,
        padding: 10,
    }
});
export default LikeItem
