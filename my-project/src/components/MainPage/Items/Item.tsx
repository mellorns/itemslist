
import s from './Item.module.css'
import {NavLink} from "react-router-dom";
import * as React from "react";
import {sizeType} from "../../../types/types";

type ItemPropsType = {
    imageUrl: string,
    count: number,
    name: string,
    size: sizeType,
    weight: number,
    id: number,
    deleteItem: (id: number) => void
}



const Item: React.FC<ItemPropsType> = ({imageUrl, count, name, size, weight, id, deleteItem}) => {

    const confirmDelete = (id : number) => {
        let result = window.confirm('Are you sure?')
        if (result) {
            deleteItem(id)
        } else {
            return null
        }
    }
    return (
        <div>
            <div>
                <table className={s.item}>
                    <tbody>
                    <tr>
                        <td className={s.imgBlock}>
                            <img src={imageUrl} alt=''/>
                        </td>
                        <td valign="top" className={s.itemDescription}>
                            <div>
                                name: {name}
                            </div>
                            <div>
                                Description:
                                {/*<div>*/}
                                {/*    weight:{weight}*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    height:{size.height}*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    width:{size.width}*/}
                                {/*</div>*/}
                            </div>
                            <div>
                                count: {count}
                            </div>
                            <div>
                                <NavLink className={s.addInfLink} to={'/additionalInformation/' + id}>Additional
                                    information</NavLink>
                            </div>
                        </td>
                        <td>
                            <button className={s.deleteButton} onClick={() => confirmDelete(id)}>X</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )

}


export default Item