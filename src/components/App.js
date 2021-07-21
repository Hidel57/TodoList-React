import React, { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Fab from "./Fab"
import Header from "./Header"
import MainSection from "./MainSection"
import NavBar from "./NavBar"
import TodoForm from "./TodoForm"

const App = () => {
  const [todo, settodo] = useState({
    id: "",
    title: "",
    text: "",
  })

  const handleChange = (e) => {
    settodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Route
        exact
        path="/:filter?"
        component={(props) => <MainSection {...props} settodo={settodo} />}
      />
      {/* <MainSection settodo={settodo} /> */}
      <TodoForm todo={todo} handleChange={handleChange} settodo={settodo} />
      <Fab />
    </BrowserRouter>
  )
}

export default App
