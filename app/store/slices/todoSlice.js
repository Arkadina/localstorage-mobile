import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            console.log(action);

            state.todos.push(action.payload);

            return state;
        },
    },
});

export const { addTodo } = todoSlicer.actions;

export default todoSlicer.reducer;
