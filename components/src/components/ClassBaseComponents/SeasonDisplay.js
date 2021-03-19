import React, { Component } from 'react'

class SeasonDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitute: 0
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                latitute: position.coords.latitude
            }),
            (err) => console.log(err)
        )
    }

    render() {
        return (
            <div>
                Latitute: {this.state.latitute}
            </div>
        )
    }
}

export default SeasonDisplay
