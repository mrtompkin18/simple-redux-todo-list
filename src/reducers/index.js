// import { combineReducers } from "redux";

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
                todos: state.todos.filter((todo) => todo.text !== action.text),
                history: state.history
            }
        default:
            return state
    }
}

// const history = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, { 'text': action.text }]
//         default:
//             return state
//     }
// }

// const list = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, { 'text': action.text }]
//         case 'REMOVE_TODO':
//             return state.filter((todo) => todo.text.indexOf(action.text) === -1)
//         default:
//             return state
//     }
// }

// export default combineReducers({
//     list,
//     history
// })