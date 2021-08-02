import { InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {AddProductFormValueType} from "../MainPage/AddProductForm/AddProductForm";
import {createField, Input} from "../../Common/formControl/formControl";
import {numberRequired, required} from "../../utils/validators/validators";


type AddInformationFormOwnProps = {}


const AddInfPaheDataForm: React.FC<InjectedFormProps<AddProductFormValueType, AddInformationFormOwnProps> & AddInformationFormOwnProps> = ({handleSubmit}) => {

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Name', 'name', Input, [required])}
                </div>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Color', 'collar', Input, [required])}
                </div>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Width', 'width', Input, [required,numberRequired])}
                </div>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Height', 'height', Input, [required, numberRequired])}
                </div>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Count', 'count', Input, [required],numberRequired)}
                </div>
                <div>
                    {createField<AddInformationFormValueTypeKeys>('Weight', 'weight', Input, [required,numberRequired])}
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}


export type AddInformationFormValueType = {
    name: string,
    collar: string,
    width: string,
    height:string,
    count: number,
    weight: string,
}


type AddInformationFormValueTypeKeys = Extract<keyof AddInformationFormValueType, string>


// @ts-ignore
export const AddProductReduxForm = reduxForm<AddInformationFormValueTypeKeys,AddInformationFormOwnProps>({form: 'edit-product'})(AddInfPaheDataForm)
