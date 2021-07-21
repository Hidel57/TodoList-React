import { connect } from 'react-redux';
import '../css/card.css'
import '../css/iconbutton.css'

import { deleteTodo, completeTodo } from '../redux/todos'
import { toggleModal } from '../redux/modal'
import React, { useState } from 'react';
import TodoInfo from './TodoInfo';

const TodoItem = ({ todo, settodo, dispatch }) => {
  const [show, setshow] = useState(false)

  const handleEditTodo = id => {
    settodo({
      id,
      title: todo.title,
      text: todo.text
    })
    dispatch(toggleModal(true))
  }

  return (
    <React.Fragment>
      <TodoInfo todo={todo} show={show} setshow={setshow} />
      <div className="card">
        <div className="card-container">
          <div className="card-info" id={todo.id}
            onClick={() => setshow(true)}
          >
            <div className="card__header">
              <div className="card__title">{todo.title}</div>
            </div>
            <div className="card__body">
              <div className="card__text">{todo.text}</div>
            </div>
          </div>
          <div className="card__fotter">          
            <div className="card__actions">
              <div className="card__actions-items">
                <button className="icon-btn size-24 material-icons-outlined md-18 green"
                  onClick={() => dispatch(completeTodo(todo.id))}
                  >
                  {todo.state ? 'replay' : 'done'}
                </button>
              </div>
              <div className="card__actions-items">
                <button className="icon-btn size-24 material-icons-outlined blue md-18"
                  onClick={() => handleEditTodo(todo.id)}
                >
                  edit
                </button>
              </div>
              <div className="card__actions-items">
                <button className="icon-btn size-24 material-icons-outlined red md-18"
                  onClick={()=>dispatch(deleteTodo(todo.id))}
                >
                  delete
                </button>
              </div>
            </div>
          </div>          
        </div>
      </div>

    </React.Fragment>
  )
}

export default connect()(TodoItem);