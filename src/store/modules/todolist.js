// initial state
const state = {
    todos: [],
    newTodo: ''
}

// getters
const getters = {
    // name: state => state.name,
    // age: state => state.age
}

// actions
const actions = {
    updateProfile({commit}) {
        commit('setName', 'Tuong Vy');
        commit('setAge', 4)
    }
}

// mutations
const mutations = {
    ADD_TODO(state) {
        state.todos.push({
            body: state.newTodo,
            completed: false
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}