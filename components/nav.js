import navStyles from '../styles/Nav.module.css';
import Link from 'next/link'

const nav = () =>{
    return(
        <nav className = {navStyles}>
            <div>
            <header>
                <div>
                    <h1>
                        Menu
                    </h1>
                </div>
            </header>
            <footer>
                <div>
                    <h3>
                        Menu folder
                    </h3>
                </div>
            </footer>
        </div>
        </nav>
       
    )
}
export default nav;