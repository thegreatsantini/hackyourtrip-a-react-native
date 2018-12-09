import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, DatePicker} from 'react-native';
import { API } from "aws-amplify";
import { DatePicker } from 'native-base';

class CreateAppointmentScreen extends Component
{
    constructor(props){
        super(props);
        this.state = {chosenDate: new Date()};
        this.setState = this.shouldComponentUpdate.bind(this);
    };
    setDate(newDate){
        this.setState({chosenDate: newDate});
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (!this.entrepreneur){
            alert("No such person.");
        }
    }

    render()
    {
        return (
            <Container>
                <Header />
                <Content>
                    <View style={{padding: 10}}>
                        <Text>Create Appointment Screen</Text>
                        <TextInput
                        style={{height: 40}}
                        placeholder="Who will you be meeting?"
                        onChangeText={(entrepreneur) => this.setState({entrepreneur})}
                        autoCapitalize={false}
                        />
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2019, 6, 30)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMod={"default"}
                            placeHolderText="What time is the appointment?"
                            onDateChange={this.setDate}
                            />
                        <TextInput 
                        style={{height: 40}}
                        placeholder="Where is the appointment?"
                        onChangeText={(location) => this.setState({location})}
                        />
                    </View>
                </Content>
            
            <Button title={"Create Appointment"} onPress={API.CreateAppointment.js}/> 
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput:{
        height: 40,
        borderWidth: 1
    }
})


export default CreateAppointmentScreen;