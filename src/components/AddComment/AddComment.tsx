import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import firebase from './../../core/firebase'

import './AddComment.scss'

function AddComment(props: any) {

    const [comment, setComment] = useState('')
    const [entry, setEntry] = useState({} as any)
    const auth = useAuth()

    useEffect( () => {
        setEntry(props.entry)
    }, [])

    function addComment(keyName: string) {
        if(keyName === 'Enter') {
            const user = auth.user
            entry.comments.push({
                user: {
                    name: user.displayName,
                    uid: user.uid
                },
                value: comment,
                created: Math.floor(Date.now() / 1000)
            })

            firebase.addEntry(entry)
            setComment('')
        }
    }

    return (
        <div className="comment-form">
            <input type="text" id={`comment-input-${entry.id}`} placeholder="Escribe un comentario" value={comment} onChange={ (e: any) => setComment(e.target.value)} onKeyUp={ e => addComment(e.key)}/>
        </div>
    )
}

export default AddComment