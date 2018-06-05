export const todoReducer = (state = [],action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,{ 
                text: action.text
            }]
        case 'REMOVE_TODO':
            return state.filter((todo)=>
                ( todo.text.indexOf(action.text) === -1 )
            )
        case 'SORT_TODO':
            return [...state.sort((a,b)=>{
                return (a.text > b.text)
            })]
        default:
            return state
    }
}
