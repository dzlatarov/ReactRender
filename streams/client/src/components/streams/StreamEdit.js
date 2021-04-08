import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        // eslint-disable-next-line
    }, [])

    const renderStream = () => {
        if (!props.stream) {
            return <div>Loading...</div>
        }

        return <div>{props.stream.title}</div>
    }

    return (
        <div>{renderStream()}</div>
    )

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)