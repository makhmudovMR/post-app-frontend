<template>
  <div class="card mt-5" style="margin:auto; width: 20rem;">
    <div class="card-body">
        <h1>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
          v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button class="btn btn-primary" @click="login">Sign in</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components:{},
  data(){
    return {
      email:'',
      password:'',
    }
  },
  methods:{
    login(){
      let data = {
        email: this.email,
        password: this.password
      }
      axios.post('/api/login', data).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
</style>