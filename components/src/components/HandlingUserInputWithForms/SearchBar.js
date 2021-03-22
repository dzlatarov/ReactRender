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
        this.setState({
            inputValue: event.target.value
        })
    }

    onSubmitHandler = e => {
        e.preventDefault()

        this.props.onSubmit(this.state.inputValue)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitHandler}>
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
