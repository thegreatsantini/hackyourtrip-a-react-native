import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import authenticateUser from "../utils";
import axios from 'axios';
import Loader from '../components/Loader'
import { ScrollView } from 'react-native-gesture-handler';
// Contexts

const ImgUrls = [
    'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
    'https://images.unsplash.com/photo-1456006231177-735d43fb45ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80',
    'https://images.unsplash.com/photo-1504855101244-34edfbd4b861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80'
]

class RestaurantScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            loading: true
        }
    }

    componentWillMount = async () => {
        const token = await authenticateUser()
        await this.fetchRestaurants(token)
    }

    fetchRestaurants = async (token) => {

        axios.get("https://apis.discover.com/cityguides/v2/merchants?card_network=DCI&merchant_city=Toronto", {
            headers: {
                'Content-Type': "application/json",
                "x-dfs-api-plan": "CITYGUIDES_SANDBOX",
                'Authorization': token,
                'merchant_category': 'restaurants'
            }
        }).then(res => {
            const restaurants = res.data.result.slice(0, 4);
            this.setState({
                restaurants,
                loading: false
            })
        }
        )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <Loader loading={this.state.loading} />
                <ScrollView>
                    {
                        this.state.restaurants.map((val, i) => {
                            return (
                                <RestaurantCard
                                    key={i}
                                    img={ImgUrls[i]}
                                    name={val.name}
                                    address={val.address1}
                                    website={val.website}
                                    mcc={val.mcc}
                                />
                            )
                        })
                    }
                    {/* <RestaurantCard restaurants={this.state.restaurants} /> */}
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2
    },
});

export default RestaurantScreen;
