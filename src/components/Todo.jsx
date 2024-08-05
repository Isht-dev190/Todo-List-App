import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef();

  const [todoList, setTodoList] = useState([])

  
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if(inputText === "") return null;
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev) => [...prev, newTodo])
    inputRef.current.value = "";
  
  
    
    
    
  };
  
  
  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo
      })
    })
  }

  useEffect(()=> (console.log(todoList)), [todoList])



  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col min-h-[500px] rounded-xl'>
      {/* Title */}
      <div className='flex items-center mt-[30px] ms-5 gap-[20px]'>
        <img className='w-[40px] flex place-self-center' src={todo_icon} alt='' />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* Input box */}
      <div className='flex items-center my-7 ms-6 me-6 rounded-xl bg-gray-200'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add your task'
          className='rounded-full bg-transparent border-0 outline-none flex-1 h-[35px] pl-4 pr-2 placeholder:text-slate-600'
        />
        <button onClick={add} className='border-none rounded-full bg-purple-700 w-[100px] h-[35px] text-white text-lg cursor-pointer'>
          ADD +
        </button>
      </div>


        
          {todoList.map((item, index) =>  {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo = {deleteTodo} toggle= {toggle} /> }) }
        
    </div>
  );
};

export default Todo;
