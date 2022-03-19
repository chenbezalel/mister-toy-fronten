import { userService } from "../services/user.service.js"

export default {
  state: {
    user: userService.getLoggedinUser(),
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    login(state, {loggedinUser}){
      state.user = loggedinUser
    }
  },
  actions: {
    async login({commit} , {user}){
        const loggedinUser = await userService.login(user.username, user.password)
        console.log(loggedinUser);
        commit({type:'login', loggedinUser})
    },

    async logout({context}){
      await userService.logout()
    }
  },
}
