import React, { Component } from 'react'
import { CLIENT_ID } from '../ClientId'

class GoogleAuth extends Component {
    state = { isSignIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignIn: this.auth.isSignIn().get() })
            })
        })
    }

    renderAuthButton() {
        if (this.state.isSignIn === null) {
            return <div>I dont know if we are sign in! </div>
        } else if (this.state.isSignIn) {
            return <div>I am sign in!</div>
        } else {
            return <div>I am not sign in!</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth
