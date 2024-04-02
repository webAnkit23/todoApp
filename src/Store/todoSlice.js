import { createSlice} from '@reduxjs/toolkit'

function fetchLocal(){
    let todos = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
    return todos;
}

const todoSlice = createSlice({
    name: 'TodoList',
    initialState : fetchLocal(),       
    reducers :{
        AddTodo : function(state ,action){
            console.log(action);
           state.unshift({
            ...action.payload
           })
           localStorage.setItem('todos' , JSON.stringify(state));
        },
        RemoveTodo : function(state , action){
           //find index to remove
           console.log(action);
           let index =null;
           state.forEach((task,i) =>{
            if(task.id===action.payload.id){
                  index = i;
              }
           })
           if(index==0){
            state.shift();
           }
          else{
           state.splice(index,index);
          }
           localStorage.setItem('todos' , JSON.stringify(state));
           if(state.length===0){
            localStorage.removeItem('todos');
           }
           
        },
       ToggleCompleted : function(state ,action){
             const todo =  state.find((task) => task.id===action.payload.id);
             console.log(todo);
             todo.completed  = !todo.completed;
             localStorage.setItem('todos' , JSON.stringify(state));
        },   
    }
})
export const {AddTodo ,RemoveTodo,ToggleCompleted} = todoSlice.actions;
export default todoSlice.reducer;