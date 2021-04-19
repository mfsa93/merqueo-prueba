import React, { useState } from "react"
import firebase from './../../core/firebase'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from "../../hooks/useAuth"

function Register(props: any) {
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const history = useHistory()
    const auth = useAuth()

    async function onRegister(e: any) {
        e.preventDefault();
		try {
			await auth.signup(name, email, password)
            history.push('/')
		} catch(error) {
			alert(error.message)
		}
	}

    return (
        <div className="main">
            <form className="form">
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
                    color="primary"
                    type="submit"
                    onClick={onRegister}
                >
                    Register
                </button>
                <Link to="/">Login</Link>
            </form>
        </div>
    )
}

export default Register