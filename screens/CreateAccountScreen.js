import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { API } from 'aws-amplify';

class CreateAccountScreen extends Component
{
    createUser = async () => {
        
        try {
            // await Auth.signIn(this.state.email, this.state.password);
            // await AsyncStorage.setItem('userToken', 'username');
            await API.post('discover-hack', `/users`)
            console.log("Registered");
          } catch (e) {
            alert(e.message);
          }

        this.props.navigation.navigate('App');
    };
    render()
    {
        return (
          <View style={styles.container}>
            <Text>Create Account Screen</Text>
            <TextInput
                    style={{height: 40}}
                    placeholder="Please enter your first name."
                    onChangeText={(firstName) => this.setState({firstName})}
                    autoCapitalize={false}
                    />
                    <TextInput 
                    style={{height: 40}}
                    placeholder="Please enter your lastName."
                    onChangeText={(lastName) => this.setState({lastName})}
                    />
                    <TextInput
                    style={{height: 40}}
                    placeholder="Please enter your role."
                    onChangeText={(role) => this.setState({role})}
                    autoCapitalize={false}
                    />
                    <TextInput 
                    style={{height: 40}}
                    placeholder="Please enter your email."
                    onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                    style={{height: 40}}
                    placeholder="Please enter your phone."
                    onChangeText={(phone) => this.setState({phone})}
                    autoCapitalize={false}
                    />
                    <TextInput 
                    style={{height: 40}}
                    placeholder="Please enter your industry."
                    onChangeText={(industry) => this.setState({industry})}
                    />
                    <TextInput 
                    style={{height: 40}}
                    placeholder="Please enter your city."
                    onChangeText={(city) => this.setState({city})}
                    />
                    <Button title={"Create Account"} onPress={() => this.createUser()}/> 
          </View>
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


export default CreateAccountScreen;