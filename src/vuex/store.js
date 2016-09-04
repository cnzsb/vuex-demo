/**
 * Created by cnzsb on 2016/8/27.
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const STORAGE_KEY = 'mytodo'

const state = {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
    ADD_TODO(state, todo) {
        const fullTime = new Date()
        const time = (fullTime.getMonth() + 1)
            + '-' + fullTime.getDate()
            + ' ' + fullTime.getHours()
            + ':' + (fullTime.getMinutes() < 10 ? '0' + fullTime.getMinutes() : fullTime.getMinutes())
        state.todos.push({
            time,
            text: todo,
            done: false
        })
    },
    DEL_TODO(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    TOGGLE_TODO(state, todo) {
        todo.done = !todo.done
    },
    TOGGLE_ALL(state, done) {
        state.todos.forEach(todo => {
            todo.done = done
        })
    },
    CLEAR_COMPLETED(state) {
        state.todos = state.todos.filter(todo => !todo.done)
    }
}

const localStoragePlugin = store => {
    store.subscribe((mutation, {todos}) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production',
    plugins: [localStoragePlugin]
})
