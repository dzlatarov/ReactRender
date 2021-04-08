import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

const StreamList = ({ streamList, fetchStreams, currentUserId, isLoggedIn }) => {
    useEffect(() => {
        fetchStreams()
        //eslint-disable-next-line
    }, [])

    const renderAdmin = stream => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link to="" className="ui button primary">Edit</Link>
                    <Link to="" className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    const renderStreamList = streamList.map(stream => {
        return (
            <div className="item" key={stream.id}>
                {renderAdmin(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        )
    })

    const renderCreateButton = () => {
        if (isLoggedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderStreamList}
            </div>
            {renderCreateButton()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        streamList: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isLoggedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
