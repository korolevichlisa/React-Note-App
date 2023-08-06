import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  

  const [inputText, setInputText] = useState("");
  const [inputTextDes, setInputTextDes] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("Task");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [note, setNote] = useState(null)

  useEffect(() => {
    

  const filterHandler = () => {
    switch (status) {
      case "Archive":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    // switch(category){
    //   case "Task":

    // }
  };
  filterHandler()
  }, [todos, status]);

  return (
    <div className="App">
      <Form
        inputTextDes={inputTextDes}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setInputTextDes={setInputTextDes}
        setStatus={setStatus}
        setCategory={setCategory}
        category={category}
        setNote={setNote}
        note={note}
        
      />
      
      <TodoList setNote={setNote} setTodos={setTodos} todos={todos} filteredTodos = {filteredTodos}  setInputText={setInputText} setInputTextDes={setInputTextDes}/>
    </div>
  );
}

export default App;
