import React, { Component } from 'react';
import authenticateUser from './utils'

const AppStateContext = React.createContext()

export const AppStateConsumer = AppStateContext.Consumer

export class Provider extends Component {

    state = {
        token: '',
    };

    async componentWillMount()
    {
        try {
            const token = await authenticateUser()
            this.setState({token})
        }
        catch (e) {
            console.log( `From the Context: ${e}`)
        }
    }

    render () {
        return (
            <AppStateContext.Provider value={this.state.token} >
                {this.props.children}
            </AppStateContext.Provider>
        )
    }
}

export default AppStateContext