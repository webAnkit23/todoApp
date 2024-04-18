import React, {  useMemo } from 'react'
import { useRef ,useState } from 'react';
import {useSelector } from 'react-redux';
import Todo from './Todo';
import { BsEmojiTearFill } from "react-icons/bs";
export default function TodoList() {
    const ref = useRef();
    const [selected ,setSelected] = useState('All');
    const todos = useSelector((state) => state?.todo);
    
     let filterTodos = useMemo(() =>{
               if(selected==='All'){
                   return todos;
               }
               if(selected==='Pending'){
                  return todos.filter((task) =>!task.completed);
               }
               return todos.filter((task) =>task.completed);
     },[selected,todos]);

  return (
    <div className="container-full">
        <div>
            <div className='animate-[translateX_.6s_ease-in-out_0s_backwards] flex gap-3 p-2 ml-3   font-sans font-semibold text-[20px] relative bg-white'>
                <Span text={'All'} selected={selected} setSelected ={setSelected}/>
                <Span text={'Pending'} selected={selected} setSelected ={setSelected}/>
                <Span text={'Completed'} selected={selected} setSelected ={setSelected}/>
            </div>

            {/* ListDisplay*/}
            <div className='overflow-hidden'>
                { filterTodos?.length>0 ?<div className='flex flex-col gap-4 mt-5 '>
                     {filterTodos.map((todo ,i) => <Todo key={i} todo ={todo} index={i}/>)}
                  </div>:
                  //list is empty message
                  <>
                  {selected!='Pending'&&<h1 className='flex items-center justify-center gap-2 text-center text-[30px] text-blue-400 italic font-bold mt-[30px] '>No task to show<BsEmojiTearFill className='text-blue-500' size={40}/></h1>}
                  <h1 className=' flex items-center font-extrabold justify-center gap-2 text-center text-[45px] text-blue-500 italic  mt-8 animate-bounce'>{
                    selected==='All'? 'Add One':selected==='Pending'? 'All task Completed Well Done!':'Complete One'
                  }</h1></>}
            </div>
        </div>
    </div>
  )
}






function Span({text ,selected ,setSelected}){
    const handleClick =() =>{
        setSelected(text);
    }
    return(
        <span onClick={handleClick} className={`${selected===text?'text-white  bg-blue-500 italic':'bg-white'} rounded-lg z-10 p-1 pl-3 pr-3  cursor-pointer w-[120px]  flex items-center justify-center `}>{text}</span>
    )
}
