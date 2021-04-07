import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

const StreamList = ({ streamList, fetchStreams, dispatch }) => {
    useEffect(() => {
        fetchStreams()
    }, [])

    const renderStreamList = streamList.map(stream => {
        return (
            <div className="item" key={stream.id}>
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

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderStreamList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { streamList: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
