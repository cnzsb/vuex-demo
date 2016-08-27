/**
 * Created by cnzsb on 2016/8/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    INCREMENT (state, amount) {
        state.count += amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})
