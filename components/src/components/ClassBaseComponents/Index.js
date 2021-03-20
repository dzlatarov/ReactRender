import React, { Component } from 'react'
import { SeasonDisplay } from './SeasonDisplay'

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
        return (
            <div>
                {
                    this.state.latitute ? <SeasonDisplay lat={this.state.latitute} /> : `Error: ${this.state.errorMessage}`
                }              
            </div>
        )
    }
}

export default Index
