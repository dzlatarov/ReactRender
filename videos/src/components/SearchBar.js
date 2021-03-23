import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    inputChangeHandler = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onSubmitHandler = e => {
        e.preventDefault()

        console.log(this.state.inputValue);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitHandler}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.inputChangeHandler} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
