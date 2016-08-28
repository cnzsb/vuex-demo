/**
 * Created by cnzsb on 2016/8/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    INCREMENT (state, amount) {
        state.count += amount
    }
}

/* const logger = createLogger({
    collapsed: false,
    transformer (state) {
        return state.count
    },
    mutationTransformer (mutation) {
        return mutation.type
    }
})*/

/* const plugin = store => {
    store.subscribe((mutation, state) => {
        console.log(mutation.type)
        console.log(state.count)
    })
}*/

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production',
    // plugins: process.env.NODE_ENV !== 'production' ? [plugin, logger] : []
})
