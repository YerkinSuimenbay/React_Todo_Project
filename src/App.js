import React from "react"
import AddItem from "./components/AddItem"
import Feedback from "./components/Feedback"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Sidebar from "./components/Sidebar"
import TodoList from "./components/TodoList"
import { useGlobalContext } from "./context/context"

function App() {
  const {isOpen} = useGlobalContext()

  return (
    <div className="App">
      {/* {isOpen ? <Sidebar /> : <Navbar /> } */}
      <Navbar />
      <Sidebar />
      <AddItem />
      <Search />
      <TodoList />
      <Feedback />
    </div>
  );
}

export default App;
