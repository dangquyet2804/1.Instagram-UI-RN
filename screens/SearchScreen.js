import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TextInput, Dimensions} from 'react-native'
import { FontAwesome, SimpleLineIcons, AntDesign, MaterialCommunityIcons,
 MaterialIcons, Feather} from '@expo/vector-icons';
import KeyItem from '../components/KeyItem.js';
const { height, width } = Dimensions.get('window');
const key = [
    {name: 'IGTV'}, 
    {name: 'Shop'}, 
    {name: 'Style'}, 
    {name: 'Music'}, 
    {name: 'Gaming'},
    {name: 'Food'},
    {name: 'Fashion'},
    {name: 'Hot'}
]
const images = [
    require('../assets/feed_images/1.jpg'),
    require('../assets/feed_images/2.jpg'),
    require('../assets/feed_images/3.jpg'),
    require('../assets/feed_images/4.jpg'),
    require('../assets/feed_images/5.jpg'),
    require('../assets/feed_images/6.jpg'),
    require('../assets/feed_images/7.jpg'),
    require('../assets/feed_images/8.jpg'),
    require('../assets/feed_images/9.jpg'),
    require('../assets/feed_images/1.jpg'),
    require('../assets/feed_images/2.jpg'),
    require('../assets/feed_images/3.jpg'),
    require('../assets/feed_images/4.jpg'),
    require('../assets/feed_images/1.jpg'),
    require('../assets/feed_images/2.jpg'),
    require('../assets/feed_images/3.jpg'),
    require('../assets/feed_images/4.jpg')
]
export default class SearchScreen extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="search" size={30} color={tintColor}/>
    )
    }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.containerHeader}>
                    <View style={styles.header}>
                        <View style={styles.input}>
                            <FontAwesome name="search" size={20} style={{marginHorizontal: 10}}/>
                            <TextInput
                                placeholder="Search"
                                
                            />
                        </View>
                        <AntDesign name="instagram" size={25}/>
                    </View>
                    <FlatList 
                        horizontal={true}
                        data={key}
                        keyExtractor={key =>key.name}
                        renderItem={({item}) => <KeyItem item={item}/>}
                    />
                </View>
                <ScrollView>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {images.map((image, index) => {
                            return <Image key={index} source={image} style={styles.image}/>
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
    },
    input: {
        flexDirection: 'row',
        backgroundColor: '#D7DDE3',
        flex: 7, 
        padding: 8,
        borderRadius: 7,
        marginRight: 10,
    },
    containerHeader: {
        paddingHorizontal: 20,
        borderBottomColor: '#D7DDE3',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    image: {
        width: (width/3),
        height: (width/3)
    }
})