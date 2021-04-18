import './Reactions.scss'
import firebase from './../../core/firebase'
import * as _ from 'lodash'

function Reactions(props: any) {

    function addReaction(reactionName: string) {
        const user = firebase.getCurrentUser();
        const reaction = {
            name: reactionName,
            user: user.uid
        }
        if(!('reactions' in props.entry)) {
            props.entry.reactions = []
        }
        if(!props.entry.reactions.length) {
            props.entry.reactions.push(reaction)
            saveEntry(props.entry);
            return;
        }
    
        const previousIndex = _.findIndex(props.entry.reactions, {user: user.uid});
        if(previousIndex === -1) {
            props.entry.reactions.push(reaction);
            saveEntry(props.entry);
            return;
        }

        props.entry.reactions[previousIndex] = reaction;
        saveEntry(props.entry);
    }

    function saveEntry(entry: any){
        firebase.addEntry(entry);
    }

    return (
        <div className="reactions">
            <div  className="options">
                <span  className="reactions">
                    <div  className="icon-container" onClick={ () => addReaction('like')} >
                        <span data-popup="Like" className={`like reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('love')}>
                        <span data-popup="Love" className={`love reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('haha')}>
                        <span data-popup="Haha" className={`wow reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('wow')}>
                        <span data-popup="Wow" className={`haha reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('sad')}>
                        <span data-popup="Sad" className={`sad reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('angry')}>
                        <span data-popup="Angry" className={`angry reaction is-visible`}></span>
                    </div>
                </span>
                
                <button className="button" >
                    Reaccionar
                </button>
            </div>
        </div>
    )
}

export default Reactions