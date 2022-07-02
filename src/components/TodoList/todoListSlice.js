// const initialState = [
//     { id: 1, name: "Learn Redux", priority: "Medium", completed: true },
// ];

// const todoListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleStatus":
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );
//         default:
//             return state;
//     }
// };

// export default todoListReducer;

// Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const storageJob = JSON.parse(localStorage.getItem("jobs"));

export default createSlice({
    name: "todoList",
    initialState: storageJob || [
        { id: 1, name: "Learn Redux", priority: "Medium", completed: true },
        { id: 2, name: "Learn PHP", priority: "High", completed: false },
        { id: 3, name: "Learn React", priority: "Low", completed: false },
        { id: 4, name: "Sleep", priority: "Medium", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            const jsonJob = JSON.stringify(state);
            localStorage.setItem("jobs", jsonJob);
        },
        toggleStatus: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
                const jsonJob = JSON.stringify(state);
                localStorage.setItem("jobs", jsonJob);
            }
        },
        deleteTodo: (state, action) => {
            const newState = state.filter((todo) => todo.id !== action.payload);
            const jsonJob = JSON.stringify(newState);
            localStorage.setItem("jobs", jsonJob);
            return newState;
        },
    },
});
