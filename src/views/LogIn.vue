<template>
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" placeholder="Email"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password"/>
      </div>
      <button class="btn btn-primary btn-block">Login</button>
    </form>        
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'LogIn',
    data () {
      return {
        email: '',
        password: '',
      }
    }, 
    methods: {
<<<<<<< Updated upstream
      ...mapActions(['login']),
      async handleSumbit() {
        await this.login({ email: this.email, password: this.password })
      }
    }
=======
  ...mapActions(['login']),
  async handleSubmit() {
    await this.login({ email: this.email, password: this.password })
  }
}
>>>>>>> Stashed changes
  }
  </script>
  