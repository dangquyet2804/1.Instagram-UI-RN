import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList} from 'react-native'
import { FontAwesome, SimpleLineIcons, AntDesign, MaterialCommunityIcons,
 MaterialIcons, Feather} from '@expo/vector-icons';
import logo from '../assets/instagram.png';
import StoryItem from '../components/StoryItem.js';
import PostItem from '../components/PostItem.js';

const stories = [
    {name: 'andy', image: "https://i.pravatar.cc/300"},
    {name: 'mrvu', image: "https://i.pravatar.cc/300"},
    {name: 'quyet', image: "https://i.pravatar.cc/300"},
    {name: 'greencolor', image: "https://i.pravatar.cc/300"},
    {name: 'beach', image: "https://i.pravatar.cc/300"},
    {name: 'sun', image: "https://i.pravatar.cc/300"},
    {name: 'myname', image: "https://i.pravatar.cc/300"},
    {name: 'kkaka', image: "https://i.pravatar.cc/300"},
    {name: 'tony', image: "https://i.pravatar.cc/300"},
]
const data = [
    {name: 'andy', avatar: "https://i.pravatar.cc/300", image: "https://source.unsplash.com/random/500*800", likes: 99999, title: 'Running application on iPhone 11 Pro Max.'},
    {name: 'quyetxd', avatar: "https://i.pravatar.cc/300", image: "https://source.unsplash.com/random/500*700", likes: 101001, title: 'Finished building JavaScript bundle in 117ms.'},
    {name: 'lampham', avatar: "https://i.pravatar.cc/300", image: "https://source.unsplash.com/random/500*600", likes: 20000, title: '18 more stack frames from framework internals.'},
]
export default class HomeScreen extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={30} color={tintColor}/>
    )
  };
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.header}>
                    <Feather size={30} name="camera"/>
                    <Image 
                        source = {logo}
                    />
                    <Feather size={30} name="send"/>
                </View>
                <ScrollView>
                    <FlatList
                        style={styles.story}
                        horizontal={true}
                        data={stories}
                        keyExtractor={(story) => story.name}
                        renderItem={({item}) => <StoryItem item={item}/>}
                    />
                    <FlatList
                        style={styles.post}
                        data={data}
                        keyExtractor={(data) => data.name}
                        renderItem={({item}) => <PostItem item={item}/>}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 60
    },
    story: {
        paddingLeft: 20, 
        paddingVertical: 10, 
        borderBottomColor: '#c9d1d3',
        borderBottomWidth: 0.5,
    }
})