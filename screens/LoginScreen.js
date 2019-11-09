import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Image, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import logo from '../assets/logo.png';

export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{marginHorizontal: 20}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', margin: 100}}>
                        <Image 
                        source = {logo}
                        />
                    </View>
                    <TextInput 
                        placeholder="Phone number, username or email"
                        style={styles.textInput}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={[styles.textInput, {marginTop: 10}]}
                    />
                    <Text style={styles.password}>Forget password</Text>
                    <TouchableOpacity style={{backgroundColor: "#3e64ff", marginVertical: 10, borderRadius: 5, padding: 5}}
                    >
                        <Button 
                            title="Login"
                            color="black"
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                        <View style={{flex: 4, borderBottomColor: '#dadada', borderBottomWidth: 1}}></View>
                        <Text style={{flex: 2, textAlign: 'center', marginBottom: -8}}>OR</Text>
                        <View style={{flex: 4, borderBottomColor: '#dadada', borderBottomWidth: 1}}></View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
                        <FontAwesome name="facebook-square" size={20} color="#3e64ff"/>
                        <Text style={{color: "#3e64ff", fontSize: 15, fontWeight: '600', marginLeft: 10}}>Log In With Facebook</Text>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text>Don't have an account?</Text>
                    <Text style={{color: '#3e64ff',fontWeight: '500',fontSize: 15, marginLeft: 10}}>Sign Up.</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 60,
        fontWeight: '500',
        marginBottom: 50
    },
    textInput: {
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 15,
        padding: 7,
        backgroundColor: '#dadada',
        borderRadius: 5,
    },
    password: {
        textAlign: 'right',
        marginTop: 10,
        color: '#3e64ff',
        fontWeight: '500',
        fontSize: 15,
    },
    login: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    signup: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        width: '100%',
        textAlign: 'center',
        paddingTop: 30,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        justifyContent: 'center'
    }
})
