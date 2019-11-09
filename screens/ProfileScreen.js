import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native'
import { FontAwesome, Ionicons, MaterialCommunityIcons, AntDesign
 } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
const images = [
    require('../assets/feed_images/1.jpg'),
    require('../assets/feed_images/2.jpg'),
    require('../assets/feed_images/3.jpg'),
    require('../assets/feed_images/4.jpg'),
    require('../assets/feed_images/5.jpg'),
    require('../assets/feed_images/6.jpg'),
    require('../assets/feed_images/7.jpg'),
    require('../assets/feed_images/8.jpg'),
    require('../assets/feed_images/9.jpg')
]
export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="users" size={30} style={{color: tintColor}}/>
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  onPress = (index) => {
    this.setState({
      index
    })
  }
    render() {
        return (
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
              <Ionicons name='md-person-add' size={25}/>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>quyet.xd</Text>
              <MaterialCommunityIcons
                name='reload' size={25}/>
            </View>
            <ScrollView>
              <View style={{flexDirection: 'row', margin: 10}}>
              <Image 
                source={{uri: "https://i.pravatar.cc/300"}}
                style={styles.avatar}
              />
              <View style={{flex: 4, alignSelf: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>20</Text>
                    <Text>Posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>206</Text>
                    <Text>followers</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>167</Text>
                    <Text>following</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                  <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'grey', padding: 5, borderRadius: 5, marginRight: 20}}>
                    <Text>Edit Profile</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'grey', padding: 5, borderRadius: 5}}>
                    <AntDesign name='setting' size={20}/>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Varun Dang</Text>
              <Text>Lark | Computer Jock | Playgame</Text>
              <Text>www.instagram.com</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10, borderTopColor: '#dadada', borderTopWidth: 1, marginVertical: 10}}>
              <TouchableOpacity onPress={() => this.onPress(1)}>
                <Ionicons name='ios-menu' size={25} style={[this.state.index == 1 ? {color: 'red'} : {}]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPress(2)}>
                <FontAwesome name='users' size={25} style={[this.state.index == 2 ? {color: 'red'} : {}]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPress(3)}>
                <AntDesign name='save' size={25} style={[this.state.index == 3 ? {color: 'red'} : {}]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPress(4)}>
                <AntDesign name='heart' size={25} style={[this.state.index == 4 ? {color: 'red'} : {}]}/>
              </TouchableOpacity>
            </View>
            {this.state.index == 1 ? 
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {images.map((image, index) => {
                  return <Image source={image} key={index} style={[styles.post]}/>
                })}
              </View>
            : null
            }
            </ScrollView>
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 15,
  },
  image: {
    width:'100%',
    height: 270
  },
  comment: {
      flexDirection: 'row',
      marginTop: 5
  },
  avatar: {
        marginRight: 10,
        width: 80, 
        height: 80, 
        borderRadius: 40,
        flex: 1,
        alignSelf: 'center',
  },
  post: {
    width: (width)/3,
    height: (width)/3,
  }
});