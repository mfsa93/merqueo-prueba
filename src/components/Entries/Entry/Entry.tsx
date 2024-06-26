import React, { useEffect, useState } from "react"
import Comment from './Comment/Comment'
import AddComment from './../../AddComment/AddComment';
import Reactions from './../../Reactions/Reactions'
import ReactionsView from './../../ReactionsView/ReactionsView'
import './Entry.scss'

import userImage from './../../../assets/images/user.jpeg'
import { fromNow } from "../../../core/date";

function Entry(props: any) {

    const [entry, setEntry] = useState({} as any)

    useEffect( () => {
        setEntry(props.entry)
    }, [] )

    function addComment(e: any) {
        const input = document.getElementById(`comment-input-${entry.id}`);
        if(input) {
            input.focus()
        }
    }

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
                                <Reactions entry={entry}/>
                                
                                <div>
                                    <button onClick={e => addComment(e)}>Comentar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="entry-up-body">
                        <div className="reactions-container">
                            <ReactionsView entry={entry}></ReactionsView> <span className="reactions-count">{entry.reactions?.length}</span>
                        </div>
                        <div className="comments-count">
                            {entry.comments.length} Comentarios
                        </div>
                    </div>
                    <div className="entry-actions actions-mobile">
                        <Reactions entry={entry}/>
                        
                        <div className="comment">
                            <button onClick={e => addComment(e)}>Comentar</button>
                        </div>
                    </div>
                    <div className="entry-body-comments">
                        <div className="entry-comments">
                            { 
                                entry.comments.map( (comment: any) => {
                                    return(
                                        <Comment key={`${comment.user.id}${comment.created}`} comment={comment} />
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