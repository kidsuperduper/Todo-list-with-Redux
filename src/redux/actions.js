export const addTodo = (data) => {
    return { type: "todoList/addTodo", payload: data };
};

export const toggleStatus = (id) => {
    return { type: "todoList/toggleStatus", payload: id };
};

export const searchTextChange = (text) => {
    return { type: "filters/searchTextChange", payload: text };
};

export const statusFilterChange = (status) => {
    return { type: "filters/statusFilterChange", payload: status };
};

export const priorityFilterChange = (priority) => {
    return { type: "filters/priorityFilterChange", payload: priority };
};
