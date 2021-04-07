import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StreamCreate = (props) => {
    const renderInput = ({ input, label, meta }) => {
        console.log(input);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <span>{input.value ? '' : meta.error}</span>
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log(formValues);
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}
            className="ui form"
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

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)
