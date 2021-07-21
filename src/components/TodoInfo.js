import React from 'react';

const TodoInfo = ({ todo, show, setshow }) => {
  return (
    <div className="modal" style={show ? { display: 'block' } : {}}>
      <div className="modal--container">
        <div className="demo-container">
          <h2 className="title1">{todo.title}</h2>
          <p className="text-body">{todo.text}</p>
          <button
              className="icon-btn material-icons-outlined green"
              onClick={() => setshow(false)}
          >
              done
          </button>
        </div>
      </div>
    </div>
  )
}
export default TodoInfo