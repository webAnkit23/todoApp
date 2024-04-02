import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../Store/todoSlice';
export default function InputForm() {
  const [task ,setTask] = useState('');
  const [deadline ,setDeadline] = useState('');
  const dispatch = useDispatch();
 const handleSubmit =() =>{
  const obj ={
    id:Date.now(),
    completed:false,
    task,
    deadline,
  }
  dispatch(AddTodo(obj));
  setTask('');
  setDeadline('');
 }
    
  return (
    <div  className='animate-[translate_.7s_ease-in-out_1s_backwards] flex items-center justify-center w-auto m-2 '>
        <div className='relative flex items-center gap-3 p-2 m-3 bg-white shadow-xl rounded-xl w-fit'>
            <input type='text' placeholder="Enter Today's task" value ={task} onChange={(e) =>setTask(e.target.value)} className='focus:outline-none text-lg     w-[200px] sm:w-[400px]'/>
            <input type='date' value ={deadline} onChange={(e) =>setDeadline(e.target.value)}  className='w-[20px] focus:outline-none'/>
           <button disabled={!task||!deadline} onClick={handleSubmit} className={` disabled:opacity-55 disabled:bg-blue-400 p-1 pl-3 pr-3 font-sans font-semibold text-white bg-blue-500 select-none rounded-2xl`}>Add</button>
        </div>
    </div>
  )
}
