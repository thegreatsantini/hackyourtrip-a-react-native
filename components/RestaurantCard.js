import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component {
    render() {
        return (
            this.props.restaurants.map((val, i) => {
                return (
                    <Container key={i}>
                        <Header />
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>{val.name}</Text>
                                            <Text note>{val.mcc}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={{ uri: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Text>{val.address}</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Button href={val.website} bordered>
                                            <Text>Visit Site</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                )
            })
        );
    }
}