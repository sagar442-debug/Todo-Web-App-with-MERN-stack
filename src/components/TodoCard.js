import React, { useState } from 'react'

const TodoCard = ({todo}) => {
    const [color, setColor] = useState('#fff');
    const [strike , setStrike] = useState(false);
    const handleColor = () =>{
        if(color==="#fff"){
            setColor('#cc5')
            setStrike(true);
        }
        else{
            setColor('#fff')
            setStrike(false);
        }
    }


  return (
    <div className='flex justify-center my-1'>
      <ul className='bg-gray-900 w-96 rounded-xl flex items-center text-white font-monsterrat'>
      <span onClick={handleColor} className={`mx-2 h-5 w-5 rounded-full bg-[${color}]`}></span>

        <li className='mx-2 py-1'>{strike===true? <del>{todo}</del>:todo}
        
        </li>
      </ul>
    </div>
  )
}

export default TodoCard
