import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Content, H1, H2, H3, Card, CardItem, Left, Right, Thumbnail, Body, Button } from 'native-base';

import ProfileImage from '../components/ProfileImage';

class MediumCards extends Component {
    render() {
        const {profileImage, projectTitle, fundedDate, projectImage, summary} = this.props
        return (
            <Content padder>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: `${profileImage}` }} />
                            <Body>
                            <Text>{projectTitle}</Text>
                            <Text note>Funded On: {fundedDate} </Text>
                            </Body>
                        </Left>
                    </CardItem>
                <View style={styles.container} >
                    <ImageBackground source={{uri:`${projectImage}`}} style={styles.imageContainer}>
                    {/*<View style={styles.profileImageContainer}>*/}
                        {/*<ProfileImage*/}
                            {/*source={*/}
                                {/*'https://www.arabiaweddings.com/sites/default/files/styles/400x400/public/companies/images/2017/01/pretty_lady_salon.jpg?itok=SO3sJT37'*/}
                            {/*}*/}
                            {/*size={100}*/}
                        {/*/>*/}
                    {/*</View>*/}
                    </ImageBackground>
                    <View style={styles.titleContainer}>
                        <Text>{summary}</Text>
                    </View>

                </View>

                </Card>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 300,
        height: 400,
        backgroundColor: '#EEEEF4',
        borderRadius: 15,
        paddingHorizontal: 25,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 300,
        height: 200,
    },
    profileImageContainer: {
        paddingVertical: 25,
    },
    titleContainer: {
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 3,
    },
    subTextContainer: {
        paddingBottom: 5,
    },
    dateContainer:{
        paddingVertical: 10,
    }
});

export default MediumCards;















