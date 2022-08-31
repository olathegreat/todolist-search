import React,{useState, useEffect} from 'react';
import "./regular/icofont.min.css";
import {Link} from "react-router-dom";
import SearcherApp from './SearcherApp';

const LOCAL_STORAGE_KEY = "react-tod-list-todos";

const Todo = () => {
  
 
  const [newtask, setNewtask] = useState("");
 const [todo, setTodo] = useState({});
//  const [todos, setTodos] = useState([
//   {
//     id: 1,
//     task: "running",
//     done:false,
//   },
//   {
//     id: 2,
//     task: "fighting",
//     done:false,
//   },
//   {
//     id: 3,
//     task: "gulping",
//     done:false,
//   },
//  ])
const [todos, setTodos] = useState([]);
 useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storageTodos){
   setTodos(storageTodos)
  }
    
 }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  
    
 }, [todos]);



 

 const onChange = (e) =>{
  setNewtask(e.target.value);
  console.log(newtask)
  setTodo({...todo,id:todos.length + 1, task:e.target.value,done:false});
  
 }

 const onSubmit = (e) =>{
  e.preventDefault();
  if(newtask !== ""){
    
    setTodos([...todos,todo]);
    console.log(todos)
    setNewtask("");
  

  }else{
    alert("type in a todo")
  }
  
 }
 const deleteTodo = (id) =>{
  // setTodos([...todos,{...id, done:true}])
  const newArray = todos.filter(todo=> todo.id !==id);
  setTodos(newArray);
 }
 const checkDone = (id) =>{

  setTodos(todos.map(todo=>{
    if(todo.id===id){
      return{
        ...todo,completed:!todo.completed
      }
    }
    return todo;
  }))
 }

 const renderTodos = todos.map((todo=>{
  return(
    <div key={todo.id} className='todobar'>
      <input onChange={()=>{checkDone(todo.id)}} type="checkbox"></input>
      <div style={{textDecoration:todo.completed && "line-through", color:todo.completed && "grey"}}>{todo.task}</div>
      <i  onClick={()=>{deleteTodo(todo.id)}} className='icofont-close'></i>
      
    </div>
  )
 }))
 

  





  return (
    <div className='main'>
       <div className='Todomain'>
      <h3>Todo App</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={newtask} onChange={onChange}/>
        <button type="submit">Add</button>
      </form>
      <div className='todos'>
        {renderTodos}


      </div>
     
    </div>
    
         <div style={{display: "flex"}}>
                   <SearcherApp todos={todos}/>
         </div>
         
    </div>
      );
   
}

export default Todo;
