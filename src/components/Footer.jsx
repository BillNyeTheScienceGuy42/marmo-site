
import { Link } from 'react-router-dom'
import marmoLogo from '../assets/MarmoLogo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={marmoLogo} alt="Marmo Logo" className="footer-logo-img" />
        </div>

        <div className="footer-column">
          <Link to="/">HOME</Link>
          <Link to="/privacy">PRIVACY POLICY</Link>
          <a href="https://discord.gg/marmo" target="_blank" rel="noopener noreferrer">DISCORD</a>
          {/* <Link to="/press">PRESS KIT</Link> */}
        </div>

        <div className="footer-column">
          <a href="https://tiktok.com/@marmovr" target="_blank" rel="noopener noreferrer">TIKTOK</a>
          <a href="https://youtube.com/@marmovr" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
        </div>
      </div>

      <div className="footer-copyright">
        © 2026 Marmo VR | ScreenVR Studios Limited. All rights reserved.
      </div>
    </footer>
  )
}
