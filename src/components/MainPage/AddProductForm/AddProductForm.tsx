import { InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createField, Input} from "../../../Common/formControl/formControl";
import {required, numberRequired} from "../../../utils/validators/validators";


type AddProductFormOwnProps = {}

const AddProductForm: React.FC<InjectedFormProps<AddProductFormValueType, AddProductFormOwnProps> & AddProductFormOwnProps> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<AddProductFormValueTypeKeys>('Name', 'name', Input, [required])}
            </div>
            <div>
                {createField<AddProductFormValueTypeKeys>('Color', 'collar', Input, [required])}
            </div>
            <div>
                {createField<AddProductFormValueTypeKeys>('Width', 'width', Input, [required,numberRequired])}
            </div>
            <div>
                {createField<AddProductFormValueTypeKeys>('Height', 'height', Input, [required, numberRequired])}
            </div>
            <div>
                {createField<AddProductFormValueTypeKeys>('Count', 'count', Input, [required],numberRequired)}
            </div>
            <div>
                {createField<AddProductFormValueTypeKeys>('Weight', 'weight', Input, [required,numberRequired])}
            </div>
            <button>Add Product</button>
        </form>
    )
}

export type AddProductFormValueType = {
    name: string,
    collar: string,
    width: string,
    height:string,
    count: number,
    weight: string,
}




type AddProductFormValueTypeKeys = Extract<keyof AddProductFormValueType, string>

// @ts-ignore
export const AddProductReduxForm = reduxForm<AddProductFormValueTypeKeys, AddProductFormOwnProps>({form: 'add-product'})(AddProductForm)
