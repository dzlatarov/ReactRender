import React, { Component } from 'react'
import { SeasonDisplay } from './SeasonDisplay'
import Spinner from './Spinner'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitute: 0,
            errorMessage: ''
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                latitute: position.coords.latitude
            }),
            (err) => this.setState({
                errorMessage: err.message
            })
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.latitute) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (this.state.latitute && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.latitute} />
        }

        return <Spinner message='Please accept location request' />
    }
}

export default Index