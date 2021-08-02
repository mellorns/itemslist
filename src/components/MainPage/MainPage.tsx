import Item from "./Items/Item";
import React, {useEffect, useState} from "react";
import s from './MainPage.module.css'
import './AddProductForm/AddProductForm.css'
import {AddProductFormValueType, AddProductReduxForm} from "./AddProductForm/AddProductForm";
import {itemType} from "../../types/types";


type MainPagePropsType = {
    items: Array<itemType>,
    deleteItem: (id: number) => void,
    addItem: (formData: AddProductFormValueType) => void
}

const MainPage: React.FC<MainPagePropsType> = ({items, deleteItem, addItem}) => {

    const [data, setData] = useState<Array<itemType>>([])
    const [sortType, setSortType] = useState<string>('')
    const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false)

    useEffect(() => {


        interface IObjectKeys {
            [key: string]: string
        }

        interface IDevice extends IObjectKeys {
            name: string,
            count: string
        }


        const sortArray = (type: string) => {

            const types: IDevice = {
                name: 'name',
                count: 'count'
            }
            let sortProperty = types[type]
            if (sortProperty === 'name') {
                const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
                setData(sorted)
            } else if (sortProperty === 'count') {
                const sorted = [...items].sort((a :any, b:any) => a[sortProperty] - b[sortProperty])
                setData(sorted)
            } else {
                return null
            }
        }
        sortArray(sortType)
    }, [sortType])
    useEffect(() => {
        setData(items)
    }, [items])
    const ModalOn = () => {
        setIsAddFormOpen(true)
    }
    const onSubmit = (formData: any) => {
        addItem(formData)
        setIsAddFormOpen(false)
    }
    const closeModal = () => {
        setIsAddFormOpen(false)
    }
    return (
        <div>
            <button className={s.addProductButton} onClick={ModalOn}>Add Product</button>
            <select className={s.selectMode} onChange={(e) => setSortType(e.currentTarget.value)}>
                <option value="sort">Sort By:</option>
                <option value="name">Name</option>
                <option value="count">Count</option>
            </select>
            {data.map(item => <Item key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    count={item.count}
                                    name={item.name}
                                    size={item.size}
                                    weight={item.weight}
                                    deleteItem={deleteItem}
            />)}

            {isAddFormOpen &&
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span onClick={closeModal} className="close">×</span>
                        <h2>Add Product</h2>
                    </div>
                    <div className="modal-body">
                        <AddProductReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div className='modal-footer'>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}


export default MainPage