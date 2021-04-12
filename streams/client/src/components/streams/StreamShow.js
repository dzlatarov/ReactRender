import React, { useEffect, useRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    const videoRef = useRef();

    useEffect(() => {
        const { id } = props.match.params;
        props.fetchStream(id);

        const player = buildPlayer();
        
        return () => {
            player.destroy();
        }
        // eslint-disable-next-line
    }, [])

    const buildPlayer = () => {
        const { id } = props.match.params;
        const player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        player.attachMediaElement(videoRef.current);
        player.load();
        return player;
    }

    const renderStream = () => {
        if (!props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = props.stream;
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </React.Fragment>
        )
    }

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls />
            {renderStream()}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
