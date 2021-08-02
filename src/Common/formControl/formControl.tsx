import React from "react";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators/validators";
import s from './formControl.module.css'
type FormControlParamsType = {
    meta: WrappedFieldMetaProps
}
export const FormControl: React.FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <input {...input} {...restProps}/></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         component: React.FC<WrappedFieldProps>,
                                                         validators: Array<FieldValidatorType>,
                                                         props = {},
                                                         text = '') {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        /> {text}
    </div>
}