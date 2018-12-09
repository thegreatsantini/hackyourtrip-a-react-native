import React, { Component } from 'react';

const AppStateContext = React.createContext()

export const AppStateConsumer = AppStateContext.Consumer

export class Provider extends Component {


    state = {
        token: 'sjdhfsald334--34y34y39h,sdfsdfsahdf',
    };
    render () {                         
        return (
            <AppStateContext.Provider value={this.state.token} >
                {this.props.children}
            </AppStateContext.Provider>
        )
    }
}

export default AppStateContext