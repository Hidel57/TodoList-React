import '../styles/header.css'
import ToggleDarkMode from './ToggleDarkMode';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header__logo">
          <h1 className="text-logo">
            Todo List
          </h1>
        </div>
        <ToggleDarkMode />
      </div>
    </header>
  )
}

export default Header
