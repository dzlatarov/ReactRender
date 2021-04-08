import React, { useEffect } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'


const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id);
        // eslint-disable-next-line
    }, [])

    const onSubmit = formValues => {
        console.log(formValues);
    }

    const renderStream = () => {
        if (!props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    initialValues={_.pick(props.stream, 'title', 'description')}
                    onSubmit={onSubmit}
                />
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

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)