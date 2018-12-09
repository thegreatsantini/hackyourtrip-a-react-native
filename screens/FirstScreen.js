import React, {Component} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

class FirstScreen extends Component
{
    componentWillMount() {

    }

    render()
    {
        return (
          <View style={styles.container}>
            <Text>First Screen</Text>
              <Button title={"Create Account"} onPress={ () => this.props.navigation.navigate("CreateAccountScreen")}/>
              <Button title={"Login"} onPress={() => this.props.navigation.navigate("LoginScreen")}/>
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


export default FirstScreen;