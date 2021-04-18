import { useState } from "react";
import firebase from './../../core/firebase'
import {Link} from 'react-router-dom'
import './Login.scss'

function Login(props: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/')
		} catch(error) {
			alert(error.message)
		}
	}
    
    return (
        <div className="main">
            <form>
                <input 
                    type="email" 
                    autoComplete="off" 
                    autoFocus 
                    value={email} 
                    placeholder="Email"
                    onChange={ e => setEmail(e.target.value) }/>
                <input 
                    type="password" 
                    autoComplete="off" 
                    autoFocus value={password} 
                    placeholder="Password"
                    onChange={ e => setPassword(e.target.value) }/>
                <button 
                    type="submit"
                    onClick={login}
                >Iniciar sesión</button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login;