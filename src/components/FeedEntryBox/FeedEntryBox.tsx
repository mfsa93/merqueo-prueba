import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import firebase from './../../core/firebase'
import './FeedEntryBox.scss'

function FeedEntryBox(props: any) {


    const [entry, setEntry] = useState('')

    function publish() {
        const user = firebase.getCurrentUser()
        const newEntry = {
            comment: entry,
            id: uuidv4(),
            user: {
                name: user.displayName,
                email: user.email,
                uid: user.uid
            },
            comments: [],
            created: Math.floor(Date.now() / 1000)
        }
        console.log(newEntry);
        firebase.addEntry(newEntry)
        setEntry('')
    }

    function handleKeyUp(key: string) {
        if(key === 'Enter') { 
            publish()
        }
    }

    return(
        <div className='feed-entry-box'>
            <div className="feed-entry-box-body">
                <input 
                    type="text"
                    onChange={ e => setEntry(e.target.value)}
                    value={entry}
                    placeholder="Escribe aqui tu estado"
                    onKeyUp={e => handleKeyUp(e.key)}
                />
            </div>
            <div className="feed-entry-box-footer">
                <button onClick={e=> publish()}>Publicar</button>
            </div>
        </div>
    )

}

export default FeedEntryBox