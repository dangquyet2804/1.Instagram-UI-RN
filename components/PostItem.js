import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Ionicons, SimpleLineIcons, AntDesign, EvilIcons, FontAwesome, Feather } from '@expo/vector-icons';
const PostItem = ({item}) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 10}}>
                    <Image 
                    source={{uri: item.avatar}}
                    style={styles.avatar}
                    />
                    <Text style={{fontWeight: 'bold', marginLeft: 10}}>{item.name}</Text>
                </View>
                <SimpleLineIcons name="options" size={15}/>
            </View>
            <Image 
                source={{uri: item.image}}
                style={styles.image}
            />
            <View style={styles.bottom}>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="hearto" size={25} style={{marginRight: 20}}/>
                    <FontAwesome name="comment-o" size={25} style={{marginRight: 20}} />
                    <Feather name="send" size={25}/>
                </View>
                <View>
                    <FontAwesome name="save" size={25}/>
                </View>
            </View>
            <Text style={{fontWeight: 'bold', marginLeft: 20}} >{item.likes} likes</Text>
            <View style={styles.comment}>
                <Text style={{fontWeight: 'bold', marginRight: 10}}>{item.name}</Text>
                <Text>{item.title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: 270
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    comment: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
    }
})
export default PostItem