import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        // eslint-disable-next-line
    }, [])

    const renderStream = () => {
        if (!props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = props.stream

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }

    return (
        <div>{renderStream()}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
