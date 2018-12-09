import React, {Component} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Container, Content, Card, Header, Title, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";
import { API, Auth } from "aws-amplify";


class ProfileScreen extends Component
{
    constructor(props) {
        super(props);
        this.state = { 
            profile: {}
        }
    }

    async componentDidMount() {
      const session = await this.getSession()
      console.log('Session: ', session)
      const profile = await this.fetchProfile();
      this.setState({ profile: profile})
     console.log('Profile: ', profile)
    }

    async getSession() {
      await Auth.currentSession()
        .then((data) => {
          console.log(data.idToken.payload.sub)
          console.log('Data: ', data)
          this.setState({username: data.idToken.payload.sub})
        })
        .catch(err => console.log(err));
        
    }

    async fetchProfile() {
      const id = "Seattle"
        return API.get("discover-hack", `/opportunities/${id}`)
    }

    // async fetchProfile() {
    //   const id = "6105b07b-fec7-4a28-a6a4-2c5244937eb0"

    //   return invokeApig({
    //     path: `/appointments`,
    //    })
    // }



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