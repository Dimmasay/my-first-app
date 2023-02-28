import React from "react";
import form from "./MessageForm.module.css"
import {Field, Form, Formik} from "formik";


const MessageForm = (props) => {

    let currentMessage = {
        message: '',
    }

    console.log(currentMessage.message)
    let addMessage = (currentMessage) => {

        props.addMessageAC(currentMessage.message)
    }
    return (
        <div className={form.formContainer}>
            <Formik initialValues={currentMessage} onSubmit={addMessage}>
                <Form className={form.form}>
                    <div className={form.inputBlock}>
                        <label htmlFor='inputMessage'></label>
                        <Field id='inputMessage' name='message' type='textarea' className={form.input}/>
                    </div>
                    <div className={form.buttonBlock}>
                        <button type='submit'>Send</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}


export default MessageForm