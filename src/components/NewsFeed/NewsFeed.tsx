import Entries from '../Entries/Entries'
import FeedEntryBox from './../FeedEntryBox/FeedEntryBox'
import './NewsFeed.scss'

function NewsFeed() {
    return (
        <div className="container">
            <FeedEntryBox />
            <Entries />
        </div>
    )
}

export default NewsFeed