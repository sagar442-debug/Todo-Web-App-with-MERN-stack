import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const Form = () => {
    const[todo, setTodo] = useState("");

    const onChange = (e) =>{
        setTodo(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(todo))
        console.log(todos)
    }

    const todos = useSelector(state => state.todos.value)
    const dispatch = useDispatch()

  return (
    <div className='flex justify-center items-center font-monsterrat'>
      <div className="box-form bg-slate-900 p-10 rounded-2xl ">
        <form className=' text-white' action="">
            <label className='text-xl mr-2' htmlFor="">Task Todo: </label>
            <input onChange={onChange} type="text" value={todo} className='text-xl text-black p-1 rounded' placeholder='Type you task'/><br/>
            <div className='flex justify-center mt-2'>
            <button onClick={handleSubmit} className='bg-red-700 rounded p-2 px-3 mt-3'>Add</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
