import { useEffect, useRef, useState } from 'react'

import './App.css'
import axios from './assets/axios'

interface Todo{
  id:number,
  task:string,
  done:boolean
}
function App() {
  const taskref=useRef<HTMLInputElement|null>(null)
  const doneref=useRef<HTMLInputElement|null>(null)
  const url="https://retoolapi.dev/YHF97G/data";
  const [todos, settodos] = useState<Todo[]>([]);

  const getTodos= async ()=>{
    const todos=(await axios.get("/")).data;
    settodos(todos)
  }
  
  useEffect(()=>{
      getTodos();
  },[])

  const onSubmit = async(even:React.FormEvent)=>{
    even.preventDefault();
    const todoItem:Omit<Todo,"id">= {
      task:taskref.current!.value,
      done:doneref.current!.checked
    }
    console.log(todoItem)
    const setTodos=await axios.post("/",todoItem)
    getTodos()
    
  }
  const deleteTodos=async ()=>{
    const response=axios.delete(url+"/2")

  }

  return (
    
    <>
    <ul>
      {todos.map(todo=><li key={todo.id}>{todo.task}{todo.done}</li>)}
    </ul>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='task'>feladat</label>
          <input type="text" id="task" ref={taskref} />
        </div>
        <div>
          <label htmlFor='el'>el</label>
          <input type="checkbox" id="el" ref={doneref} />
        </div>
        <button type='submit'>felvétel</button>

      </form>
    </>
  )
}

export default App
