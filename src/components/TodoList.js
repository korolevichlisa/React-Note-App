import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setInputText, setInputTextDes,setNote }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        
        {filteredTodos?.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            textDes = {todo.textDes}
            category = {todo.category}
            setInputText = {setInputText}
            setInputTextDes={setInputTextDes}
            setNote={setNote}
            
          />
          
        ))}
        
      </ul>
    </div>
  );
};

export default TodoList;
