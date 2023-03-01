import React from "react";
import form from "./MessageForm.module.css"
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'

const MessageForm = (props) => {

    let currentMessage = {message: '',}
    let addMessage = (currentMessage) => {
        props.addMessageAC(currentMessage.message)
        currentMessage.message = ''
    }

    const validationSchema = Yup.object().shape({
        message: Yup.string()
            .max(50, 'Too Long!')
            .required('Required'),
    })

    return (
        <div className={form.formContainer}>
            <Formik
                initialValues={currentMessage}
                onSubmit={addMessage}
                validationSchema={validationSchema}>

                {({errors, touched}) => {

                    let hasError = errors.message && touched.message

                    return (
                        <Form className={form.form}>
                            <div className={form.inputBlock}>
                                <label htmlFor='inputMessage'></label>
                                <Field className={hasError ? `${form.input} ${form.error}` : form.input}
                                       as='textarea'
                                       id='inputMessage'
                                       name='message'
                                       />
                                {hasError ? <div className={form.errorMessage}>{errors.message}</div> : null}
                            </div>
                            <div className={form.buttonBlock}>
                                <button type='submit'>Send</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )

}


export default MessageForm