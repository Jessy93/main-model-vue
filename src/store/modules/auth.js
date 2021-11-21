export default ({
  state: {
    auth: true
  },
  getters: {
    auth: (state) => state.auth,
  },
  mutations: {
    setAuth(state, auth){state.auth = auth;},
  },
  actions: {
    getAuth(ctx){ctx.commit('setAuth', true)}
  },
})
