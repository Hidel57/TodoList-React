import React, { useState } from "react";

import Fab from "./Fab";
import Header from "./Header";
import MainSection from "./MainSection";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";

function App() {
  const [todo, settodo] = useState({
    id: '',
    title: '',
    text: ''
  })

  const handleChange = e => {
    settodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <MainSection settodo={settodo} />
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        settodo={settodo}
      />
      <Fab/>
    </React.Fragment>
  );
}

export default App;
