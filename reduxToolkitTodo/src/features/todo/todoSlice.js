// features ko sclice bolte hain in redux
// for creating slice we need three things:
// 1: nameinitial State
// 2: initial State
// 3:list of all reducers


import { createSlice,nanoid } from "@reduxjs/toolkit";
// nanoid is a method provide,which generates the unique ID's

const initialState ={
    todos:[{id:1,text:"Hello World"}]
}

//slice is kind of bigger version of reducer
/// reducers contail properties and functions

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{   //state gives the updated value in the store
            const todo={
                id:nanoid(),          
                text:action.payload //payload is an object which contains id,text etc.
            }
            state.todos.push(todo)
        },
                                 //hamesa reducer ki properties me do chile milengi pahla state,
                                  //  jo batati hai ki current state kya hai(means present state ka access) and doosra action,
                                  // jaise agar remove todo krna hai to km se km id to lagegi jo action se milegi
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{           
            const {id,text}=action.payload;
            const todo=state.todos.find(todo=> todo.id===id);
            if(todo){
                todo.text=text;
            }
        },
    }
})
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions// individual reducers are needed in different functions so we need to export them individual

export default todoSlice.reducer// store needs the list of reducers so we export the all the reducers as a list 
