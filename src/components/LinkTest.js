import { NavLink } from 'react-router-dom'
import { SHOW_ALL } from '../redux/visibilityFilter'

const LinkTest = ({ filter, children }) => {
  return (
    <NavLink
      to={filter === SHOW_ALL ? '/' : filter}
      activeClassName="link active"
    >
      {children}
    </NavLink>
  );
}

export default LinkTest;