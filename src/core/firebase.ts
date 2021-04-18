import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import { config } from '../config/firebase'

class Firebase {
    private auth: any;
    private db: any

	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore().collection('merqueo')
	}

	login(email: string, password : string) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name: string, email: string, password: string) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addEntry(entry: any) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		const ref = this.getEntriesRef();
        ref
        .doc(entry.id)
        .set(entry)
        .catch((err: any) => {
            console.error(err);
        });
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

    getCurrentUser() {
        return this.auth.currentUser;
    }

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}

    getEntriesRef(): any {
        return app.firestore().collection('entries');
    }
}

export default new Firebase()