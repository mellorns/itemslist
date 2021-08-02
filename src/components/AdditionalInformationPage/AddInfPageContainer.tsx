import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {actions} from "../../Redux/items-reducer";
import AddInfPage from "./AddInfPage";
import CommentsSection from "./Comments/CommentSection";
import {AppStateType} from "../../Redux/redux-store";
import {itemType} from "../../types/types";
import {AddProductFormValueType} from "../MainPage/AddProductForm/AddProductForm";





type mapStateToPropsType = {
    items:  Array<itemType> ,
    item: itemType | null

}
type ownPropsType = {
}
type mapDispatchType = {
   setItem: (itemId: number) => void,
    deleteComment: (id:number,productId: number) => void,
    addComment:  (data: any) => void,
    updateItem:  (data:any) => void

}
type PropsType = ownPropsType & mapStateToPropsType & mapDispatchType


class AddInfPageContainer extends React.Component<PropsType> {

    getItemId = () => {
        // @ts-ignore
        let itemId: number| null = +this.props.match.params.itemId - 1
        this.props.setItem(itemId)
    }
    componentDidMount() {
        this.getItemId()
    }


    render() {
        return (
            <>
                <div>
                    {this.props.item &&
                        <div>
                            < AddInfPage item={this.props.item} updateItem={this.props.updateItem}/>
                            <CommentsSection
                                comments={this.props.item?.comments}
                                deleteComment={this.props.deleteComment}
                                addComment={this.props.addComment}
                            />
                        </div>
                    }




                </div>

            </>
        )
    }
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    item: state.itemsPage.item,
    items: state.itemsPage.items,
})


export default compose(connect<mapStateToPropsType, mapDispatchType ,ownPropsType, AppStateType>(mapStateToProps, {
        setItem: actions.setItem,
        deleteComment: actions.deleteComment,
        addComment: actions.addComment,
        updateItem: actions.updateItem
    }),
    withRouter)(AddInfPageContainer)
