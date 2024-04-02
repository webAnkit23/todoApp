import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { GiCheckMark } from "react-icons/gi";
import { ToggleCompleted,RemoveTodo } from '../Store/todoSlice';
import { RiDeleteBinFill } from "react-icons/ri";
import { checkValidity } from '../utilities/checkTodoValidity';

export default function Todo({todo,index}) {
  const dispatch = useDispatch();
    const handleToggle =() =>{
             dispatch(ToggleCompleted({id:todo.id}));
    }
    const handleDelete =() =>{
              dispatch(RemoveTodo({id:todo.id}));
    }
    //formatting the date for each todo
    
    const deadline = useMemo(() =>{
           const value = new Date(todo.deadline);
           return value.toDateString();
    },[todo]);
   const valid = useMemo(() => checkValidity(todo.deadline),[todo]);
   //compare todo completing deadline to current time 
   //red background for task not completed in given time
   //green means completed
   
  return (
    <div className={`sm:grid animate-[translate_.6s_ease-in-out_0s_backwards]   items-center grid-cols-3 relative shadow-xl sm:shadow-none m-2 p-6 ${todo.completed?'bg-green-200':valid?'bg-white':'bg-red-400'} rounded-xl `}>
        <div className='flex items-center gap-4 w-fit'>
        <span className='relative cursor-pointer ' onClick={handleToggle}>
            <span className='h-[35px] w-[35px] block border-2 border-blue-700 rounded-full'></span>
            <GiCheckMark size={35}  className={`${!todo.completed?'hidden':''} absolute top-0  text-blue-700`}/>
        </span>
         <p className='text-xl italic font-semibold text-wrap sm:max-w-[500px] break-all w-fit pr-4 mr-5'>{todo.task}</p>
        </div>
        <span className='relative items-center justify-center text-lg italic font-semibold text-blue-500 top-4 sm:top-0 sm:flex sm:mt-0 sm:text-black'>{deadline}</span>
        <button className={ `${!valid?'text-blue-700' :'text-red-600'} flex items-center justify-center sm:relative absolute right-2 sm:right-0 hover:animate-spin sm:top-0 bg-slate-300 sm:p-0 p-3 rounded-full sm:bg-transparent top-2 `} onClick={handleDelete}><RiDeleteBinFill  size={25}/></button>
    </div>
  )
}
