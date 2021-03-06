import '../styles/navbar.css'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../redux/visibilityFilter'
import LinkContainer from '../containers/LinkContainer'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const NavBar = () => {
    return (
        <div className="navbar">
          <div className="navbar-container container">
          <nav className="navbar-list-container">
            <ul className="navbar-list">
              {Object.keys(FILTER_TITLES).map(filter => (
                <li key={filter} className="navbar-list__item">
                  <LinkContainer filter={filter}>
                    {FILTER_TITLES[filter]}
                  </LinkContainer>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        </div>
    )
}

export default NavBar
