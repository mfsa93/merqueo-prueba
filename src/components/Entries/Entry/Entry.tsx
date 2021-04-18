import { useEffect, useState } from "react"
import Comment from './Comment/Comment'
import AddComment from './../../AddComment/AddComment';
import './Entry.scss'

import userImage from './../../../assets/images/user.jpeg'
import { fromNow } from "../../../core/date";

function Entry(props: any) {

    const [entry, setEntry] = useState({} as any)

    useEffect( () => {
        setEntry(props.entry)
    }, [] )

    return (
        <div className="entry">
            {
                entry && entry.comment? 
                
                <div className="entry-body">
                    <div className="entry-head">
                        <div className="user-image">
                            <img src={userImage} alt={entry.user.name }/>
                        </div>
                        <div className="post">
                            <div className="user-data">
                                <div className="user-name">
                                    { entry.user.name }
                                </div>
                                <div className="created">
                                    { fromNow(entry.created) }
                                </div>
                            </div>
                            <div className="status">
                                {entry.comment}
                            </div>
                            <div className="actions">
                                <button>Reaccionar</button>
                                <button>Comentar</button>
                            </div>
                        </div>
                    </div>
                    <div className="entry-up-body">
                        <div></div>
                        <div className="comments-quantity">
                            {entry.comments.length} Comentarios
                        </div>
                    </div>
                    <div className="entry-body">
                        <div className="entry-comments">
                            { 
                                entry.comments.map( (comment: any) => {
                                    return(
                                        <Comment key={comment.id} comment={comment} />
                                    ) 
                                }) 
                            }
                        </div>
                        <div className="entry-add-comment">
                            <AddComment entry={entry} />
                        </div>
                    </div>

                </div>

                : null
            }
        </div>
    )
}

export default Entry