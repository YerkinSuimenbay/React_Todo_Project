export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.payload, ...state]
        case 'TASK_COMPLETED':
            const newState = state.map(item => {
                if (item.id === action.payload) {
                    let copyItem = {...item}
                    copyItem.isCompleted = !copyItem.isCompleted
                    return copyItem
                }
                return item
            })
            return newState
        case 'DELETE_TASK':
            const filteredState = state.filter(item => item.id !== action.payload)
            return filteredState
        case 'DELETE_COMPLETED_TASKS':
            const todosOnly = state.filter(item => !item.isCompleted)
            return todosOnly
        case 'DELETE_ALL_TASKS':
            return []
        case 'SEARCH_TASK':
            const searchResult = state.filter(item => item.todo.includes(action.payload))
            return searchResult
        default:
            return state
    }
}