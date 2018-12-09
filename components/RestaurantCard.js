import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>{this.props.name}</Text>
                                <Text note>{this.props.mcc}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: this.props.img }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Text>{this.props.address}</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button href={this.props.website} bordered>
                                <Text>Visit Site</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}