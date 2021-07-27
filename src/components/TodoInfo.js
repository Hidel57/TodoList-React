import React from 'react';
import { connect } from 'react-redux';

const TodoInfo = (props) => {
  const { todo } = props
  return (
    <div>
      <h2 className="title1">{todo.title}</h2>
      <p className="text-body">{todo.text}</p>
    </div>
  )
}
const mapStateToProps = state => ({
  todo: state.todoReducer
})

export default connect(mapStateToProps)(TodoInfo)