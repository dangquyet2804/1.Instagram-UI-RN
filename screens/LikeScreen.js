import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView, FlatList, TextInput, Dimensions} from 'react-native'
import { FontAwesome, SimpleLineIcons, AntDesign, MaterialCommunityIcons,
 MaterialIcons, Feather} from '@expo/vector-icons';
import LikeItem from '../components/LikeItem.js';
import users from '../data/users.js';
export default class LikeScreen extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="heart" size={30} color={tintColor}/>
    )
    }
    render() {

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={{fontWeight: '600', fontSize: 20}}>Activity</Text>
                </View>
                <ScrollView>
                    <FlatList
                        
                        data={users}
                        keyExtractor={user => user.name}
                        renderItem={({item, index}) => <LikeItem item={item} index={index}/>}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderBottomColor: '#D7DDE3',
        borderBottomWidth: 1,
    }
})