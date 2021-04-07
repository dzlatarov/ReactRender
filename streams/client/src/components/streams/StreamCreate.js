import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StreamCreate = (props) => {
    const renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
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

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)
