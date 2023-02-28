import style from './Login.module.css'
import React from "react";
import {Formik, Field, Form} from 'formik';


const LoginForm = (props) => {

    let state = {
        email: '',
        password: '',
        rememberMe: '',
    }

    const submit = (state) => {
        let jsonState = JSON.stringify(state)
        props.authLoginTC(state)

    }
    const goOut = () => {
        props.authOutLoginTC()
    }

    return (
        <div className={style.wrapper}>
            <Formik
                initialValues={state}

                onSubmit={submit}
            >
                <Form className={style.containerForm}>
                    <div className={`${style.emailBlock} ${style.input}`}>
                        <label htmlFor="emailInput">Email</label>
                        <Field id="emailInput" name="email" placeholder="Enter your email"/>
                    </div>
                    <div className={`${style.passwordBlock} ${style.input}`}>
                        <label htmlFor="passwordInput">Password</label>
                        <Field id="passwordInput" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className={`${style.rememberBlock} ${style.input}`}>
                        <label htmlFor="rememberMe">Remember Me</label>
                        <Field id="rememberMe" name="rememberMe" type="checkbox"
                        />
                    </div>
                    <div className={style.buttonBlock}>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
            <div className={style.buttonOut}>
                <button onClick={goOut}>Go Out</button>
            </div>

        </div>
    )


}


export default LoginForm