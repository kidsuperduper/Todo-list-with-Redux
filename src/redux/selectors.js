import { createSelector } from "@reduxjs/toolkit";

const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search.toLowerCase();
const statusFilterSelector = (state) => state.filters.status;
const priorityFilterSelector = (state) => state.filters.priority;

export const todoListRemaining = createSelector(
    todoListSelector,
    statusFilterSelector,
    priorityFilterSelector,
    searchTextSelector,
    (todoList, status, priority, searchText) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priority.length > 0
                    ? todo.name.toLowerCase().includes(searchText) &&
                          priority.includes(todo.priority)
                    : todo.name.toLowerCase().includes(searchText);
            }

            return (
                todo.name.toLowerCase().includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priority.length > 0 ? priority.includes(todo.priority) : true)
            );
        });
    }
);
