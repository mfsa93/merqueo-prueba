import { useState } from "react"
import firebase from './../../core/firebase'

function Register(props: any) {
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    async function onRegister() {
		try {
			await firebase.register(name, email, password)
			props.history.replace('/feed')
		} catch(error) {
			alert(error.message)
		}
	}

    return (
        <div className="form">
            <input 
                id="name" 
                name="name" 
                autoComplete="off" 
                autoFocus value={name} 
                onChange={e => setName(e.target.value)}
                placeholder="Nombre"
            />
            <input 
                id="email" 
                name="email" 
                autoComplete="off" 
                value={email} 
                onChange={e => setEmail(e.target.value)}  
                placeholder="Email"
            />
            <input 
                name="password" 
                type="password" 
                id="password" 
                autoComplete="off" 
                value={password} onChange={e => setPassword(e.target.value)}  
                placeholder="Contraseña"    
            />

            <button
                type="submit"
                color="primary"
                onClick={onRegister}
            >
				Register
            </button>
        </div>
    )
}

export default Register