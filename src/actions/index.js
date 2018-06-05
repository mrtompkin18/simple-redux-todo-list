export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const removeTodo = text => {
    return {
        type: 'REMOVE_TODO',
        text
    }
}

export const sortTodo = todos => {
    return {
        type: 'SORT_TODO',
        todos
    }
}