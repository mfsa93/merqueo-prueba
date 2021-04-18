import { useEffect, useState } from "react"
import './Comment.scss'

import userImage from './../../../../assets/images/user.jpeg'
import { fromNow } from "../../../../core/date";

function Comment(props: any) {
    const [comment, setComment] = useState({} as any);


    useEffect(() => {
        setComment(props.comment);
    }, [])

    return (
        <div className="comment">
             { 
                comment.user ? 
                <div className="comment-container">
                    <div className="user-image">
                        <img src={userImage} alt={comment.user.name}/>
                    </div>
                    <div className="comment-body">
                        <span className="username">{comment.user.name}</span> {comment.value}

                        <div className="created">
                            {fromNow(comment.created)}
                        </div>
                    </div>
                </div>
                : null
            }
            
        </div>
    )
}

export default Comment