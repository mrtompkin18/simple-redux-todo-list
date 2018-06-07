let initialState = {
    todos: [],
    history: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, { 'text': action.text }],
                history: [...state.history, { 'text': action.text }]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter((todo) => todo.text.indexOf(action.text) === -1),
                history: state.history
            }
        default:
            return state
    }
}


