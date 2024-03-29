import style from './Login.module.css'
import React from "react";
import {Formik, Field, Form} from 'formik';
import * as Yup from "yup";


const LoginForm = (props) => {
    let state = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
    }

    const submit = (state, onSubmitProps) => {
        props.logInTC(state, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
        onSubmitProps.setSubmitting(true);
    }
    const logOut = () => {
        props.logOutTC()
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Required')
            .email('Invalid email'),
        password: Yup.string()
            .required('Required')
    })


    if (!props.isAuth) {
        return (
            <div className={style.wrapper}>
                <h2 className={style.title}>Login Form</h2>
                <Formik
                    initialValues={state}
                    onSubmit={submit}
                    validationSchema={validationSchema}
                >
                    {({errors, touched, status, isValid}) => {

                        let hasErrorEmail = errors.email && touched.email
                        let hasErrorPassword = errors.password && touched.password
                        return (
                            <Form className={style.container}>
                                <div className={`${style.email} ${style.block}`}>
                                    <label htmlFor="emailInput">Email</label>
                                    <Field
                                        className={hasErrorEmail ? `${style.input} ${style.error}` : style.input}
                                        id="emailInput"
                                        name="email"
                                        placeholder="Enter your email"/>
                                    {hasErrorEmail ? <div className={style.errorEmail}>{errors.email}</div> : null}
                                </div>
                                <div className={`${style.password} ${style.block}`}>
                                    <label htmlFor="passwordInput">Password</label>
                                    <Field
                                        className={hasErrorPassword ? `${style.input} ${style.error}` : style.input}
                                        type='password'
                                        id="passwordInput"
                                        name="password"
                                        placeholder="Enter your password"/>
                                    {hasErrorPassword ?
                                        <div className={style.errorPassword}>{errors.password}</div> : null}
                                </div>
                                <div className={`${style.remember} ${style.block}`}>
                                    <label htmlFor="rememberMe">Remember Me</label>
                                    <Field id="rememberMe" name="rememberMe" type="checkbox"
                                    />
                                </div>

                                <div className={style.errorForm}>{status}</div>
                                <div className={style.captchaBlock}>
                                    {props.captcha &&
                                        <div className={`${style.captcha} ${style.block}`}>
                                            <img src={props.captcha}/>
                                            <label htmlFor="captchaInput">Enter symbols</label>
                                            <Field id="captchaInput" name="captcha"
                                            />
                                        </div>}

                                </div>
                                <div className={style.button}>
                                    <button disabled={!isValid} type="submit">Submit</button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    } else {
        return (
            <div>
                <div className={style.title}>Login Success</div>
                <div className={style.image}>
                    <img src='https://ipio-books.com/wp-content/uploads/2018/03/success-icon.png'/>
                </div>
                <div className={style.buttonOut}>
                    <button onClick={logOut}>Go Out</button>
                </div>
            </div>
        )
    }
}


export default LoginForm