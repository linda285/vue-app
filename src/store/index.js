import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile'
import todolist from './modules/todolist'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        profile,
        todolist
    }
})