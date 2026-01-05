
import { Link } from 'react-router-dom'
import Head from '../assets/Head.png'

export default function Nav(){
    return(
        <nav className="nav-bar">
            <Link to="/"><img className="nav-logo" src="https://i.ibb.co/BHMc6PCp/Marmo-Head.png" alt="Marmo Logo" /></Link>
            <div className='nav-links'>
                <Link to="/" className="nav-link">Home</Link>
                <a href="https://www.meta.com/en-gb/experiences/marmo/24881288181514277/" className="nav-link" target="_blank" rel="noopener noreferrer">Download</a>
                <a href="https://discord.gg/marmo" className="nav-link" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
        </nav>
    )
}