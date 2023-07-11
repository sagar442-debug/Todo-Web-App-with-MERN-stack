import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
const Home = () => {
  return (
    <div className='bg-cyan-950 h-screen'>
      <div className='absolute top-72 left-[36vw]'>
      <Form/>
      </div>
     <TodoList/>
    </div>
  )
}

export default Home
