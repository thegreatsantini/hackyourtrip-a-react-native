import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Content, H1, H2, H3 } from 'native-base';

import ProfileImage from '../components/ProfileImage';

class MediumCards extends Component {
    render() {
        return (
            <Content padder>
                <View style={styles.container}>
                    <ImageBackground source={{uri:"https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg"}} style={styles.imageContainer}>
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
                        <H3>SmallCards</H3>
                    </View>
                    <View style={styles.subTextContainer}>
                        <Text>Small Text</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text>12/8/18 5:00 pm</Text>
                    </View>

                </View>
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















