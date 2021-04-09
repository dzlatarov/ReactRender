import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        // eslint-disable-next-line
    }, []);

    const onClickHandler = () => {
        props.deleteStream(props.match.params.id)
    };

    const actions = (
        <React.Fragment>
            <button onClick={onClickHandler} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
    );

    const renderContent = () => {
        if (!props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream with title: ${props.stream.title}`
    };

    return (
        <Modal
            title='Stream Delete'
            content={renderContent()}
            actions={actions}
            onDismiss={() => history.push('/')}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)