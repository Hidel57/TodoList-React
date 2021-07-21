import '../css/textfield.css'
import '../css/modal.css'
import { connect } from 'react-redux';
import { toggleModal } from '../redux/modal'
import { addTodo, editTodo } from '../redux/todos'

import { useState } from 'react';

const TodoForm = ({ todo, settodo, handleChange, state, dispatch }) => {
  const [error, seterror] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    // if (todo.title.trim() === '') {
    //   seterror('Complete the Title field')
    //   return
    // }
    // if (todo.text.trim() === '') {
    //   seterror('Complete the description text field')
    //   return
    // }
    seterror(null)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(todo))
    settodo({ id: '', title: '', text: '' })
    dispatch(toggleModal(false))
  }
  const handleEditTodo = (i, tod) => {
    dispatch(editTodo(i, tod))
    settodo({ id: '', title: '', text: '' })
    dispatch(toggleModal(false))
  }


  const handleHideModal = () => {
    seterror(null)
    settodo({id: '', title: '', text: '' })
    dispatch(toggleModal(false))
  }

  return (
    <div id="formModal" className="modal"
      style={state ? { display: 'block' } : {}}
    >
      <div className="modal--container">
        <div className="demo-container">
          <h2 id="formTitle" className="title1">
            {todo.id ? 'Edit Task' : 'Add Task'}
          </h2>
          {error ? <p className="text-error">{error}</p> : null}
          <p id="textError" className="text-error"></p>
          <form className="form" onSubmit={handleSubmit}>
            <input id="todoId" type="hidden" />
            <div className='text-field form__items'>
              <input className='input text-field__input'
                type='text' id='title' name='title'
                onChange={handleChange}
                value={todo.title}
              />
              <label className='text-field__label' htmlFor='title'>title</label>
            </div>
            <div className='text-field form__items'>
              <textarea className='input text-field__input text-field__input--textarea'
                rows="5" id='text'
                name='text'
                onChange={handleChange}
                value={todo.text}
              ></textarea>
              <label className='text-field__label' htmlFor='text'>text</label>
            </div>
            {todo.id ?
              <button id="editTaskBtn" type="submit"
                onClick={() => handleEditTodo(todo.id, todo)}
                className="icon-btn material-icons-outlined blue">
                edit
              </button>
            :
              <button id="addTaskBtn" type="submit"
                onClick={() => handleAddTodo()}
                className="icon-btn material-icons-outlined green">
                done
              </button>
            }
            <span className="icon-btn material-icons-outlined red"
              onClick={() => handleHideModal()}
            >
              close
            </span>
          </form>
        </div>
      </div>
    </ div>
  )
}

const mapStateToProps = state => ({
  state: state.modal
})

export default connect(mapStateToProps)(TodoForm);