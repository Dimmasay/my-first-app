import style from './Posts.module.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";


const PostsForm = (props) => {

    let currentTextPost = {text: '',}
    let addPost = (currentTextPost) => {
        props.addPostAC(currentTextPost.text)
        currentTextPost.text = ''
    }

    const validationSchema = Yup.object().shape({
        text: Yup.string()
            .max(50, 'Too Long!')
            .required('Required'),
    })


    return (
        <div>
            <Formik initialValues={currentTextPost} onSubmit={addPost} validationSchema={validationSchema}>

                {({errors, touched}) => {
                    let hasError = errors.text && touched.text
                    return (<Form>
                            <div className={style.formWrapper}>
                                <div className={style.inputBlock}>
                                    <label htmlFor="textInput"></label>
                                    <Field className={hasError ? `${style.input} ${style.error}` : style.input}
                                           as='textarea'
                                           id="textInput"
                                           name="text"
                                           placeholder="Enter you post"/>
                                    {/*{hasError ? <div className={form.errorPost}>{errors.text}</div> : null}*/}
                                </div>
                                <div className={style.buttonBlock}>
                                    <button type="submit" className={style.button}>Send</button>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default PostsForm;
