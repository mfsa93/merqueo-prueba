import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

class Firebase {
    private auth: any;
    private db: any

	constructor() {
		this.auth = app.auth()
		this.db = app.firestore().collection('merqueo')
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

    getEntriesRef(): any {
        return app.firestore().collection('entries');
    }
}

export default new Firebase()