import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        todos: [
            { id: 1, todo: "todo 1" },
            { id: 2, todo: "todo 2" },
        ],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id:
                    state.todos.length === 0
                        ? 1
                        : state.todos[state.todos.length - 1].id + 1,
                todo: action.payload,
            });

            return state;
        },
        deleteTodo(state, action) {
            console.log("21");
            if (state.todos.length === 1) {
                state.todos = [];
                return;
            }

            const newTodos = state.todos.filter(
                (item) => item.id != action.payload
            );

            state.todos = newTodos;

            return;
        },
        resetTodo(state, action) {
            state.todos = [];

            return;
        },
    },
});

export const { addTodo, deleteTodo, resetTodo } = todoSlicer.actions;

export default todoSlicer.reducer;
