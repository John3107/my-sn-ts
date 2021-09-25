import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControlls/FormsControlls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from "./Dialogs.module.css";
import {FormDataType} from "./Dialogs";

const maxLengthCreator50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageBody"
                       validate={[required, maxLengthCreator50]} />
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)