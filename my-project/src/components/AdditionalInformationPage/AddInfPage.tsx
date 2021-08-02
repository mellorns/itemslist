import s from './AddInformation.module.css'
import '../MainPage/AddProductForm/AddProductForm.css'
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {AddProductReduxForm} from "./AddInfPaheDataForm";
import {itemType} from "../../types/types";

type propsType = {
    item: itemType,
    updateItem: (formData: any) => void
}

const AddInfPage: React.FC<propsType> = ({item,updateItem}) => {
    const [editMode, setEditMode] = useState(false)
    const ModalOn = () => {
        setEditMode(true)
    }
    const onSubmit = (formData: any) => {
        updateItem(formData)
        console.log(formData)
        setEditMode(false)
    }
    const closeModal = () => {
        setEditMode(false)
    }
    return (
        <div>
            <button onClick={ModalOn}>Edit</button>
            {editMode && <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span onClick={closeModal} className="close">×</span>
                        <h2>Edit Product</h2>
                    </div>
                    <div className="modal-body">
                        <AddProductReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div className='modal-footer'>
                    </div>
                </div>
            </div>
            }

            <table className={s.item}>
                <tbody>
                <tr>
                    <td className={s.imgBlock}>
                        <img className={s.itemImg} src={item.imageUrl} alt=''/>
                    </td>
                    <td valign="top" className={s.itemDescription}>
                        <div className={s.title}>
                            {item.name}
                        </div>
                        <div>
                            Description:
                            <div>
                                Weight:{item.weight}
                            </div>
                            <div>
                                Height:{item.size.height}
                            </div>
                            <div>
                                Width:{item.size.width}
                            </div>
                        </div>
                        <div>
                            Count: {item.count}
                        </div>

                        <div>
                            Collar: {item.collar}
                        </div>
                        <div>
                            <NavLink className={s.returnButton} to={'/mainPage'}>Return</NavLink>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>
    )
}

export default AddInfPage