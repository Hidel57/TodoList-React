import logo from '.././logo.png';
import '../styles/header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container container">
                <div className="header__logo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
