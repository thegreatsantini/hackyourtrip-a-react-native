import React, {Component} from 'react';
import { View, StyleSheet, Text, Button, AsyncStorage} from 'react-native';

class LoginScreen extends Component
{
    signIn = async () => {
        await AsyncStorage.setItem('userToken', 'fsa');

        this.props.navigation.navigate('App');
    };

    render()
    {

        return (
          <View style={styles.container}>
            <Text>Login Screen</Text>
              <Button title={"Login"} onPress={() => this.signIn()}/>
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


export default LoginScreen;