import '../styles/App.css'

import { BrowserRouter, Route } from "react-router-dom"

import Fab from "./Fab"
import Header from "./Header"
import MainSection from "./MainSection"
import Modal from "./Modal"
import NavBar from "./NavBar"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Route
          exact
          path="/:filter?"
          component={MainSection}
          // component={(props) => <MainSection {...props} settodo={settodo} />}
        />
        <Fab />
        <Modal />
      </div>
    </BrowserRouter>
  )
}

export default App
