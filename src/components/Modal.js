import '../styles/modal.css'
import React from 'react';
import TodoInfo from './TodoInfo';
import TodoForm from './TodoForm';

import { connect } from 'react-redux';
import { hideModal } from '../redux/modalReducer'

const Modal = (props) => {
  const { modal } = props
  return (
    <div className="overlay"
      style={modal.showModal ? { display: 'block' } : {}}
    >
      <div className="modal">
        <div className="modal-container">
          <div className="modal__close">
            {modal.typeModal !== 'form' ?
              <button
              className="icon-btn material-icons-outlined dark"
              onClick={() => props.dispatch(hideModal())}
              >
                close
              </button>
              : null
            }
          </div>
          {modal.typeModal === 'form' ?
            <TodoForm />
            :
            <TodoInfo />
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.modalReducer
})

export default connect(mapStateToProps)(Modal)
