import React from "react";
import s from './Comment.module.css'

type PropsType = {
    deleteComment: (id:number,productId: number) => void,
    addComment:  (data: any) => void,
    description: string,
    id: number,
    productId: number
}

const Comment: React.FC<PropsType> = ({description,deleteComment,id,productId, addComment}) => {
    return (
        <div className={s.comment}>
            {description}

            <button className={s.deleteButton} onClick={() =>deleteComment(id ,productId)}>X</button>
        </div>
    )
}

export default Comment