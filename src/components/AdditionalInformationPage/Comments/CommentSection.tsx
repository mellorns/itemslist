import React from "react";
import Comment from "./Comment";
import s from './CommentsSection.module.css'
import {commentsType} from "../../../types/types";


type PropsType = {
    comments: Array<commentsType>,
    deleteComment: (id:number,productId: number) => void,
    addComment:  (data: any) => void,
}

const CommentsSection: React.FC<PropsType> = ({comments, deleteComment, addComment}) => {
    return(
            <div className={ s.commentsSection}>
                Comment Section:
                <div>
                    {comments?.map( comment => <Comment
                        key={comment.id}
                        id={comment.id}
                        productId={comment.productId}
                        deleteComment={deleteComment}
                        description={comment.description}
                        addComment={addComment}
                    /> )}
                </div>
            </div>
    )
}
export default CommentsSection