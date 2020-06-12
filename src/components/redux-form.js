
// outsource dependencies
import React from 'react';
import { Form, reduxForm } from 'redux-form';

const ReduxForm = reduxForm({
    // initialValues: {},
    // destroyOnUnmount: false,
    // form: FORM_NAME,
    // enableReinitialize: true,
    // onSubmit: formData => console.log('%c RF.onSubmit ', 'color: #000000;'
    //     , '\n formData: ', formData
    // ),
    // validate: (values, meta) => console.log('%c RF.validate ', 'color: #000000;'
    //     , '\n values: ', values
    //     , '\n meta: ', meta
    // ),
})(({ children, onSubmit, handleSubmit, className }) =>
    <Form autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={className}>
        {children}
    </Form>);

export default ReduxForm;
