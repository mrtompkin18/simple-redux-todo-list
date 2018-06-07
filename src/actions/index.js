export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const removeTodo = (text) => {
    return {
        type: 'REMOVE_TODO',
        text
    }
}


