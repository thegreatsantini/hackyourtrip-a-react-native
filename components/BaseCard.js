import React, {Component} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right } from 'native-base';




class BaseCard extends Component
{
    render() 
    {
        return (
            <Content padder>
            <Card style={styles.cardStyle}>
                {/*<CardItem>*/}
                    {/*<Left>*/}
                        {/*<Thumbnail source={{uri: 'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'}} />*/}
                        {/*<Body>*/}
                        {/*<Text>NativeBase</Text>*/}
                        {/*<Text note>GeekyAnts</Text>*/}
                        {/*</Body>*/}
                    {/*</Left>*/}
                {/*</CardItem>*/}
                <CardItem cardBody>
                    <Image source={{uri: 'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    {/*<Left>*/}
                        {/*<Button transparent>*/}
                            {/*<Icon active name="thumbs-up" />*/}
                            {/*<Text>12 Likes</Text>*/}
                        {/*</Button>*/}
                    {/*</Left>*/}
                    {/*<Body>*/}
                    {/*<Button transparent>*/}
                        {/*<Icon active name="chatbubbles" />*/}
                        {/*<Text>4 Comments</Text>*/}
                    {/*</Button>*/}
                    {/*</Body>*/}
                    {/*<Right>*/}
                        {/*<Text>11h ago</Text>*/}
                    {/*</Right>*/}
                    <Body>
                    <Text> sjdhfsjkdahfsadflkajshfjlksahdljk</Text>
                    <Button bordered dark onPress={() => console.log('appoint pressed')}>
                        <Text>Dark</Text>
                    </Button>
                    </Body>
                </CardItem>
            </Card>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyle: {
        paddingHorizontal: 25,
    }
})


export default BaseCard;