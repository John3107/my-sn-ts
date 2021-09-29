import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControlls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './../common/FormsControlls/FormsControlls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}

const maxLengthCreator20 = maxLengthCreator(20)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLengthCreator20]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLengthCreator20]}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={s.formSummeryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean

}

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);