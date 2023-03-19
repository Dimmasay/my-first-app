import style from "./ProfileInfo.module.css";
import {Formik, Field, Form} from 'formik';
import React from "react";

const ProfileDataForm = (props) => {
    let state = {
        aboutMe: props.user.aboutMe,
        userId: props.id,
        lookingForAJob: props.user.lookingForAJob,
        lookingForAJobDescription: props.user.lookingForAJobDescription,
        fullName: props.user.fullName,
        contacts: {...props.user.contacts},
    }
    const submit = (state, onSubmitProps) => {
        props.updateProfileTC(state, onSubmitProps.setStatus).then(() => {
            props.saveMode()
        })
    }

    // const validationSchema = Yup.object().shape({
    //     fullName: Yup.string()
    //         .required('Required'),
    //     aboutMe: Yup.string()
    //         .required('Required')
    // })
    return (
        <div>

            <div className={style.list}>
                <Formik
                    initialValues={state}
                    onSubmit={submit}
                    // validationSchema={validationSchema}
                >
                    {({errors, touched, status, isValid}) => {
                        return (
                            <div>
                                <Form className={style.container}>
                                    <div className={style.outEditMode}>
                                        {props.isOwner && <button type='submit'>Save</button>}
                                    </div>
                                    <div className={style.errorForm}>{status}</div>
                                    <div className={style.block}>
                                        <label htmlFor="fullNameInput">Full Name</label>
                                        <Field className={style.input} id="fullNameInput" name="fullName"
                                               placeholder="Enter your fullName"/>
                                    </div>
                                    <div className={style.block}>
                                        <label htmlFor="aboutMeInput">About Me</label>
                                        <Field className={style.input} id="aboutMeInput" name="aboutMe"/>
                                    </div>
                                    <div className={style.block}>
                                        <label htmlFor="lookingForAJobInput">Looking For A Job</label>
                                        <Field type='checkbox' className={style.input} id="lookingForAJobInput"
                                               name="lookingForAJob"/>
                                    </div>
                                    <div className={style.block}>
                                        <label htmlFor="lookingForAJobDescriptionInput">Job Description</label>
                                        <Field className={style.input} id="lookingForAJobDescriptionInput"
                                               name="lookingForAJobDescription"
                                               placeholder="Enter your Description"/>
                                    </div>
                                    <div>
                                        {Object.keys(state.contacts).map(key => {
                                                return (
                                                    <div className={style.block} key={key}>
                                                        <label htmlFor={key}>{key} :</label>
                                                        <Field
                                                            className={style.input}
                                                            id={key}
                                                            name={'contacts.' + key}/>
                                                    </div>
                                                )
                                            }
                                        )
                                        }
                                    </div>
                                </Form>
                            </div>

                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default ProfileDataForm;
