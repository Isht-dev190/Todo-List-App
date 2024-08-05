import React from 'react'
import tick from '../assets/tick.png'
import untick from '../assets/untick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-5 ms-7 gap-0 '>
      <div onClick={() => {
        toggle(id)
      }} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : untick} alt=""  className='w-[30px] p-0 m-0'/>
        <p className={`text-slate-700 ml-3 text-[17px] decoration-slate-500
          ${isComplete ? "line-through" : ""}`}>
            {text}</p>
      </div>

        <img onClick={() => {
          deleteTodo(id)
        }} src={delete_icon} alt="" className= 'w-3.5 cursor-pointer me-8' />
      
    </div>
  )
}

export default TodoItems
