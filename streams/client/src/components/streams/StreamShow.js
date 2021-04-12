import React, { useEffect, useRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    const videoRef = useRef()

    useEffect(() => {
        const { id } = props.match.params;
        props.fetchStream(id);

        const player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}`
        })
        player.attachMediaElement(videoRef.current);
        player.load();

        // eslint-disable-next-line
    }, [])

    const renderStream = () => {
        if (!props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = props.stream

        return (
            <div>
                <video ref={videoRef} style={{ width: '100%' }} controls />
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
