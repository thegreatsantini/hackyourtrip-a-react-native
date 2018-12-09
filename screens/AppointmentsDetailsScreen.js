import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    Thumbnail,
    Title
} from "native-base";

class AppointmentsDetailsScreen extends Component {
    render() {
        const { projectImage } = this.props.navigation.state.params
        return (
            <Container>
                <Content>
                    {/*<Header>*/}
                    {/*<Left>*/}
                    {/*/!*<Button transparent>*!/*/}
                    {/*/!*<Icon type="FontAwesome" name='angle-left' />*!/*/}
                    {/*/!*</Button>*!/*/}
                    {/*</Left>*/}
                    {/*<Body>*/}
                    {/*<Title>Details</Title>*/}
                    {/*</Body>*/}
                    {/*<Right>*/}
                    {/*/!*<Button transparent>*!/*/}
                    {/*/!*<Icon type="FontAwesome" name='bars' />*!/*/}
                    {/*/!*</Button>*!/*/}
                    {/*</Right>*/}
                    {/*</Header>*/}
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <View style={styles.header}>
                                <Thumbnail round large source={{ uri: projectImage }} style={{ height: 200, width: 200, flex: 1, marginLeft: 60, marginTop: 30 }} />
                                <Text style={{ paddingTop: 10, marginLeft: 80 }}><Icon type="FontAwesome" name="map-pin" />Currently in - Seattle</Text>
                                {/*<Left><Text>{`\nMichael Litchev`}</Text></Left>*/}
                                <Title style={{ paddingTop: 20, paddingBottom: 10 }}>Buffer Pitch</Title>
                                <Text>{`Buffer is a social media scheduling platform that helps you schedule content to Facebook, Twitter, Linkedin and Pinterest`}</Text>
                                <CardItem>
                                    <Left>
                                        <Text>Closing Date: 1/1/19</Text>
                                    </Left>

                                    <Right>
                                        <Text>Amount Need: $100,000</Text>
                                    </Right>
                                </CardItem>
                                {/* <Button>Edit Profile</Button> */}
                            </View>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text style={{ paddingLeft: 5 }}>GitHub</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button
                                    style={{ padding: 5 }}
                                    bordered
                                >
                                    <Text>Fund Project</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-linkedin" />
                                    <Text style={{ paddingLeft: 5 }}>LinkedIn</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
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


export default AppointmentsDetailsScreen;