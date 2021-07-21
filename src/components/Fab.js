import { connect } from 'react-redux'
import '../css/fab.css'
import { toggleModal } from '../redux/modal'

const Fab = ({ dispatch }) => {
    return (
        <button
            className="fab material-icons-outlined"
            onClick={()=> dispatch(toggleModal(true))}
        >add</button>
    )
}

export default connect()(Fab)