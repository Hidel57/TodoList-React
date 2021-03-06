import { connect } from 'react-redux';
import '../styles/card.css'
import '../styles/iconbutton.css'

import { deleteTodo, completeTodo } from '../redux/todosReducer'
import { readTodo } from '../redux/todoReducer'
import { showModal } from '../redux/modalReducer'
import React from 'react';

const TodoItem = ({ todo, dispatch }) => {

  const handleEditTodo = id => {
    dispatch(showModal('form'))
    dispatch(readTodo(id))
  }

  const handleReadTodo = (id) => {
    dispatch(readTodo(id))
    dispatch(showModal('todo'))
  }

  return (
    <div className="card">
      <div className="card-container">
        <div className="card-info"
          onClick={() => handleReadTodo(todo.id)}
        >
          <header className="card__header">
            <div className="card__title">{todo.title}</div>
          </header>
          <div className="card__body">
            <div className="card__text">{todo.text}</div>
          </div>
        </div>
        <footer className="card__fotter">          
          <div className="icon-btn-group">
            <div className="icon-btn-group__item">
              <button
                className="icon-btn size-24 material-icons-outlined md-18 dark"
                onClick={() => dispatch(completeTodo(todo.id))}
                >
                {todo.completed ? 'replay' : 'done'}
              </button>
            </div>
            <div className="icon-btn-group__item">
              <button
                className="icon-btn size-24 material-icons-outlined md-18 dark"
                onClick={() => handleEditTodo(todo.id)}
              >
                edit
              </button>
            </div>
            <div className="icon-btn-group__item">
              <button
                className="icon-btn size-24 material-icons-outlined md-18 dark"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                delete
              </button>
            </div>
          </div>
        </footer>          
      </div>
    </div>
  )
}

export default connect()(TodoItem);