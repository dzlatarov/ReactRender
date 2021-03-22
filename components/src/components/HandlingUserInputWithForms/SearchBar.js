import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        event.preventDefault()
        this.setState({
            inputValue: event.target.value
        })        
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.inputValue} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
