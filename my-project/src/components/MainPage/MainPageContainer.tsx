import * as React from 'react'
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {actions} from "../../Redux/items-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {itemType} from "../../types/types";
import {AddProductFormValueType} from "./AddProductForm/AddProductForm";



type mapStateToPropsType = {
    items:  Array<itemType>
}
type ownPropsType = {
}
type mapDispatchType = {
    deleteItem: (id:number) => void,
    addItem: (formData:AddProductFormValueType) => void
}
type PropsType = ownPropsType & mapStateToPropsType & mapDispatchType

class MainPageContainer extends React.Component<PropsType> {

    render() {
       return (
           <div>
            <MainPage items={this.props.items} deleteItem={this.props.deleteItem} addItem={this.props.addItem}/>
           </div>
       )
    }
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    items: state.itemsPage.items
})

export default connect<mapStateToPropsType, mapDispatchType ,ownPropsType, AppStateType>(mapStateToProps,{deleteItem: actions.deleteItem, addItem: actions.addItem})(MainPageContainer)