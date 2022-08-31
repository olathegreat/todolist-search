import React, {useState} from 'react';
import "./Style.css"

const SearcherApp = ({todos}) => {
    const [term,setTerm] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        setTerm(e.target.value)

    }

  return (
    <div className='search'>
        <h3>Search your todo</h3>
        <form onSubmit={submit}>
            <input type="text" onChange={(e)=>setTerm(e.target.value)} placeholder='search your task'></input>
            

        </form>
        {
            todos.filter((todo) =>
                todo.task.toLowerCase().includes(term)

            ).map((todo)=>(
                <div className='resultBar' key={todo.task}>{todo.task}</div>
            ))
            
          }
      
    </div>
  )
        }
export default SearcherApp;
