/**
 * Created by cnzsb on 2016/8/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
    todos: []
}

const mutations = {
    UPTODO(state, todo) {
        state.todos.push(todo)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production',
    // plugins: process.env.NODE_ENV !== 'production' ? [plugin, logger] : []
})
