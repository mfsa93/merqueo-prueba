import './Reactions.scss'
import firebase from './../../core/firebase'
import * as _ from 'lodash'
import { useAuth } from '../../hooks/useAuth';

function Reactions(props: any) {

    const auth = useAuth()

    function addReaction(reactionName: string) {
        const user = auth.user;
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
                        <span data-popup="Me gusta" className={`like reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('love')}>
                        <span data-popup="Me encanta" className={`love reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('haha')}>
                        <span data-popup="Me divierte" className={`wow reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('wow')}>
                        <span data-popup="Me asombra" className={`haha reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('sad')}>
                        <span data-popup="Me entristece" className={`sad reaction is-visible`}></span>
                    </div>
                    <div  className="icon-container" onClick={ () => addReaction('angry')}>
                        <span data-popup="Me enoja" className={`angry reaction is-visible`}></span>
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