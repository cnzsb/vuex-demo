/**
 * Created by cnzsb on 2016/8/27.
 */
export const addTodo = ({dispatch}, todo) => {
    dispatch('ADD_TODO', todo)
}

export const delTodo = ({dispatch}, todo) => {
    dispatch('DEL_TODO', todo)
}

export const toggleTodo = ({dispatch}, todo) => {
    dispatch('TOGGLE_TODO', todo)
}

export const toggleAll = ({dispatch}, done) => {
    dispatch('TOGGLE_ALL', done)
}

export const clearCompleted = ({dispatch}) => {
    dispatch('CLEAR_COMPLETED')
}
