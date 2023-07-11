import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-cyan-950 sticky text-white flex items-center py-4 justify-around font-monsterrat'>
      <h1 className='text-4xl font-semibold'><Link to="/"> Todo app</Link></h1>
      <ul className='flex space-x-10'>
        <li className='text-2xl'> <Link to="/">Home</Link> </li>
        <li className='text-2xl'> <Link to="/about">About</Link> </li>
      </ul>
      <div className="buttons space-x-3">
        <button className='rounded bg-emerald-500 text-white hover:bg-emerald-600 duration-100 p-2'>Log In </button>
        <button className='rounded bg-emerald-500 text-white hover:bg-emerald-600 duration-100 p-2'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
