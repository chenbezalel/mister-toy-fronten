<template>
  <section class="login-page">
      <section v-if="loggedinUser" >
            <h2>you are connected as: {{loggedinUser.username}}</h2>
            <br />
            <el-button @click="logout" type="primary">Logout</el-button>
        </section>
        <section v-else>
            <section v-if="!signupMode" class="login">
                <h1>Login</h1>
                <form @submit.prevent="login" class="login-form">
                <label>
                Username
                    <el-input type="text" v-model="loginDetails.username" placeholder="username" />
                </label>
                <label>
                    Password
                    <el-input type="text" v-model="loginDetails.password" placeholder="password" />
                </label>
                <button class="login-btn" type="primary">Login</button>
                </form>
                </section>
            <section v-else class="signup">
                <h1>Signup</h1>
                <form @submit.prevent="signup" class="login-form">
                <label>
                Fullname
                    <el-input type="text" v-model="signupDetails.fullname" placeholder="fullname" />
                </label>
                <label>
                Username
                    <el-input type="text" v-model="signupDetails.username" placeholder="username" />
                </label>
                <label>
                    Password
                    <el-input type="text" v-model="signupDetails.password" placeholder="password" />
                </label>
                <button class="login-btn" type="primary">Signup</button>
                </form>
                </section>
                <button @click="changeMode" class="signup-btn" type="primary">{{loginMode}}</button>
            </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // loggedinUser: this.$store.getters.user,
      loginDetails: {
        username: '',
        password: '',
      },

      signupDetails: {
                fullname: '',
                username: '',
                password: '',

      },

    signupMode: false
    }
  },
  methods: {
    async login() {
      console.log(this.loginDetails);
      await this.$store.dispatch({
        type: "login",
        user: { ...this.loginDetails },
      })
      this.loginDetails.username = ''
      this.loginDetails.password = ''
    },

    async signup() {
      await this.$store.dispatch({
        type: "signup",
        user: { ...this.signupDetails },
      })
      this.signupDetails.fullname = ''
      this.signupDetails.username = ''
      this.signupDetails.password = ''
    },

    async logout() {
      await this.$store.dispatch({
        type: "logout",
      })
      // this.loggedinUser = null
    },

    changeMode(){
        this.signupMode = !this.signupMode
    }
  },
  computed:{
      loginMode(){
          return this.signupMode? 'Click to login' : 'Click to signup'
      },
      loggedinUser(){
        return this.$store.getters.user
      }
  }
};
</script>

<style>
</style>