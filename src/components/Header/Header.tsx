import { useState } from "react"
import { useHistory } from "react-router-dom"

import './Header.scss'
import { useAuth } from "../../hooks/useAuth"

function Header(props: any) {
    const history = useHistory()
    const auth = useAuth()
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)

    async function logout() {
        await auth.logout()
        setActiveMobileMenu(false);
        history.push('/')
    }

    return(
        <header className="header">
            <div className="title">
                <h1>Domicilios test</h1>
            </div>
            {
                auth.user && auth.user.displayName ?
                    <div>
                        <div className="menu-icon" onClick={e => {setActiveMobileMenu(!activeMobileMenu) }}>
                            <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
                        </div>
                        <nav className={`navigation ${activeMobileMenu ?  'active': null}`}>
                            <ul className="nav">
                                <li>Hola!, {auth.user.displayName}</li>
                                <li className="pointer" onClick={e => logout()}>Cerrar sesión</li>
                            </ul>
                        </nav>
                    </div>
                : null
            }
            
        </header>
    )
}

export default Header