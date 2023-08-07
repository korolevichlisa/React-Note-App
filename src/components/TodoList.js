import React from "react";
import Todo from "./Todo";
import Stat from "./Stat";

const TodoList = ({
  inputData,
  setInputData,
  status,
  todos,
  setTodos,
  filteredTodos,
  setInputText,
  setInputTextDes,
  setNote,
}) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos?.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              date={todo.date}
              textDes={todo.textDes}
              category={todo.category}
              setInputText={setInputText}
              setInputTextDes={setInputTextDes}
              setNote={setNote}
              setInputData={setInputData}
              inputData={inputData}
            />
          ))}

          <Stat todos={todos} status={status} />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
