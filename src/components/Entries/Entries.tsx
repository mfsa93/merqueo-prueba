import { useEffect, useState } from "react";
import firebase from './../../core/firebase';
import Entry from './Entry/Entry'

import './Entries.scss'

function Entries() {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)

    function getEntries() {
        setLoading(true);
        firebase.getEntriesRef().orderBy('created', 'desc').onSnapshot((querySnapshot: any) => {
            
            const items: any = querySnapshot.docs.map( (doc: any) => {
                return doc.data()
            })
            setEntries(items);
            setLoading(false)
            
        })
    }

    useEffect(() => {
        getEntries();
    }, [])

    return (
        <div className="entries">
            { loading ?  'Cargando' : null }
            { entries.map( (entry: any) => {
                return(
                    <Entry key={entry.id} entry={entry} />
                ) 
            })}
        </div>
    )
}

export default Entries;