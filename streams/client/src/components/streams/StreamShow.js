import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    return (
        <div>
            StreamShow
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
