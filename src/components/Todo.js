import React from "react";

const Todo = ({
  date,
  id,
  textDes,
  text,
  todo,
  todos,
  setTodos,
  category,
  setInputText,
  setInputTextDes,
  setNote,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editHandler = () => {
    const editedTodo = todos.find((el) => el.id === todo.id);
    setInputText(editedTodo.text);
    setInputTextDes(editedTodo.textDes);
    setNote(editedTodo.id);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li key={id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
        Name: {text}
        <br />
        Content: {textDes}
        <br />
        Category: {category} Date: {date}
      </li>

      <button onClick={() => editHandler(id)} className="complete-btn">
        <i className="fa fa-pen"></i>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
