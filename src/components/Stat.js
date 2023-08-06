import React from 'react'

const Stat = ({ id, textDes, text, todo, todos, setTodos, category,setInputText, setInputTextDes,setNote }) => {

  let countTask = 0
  let countTaskArchived = 0
  let countIdea = 0
  let countIdeaArchived = 0
  let countRandom = 0
  let countRandomArchived = 0
  todos?.map(todo => {
    switch(todo.category){
      case "Task": if(todo.completed == false){countTask +=1;}else{countTaskArchived +=1} break
      case "Idea": if(todo.completed == false){countIdea +=1;}else{countIdeaArchived +=1}break
      case "Random Thought": if(todo.completed == false){countRandom +=1;}else{countRandomArchived +=1}break
  
    }
  })
  
  return (
    <div>
          <table>
            <tr >
              <th>Note Category</th>
              <th>Active</th>
              <th>Archive</th>
            </tr>
            <tr>
              <td>Task</td>
              <td>{countTask}</td>
              <td>{countTaskArchived}</td>
            </tr>
            <tr>
              <td>Idea</td>
              <td>{countIdea}</td>
              <td>{countIdeaArchived}</td>
            </tr>
            <tr>
            <td>Random Thought</td>
            <td>{countRandom} </td>
            <td>{countRandomArchived}</td>
            </tr>
          </table>
            <li
            key={id}
            className='todo-item'
          >   <br/>        
          </li>
        
     
      
    </div>
  )
}

export default Stat
