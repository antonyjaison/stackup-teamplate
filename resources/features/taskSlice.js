import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tasks: [],
    lists:[],
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addLists:(state,action)=>{
            state.lists = action.payload;
        },
        addTasks:(state,action)=>{
            console.log(action.payload)
            state.tasks = action.payload;
        },


        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[index] = action.payload;
        },
    },
});

export const { addTask, removeTask, updateTask, addLists, addTasks } = taskSlice.actions;

export default taskSlice.reducer;