import { useEffect } from 'react'
import Entries from '../Entries/Entries'
import FeedEntryBox from './../FeedEntryBox/FeedEntryBox'
import firebase from './../../core/firebase'
import './NewsFeed.scss'
import { useHistory } from 'react-router-dom'

function NewsFeed() {

    const history = useHistory()

    useEffect(() => {
        const username = firebase.getCurrentUsername()
        if(!username) {
            history.push('/')
        }
    }, [])
    return (
        <div className="container">
            <FeedEntryBox />
            <Entries />
        </div>
    )
}

export default NewsFeed