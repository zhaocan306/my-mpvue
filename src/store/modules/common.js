const state = {
    count: 0
}

const mutations = {
    // 保存用户的openid
    increment(state, params){
        state.count += 1;
    },
    // 保存用户的详细信息
    decrement(state, params) {
        state.count -= 1;
    }
}

const actions = {
    increment(context, params) {
        context.commit('increment', params);
    },
    decrement(context, params) {
        context.commit('decrement', params);
    }
}

export default {
    state,
    mutations,
    actions
}
