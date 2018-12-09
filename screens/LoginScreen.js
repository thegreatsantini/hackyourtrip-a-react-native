import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, Button, AsyncStorage} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Auth } from "aws-amplify";


class LoginScreen extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    signIn = async () => {
        // await AsyncStorage.setItem('userToken', 'fsa');

        try {
            await Auth.signIn(this.state.email, this.state.password);
            alert("Logged in");
          } catch (e) {
            alert(e.message);
          }

        this.props.navigation.navigate('App');
    };

    render()
    {
        return (
            <Container>
                <View style={{padding: 10}}>
                    <TextInput
                    style={{height: 40}}
                    placeholder="Please enter your email."
                    onChangeText={(email) => this.setState({email})}
                    autoCapitalize={false}
                    />
                    <TextInput 
                    style={{height: 40}}
                    placeholder="Please enter your password."
                    onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <Button title={"Login"} onPress={() => this.signIn()}/> 
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default LoginScreen;