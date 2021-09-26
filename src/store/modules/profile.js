// initial state
const state = {
    name: 'Giang',
    age: 33
}

// getters
const getters = {
    // name: state => state.name,
    // age: state => state.age
    name(state) {
        return state.name;
    }
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
    setName(state, name) {
        state.name = name;
    },
    setAge(state, age) {
        state.age = age;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}