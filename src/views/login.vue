<template>
  <section class="login-page">
      <section v-if="loggedinUser" >
            <h2>you are connected as: {{loggedinUser.username}}</h2>
            <br />
            <el-button @click="logout" type="primary">Logout</el-button>
        </section>
        <section v-else>
            <h1>Login</h1>
            <form @submit.prevent="login" class="login-form">
            <label>
            Username
                <el-input
                type="text"
                v-model="loginDetails.username"
                placeholder="username"
                />
            </label>
            <label>
                Password
                <el-input
                type="text"
                v-model="loginDetails.password"
                placeholder="password"
                />
            </label>
            <button class="login-btn" type="primary">Login</button>
            </form>
        </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loggedinUser: this.$store.getters.user,

      loginDetails: {
        username: '',
        password: '',
      },

    };
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

    async logout() {
      await this.$store.dispatch({
        type: "logout",
      })
      this.loggedinUser = null
    },
  },
};
</script>

<style>
</style>