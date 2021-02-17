import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { API } from 'aws-amplify';

class CreateAccountScreen extends Component
{
    createUser = async () => {
        
        try {
            // await Auth.signIn(this.state.email, this.state.password);
            // await AsyncStorage.setItem('userToken', 'username');
            await this.sendRequest({
                role: this.state.role,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                industry: this.state.industry,
                city: this.state.city
            })

          } catch (e) {
            alert(e.message);
          }

        // this.props.navigation.navigate('App');
    };


    async sendRequest(message) {
        const id = "6105b07b-fec7-4a28-a6a4-2c5244937eb0"
        const response = await API.post('discover-hack', `/users/${id}`,{
        body: message }
         )
        console.log('Request: ', response)
        console.log("Registered");
    }

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
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default CreateAccountScreen;