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

    setLoggedinUser(state, {loggedinUser}){
      state.user = loggedinUser
    },

    signup(state, {signedupUser}){
      state.user = signedupUser
    },

    logout(state){
      state.user = null
    }
  },
  actions: {

    async login({commit} , {user}){
      try{
        const loggedinUser = await userService.login(user.username, user.password)
        commit({type:'setLoggedinUser', loggedinUser})
        return loggedinUser
      } catch(err){
        console.log('userStore: Error in signup', err)
        throw err
      }
      },

    async signup({commit} , {user}){
        const signedupUser = await userService.signup(user.fullname, user.username, user.password)
        console.log(signedupUser);
        commit({type:'signup', signedupUser})
      },
      
      async logout({commit}){
        await userService.logout()
        commit({type:'logout'})
    }
  },
}
