<template>
<form @submit.prevent="handleSumbit">
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
    import axios from 'axios'
    export default {
        name: 'LogIn',
        data () {
            return {
                email: '',
                password: '',
            }
        }, 
        methods:{
            async handleSumbit(){
                const response = await axios.post('api/registerusers', {
                    email: this.email,
                    password: this.password
                })
               localStorage.setItem('token', response.data.token)
            }
            
        }

    }
</script>