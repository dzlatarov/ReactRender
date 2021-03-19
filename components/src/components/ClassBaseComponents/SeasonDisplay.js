import React, { Component } from 'react'

class SeasonDisplay extends Component {
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
                    this.state.latitute ? `Latitute: ${this.state.latitute}` : `Error: ${this.state.errorMessage}`
                }
                {/* Latitute: {this.state.latitute}
                <br />
                Error: {this.state.errorMessage} */}
            </div>
        )
    }
}

export default SeasonDisplay
