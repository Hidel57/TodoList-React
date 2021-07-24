import '../styles/textfield.css'
import '../styles/modal.css'

import { connect } from 'react-redux';
import { hideModal } from '../redux/modal'
import { addTodo, editTodo } from '../redux/todos'
import { clearTodo } from '../redux/todo'

import { useState } from 'react';

const TodoForm = (props) => {
  const { formValues, dispatch } = props
  const [error, seterror] = useState(null)
  const [todo, settodo] = useState(formValues)

  const handleChange = e => {
    settodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = e => {
    
    e.preventDefault()
    if (todo.title.trim() === '') {
      seterror('Complete the Title field')
      return
    }
    if (todo.text.trim() === '') {
      seterror('Complete the description text field')
      return
    }
    todo.id === '' ?
      handleAddTodo()
      : handleEditTodo(todo.id)
      
    seterror(null)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(todo))
    dispatch(clearTodo())
    dispatch(hideModal())
  }
  const handleEditTodo = (id) => {
    dispatch(editTodo(id, todo))
    dispatch(clearTodo())
    dispatch(hideModal())
  }

  const handleHideModal = () => {
    seterror(null)
    settodo({id: '', title: '', text: '' })
    dispatch(clearTodo())
    dispatch(hideModal())
  }

  return (
    <div id="formModal"
      style={props.modal.showModal ? { display: 'block' } : {}}
    >
      <h2 id="formTitle" className="title1">
          {formValues.id !== '' ? 'Edit Task' : 'Add Task'}
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
          {formValues.id ?
          <button id="editTaskBtn"
            // type="submit"
            // onClick={() => handleEditTodo(todo.id)}
            className="icon-btn material-icons-outlined blue">
              edit
            </button>
          :
          <button id="addTaskBtn"
            // type="submit"
            // onClick={() => handleAddTodo()}
            className="icon-btn material-icons-outlined green">
              done
            </button>
          }
          <button className="icon-btn material-icons-outlined red"
            onClick={() => handleHideModal()}
          >
            close
          </button>
        </form>
      </div>
  )
}

const mapStateToProps = state => ({
  modal: state,
  formValues: state.todo 
})

export default connect(mapStateToProps)(TodoForm);