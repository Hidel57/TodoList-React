import { connect } from 'react-redux'
import '../styles/fab.css'
import { showModal } from '../redux/modal'

const Fab = ({ dispatch }) => {
    return (
        <button
            className="fab material-icons-outlined"
            onClick={()=> dispatch(showModal('form'))}
        >add</button>
    )
}

export default connect()(Fab)