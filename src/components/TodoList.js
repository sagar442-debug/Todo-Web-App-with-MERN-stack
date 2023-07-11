import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {
    const todos = useSelector(state => state.todos.value)
    console.log(todos)
  return (
    <div>
      {todos.map((todo, index)=>{
        return(
            <TodoCard key={index} todo={todo} />
        )
        
      })}
    </div>
  )
}

export default TodoList
