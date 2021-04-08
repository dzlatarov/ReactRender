import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'


const StreamCreate = (props) => {
    const onTouchRender = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    const renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {onTouchRender(meta)}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        props.createStream(formValues)
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}
            className="ui form error"
        >
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="description" component={renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
    )
}

const validate = formValues => {
    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

const wrappedForm = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, { createStream })(wrappedForm)
