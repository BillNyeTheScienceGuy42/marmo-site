import Arrow from "../assets/ArrowDown.png"
import Logo from "../assets/MarmoLogo.png"

export default function Header(){
    return(
        <div className="header-container">
            <img className="header-logo" src={Logo} alt="Marmo Logo" />
            <a href="https://www.meta.com/en-gb/experiences/marmo/24881288181514277/" className="header-download">Play Free</a>
            <a href="#about" className="learn-more-container">
                <h2 className="learn-more">Learn More</h2>
                <div className="arrow-down">
                    <img className="down-arrow" src={Arrow} alt="Scroll Down" />
                </div>
            </a>
        </div>
    )
}