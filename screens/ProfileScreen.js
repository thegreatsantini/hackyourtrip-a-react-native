import React, {Component} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Container, Content, Card, Header, Title, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";

class ProfileScreen extends Component
{
    render()
    {
        return (
        <Container>
        <Content>
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name='angle-left' />
            </Button>
          </Left>
          <Body>
            <Title>Profile Info</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bars' />
            </Button>
          </Right>
        </Header>
          <Card style={{flex: 0}}>
            <CardItem>
            <View style={styles.header}>
            <Thumbnail round large source={{uri: 'https://avatars3.githubusercontent.com/u/15205259?s=400&u=64ad9374b8d98f09dc5709fcc737e5ec4f2447f3&v=4'}} style={{height: 200, width: 200, flex: 1}} />
            <Text style={{paddingTop: 10}}><Icon type="FontAwesome" name="map-pin" />Currently in - Seattle</Text>
            <Left><Text>{`\nMichael Litchev`}</Text></Left>
            <Text>{`\nThis is all passed in from props, from the Dynamo Users table. Jonathan is a hard-worker, skilled in React.js, React Native & Node.js.`}</Text>
            <CardItem>
                <Left>
            <Text>Technology</Text>
                </Left>
                <Right>
        <Text>Discover</Text>
                </Right>
            </CardItem>
            {/* <Button>Edit Profile</Button> */}
          </View>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>GitHub</Text>
                </Button>
              </Left>
              <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-linkedin" />
                  <Text>LinkedIn</Text>
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
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      red: {
        color: 'red',
      },
      header: {
          paddingTop: 20,
          alignItems: 'center',
          justifyContent: 'center'
      }
})


export default ProfileScreen;