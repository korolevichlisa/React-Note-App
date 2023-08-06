import React from "react";




const Form = ({
  inputText,
  inputTextDes,
  setInputText,
  setInputTextDes,
  todos,
  setTodos,
  setStatus,
  setCategory,
  category, setNote,note
}) => {


  React.useEffect(() => {
    setTodos([
        {
          text: 'Learn React',
          textDes: 'Learn React and its ecosystem',
          category: "Task",
          completed: false,
            id: 1,
        },
        {
          text: 'Create a React Component',
          textDes:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            category: "Idea",
            completed: false,
            id: 2,
        },
        {
          text: 'Learn Vue',
          textDes:
                'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            category: "Task",
            completed: false,
            id: 3,
        },
        {
          text: 'Learn Angular',
          textDes:
                'A wonderful serenity has taken possession of my entire soul.',
                category: "Task",
            completed: false,
            id: 4,
        },
        {
          text: 'Vue Typewriter',
          textDes:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            status: 0,
            completed: false,
            id: 5,
        },
        {
          text: 'Learn jQuery',
          textDes:
                'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
          category: "Task",
            completed: false,
            id: 14,
        },
        {
          text: 'Learn Javascript',
          textDes:
                'The European languages are members of the same family. Everyone realizes why a new common language would be desirable: one',
          category: "Task",
            completed: false,
            id: 15,
        },
    ]);
}, []);



  const inputTextHandler = (e) => {
    
    setInputText(e.target.value);
  };
  const inputTextHandlerDes = (e) => {
    
    setInputTextDes(e.target.value);
  };

  const submitTodoHandler = (e) => {

    e.preventDefault();
    if(inputText === '' && inputTextDes === ''){
      alert("Input data")}
      else{
    setTodos([
      ...todos,
      {
        text: inputText,
        textDes: inputTextDes,
        category: category,
        completed: false,
        id: Math.random() * 1000,
        date: Date.now(),
      },
    ]);
    setInputText("");
    setInputTextDes("");
    setCategory("Task")
  }
  if(note){
    const editNote = todos.find((todo) => todo.id === note)
    const updateNote = todos.map((to)=> to.id === editNote.id
    ?(to = {id: to.id, text:inputText, textDes: inputTextDes,
      category: category})
    :(to = {id: to.id, text:to.text, textDes: to.textDes,
      category: to.category}))
    setTodos(updateNote)
    setNote(0)
    setInputText("");
    setInputTextDes("");
    setCategory("Task")
  }
  };

  const categoryHandler = (e) =>{
    setCategory(e.target.value)
  }

  const statusHandler = (e) =>{
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todoTitle-input"
      />
      <input
        value={inputTextDes}
        onChange={inputTextHandlerDes}
        type="text"
        className="todoDescription-input"
      />

      <div className="select">
        <select
          onChange={categoryHandler}
          name="todos"
          className="category filter-todo"
        >
          <option defaultValue="selected" value="Task">
            Task
          </option>
          <option value="Random Thought">Random Thouht</option>
          <option value="Idea">Idea</option>
        </select>
      </div>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">{note? "EDIT": "ADD"}
        {/* <i className="fas fa-plus-square"></i> */}
      </button>
      <div className="select">
        <select
          onChange={statusHandler}
          name="todos"
          className="filter-todo"
        >
          <option defaultValue="selected" value="All">
            All
          </option>
          <option value="Active">Active</option>
          <option value="Archive">Archive</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
