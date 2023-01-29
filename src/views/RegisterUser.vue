<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="first_name" placeholder="First Name">
        </div>
        <br>
        <div class="form-group">
            <label>Last Name </label>
            <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
        </div>
        <br>
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" placeholder="Email">
        </div>
        <br>
        <div class="form-group">
            <label>Password</label>
            <input type="text" class="form-control" v-model="password" placeholder="Password">
        </div>
        <br>
        <div class="form-group">
            <label>Confirm Password</label>
            <input type="text" class="form-control" v-model="password_confirm" placeholder="Confirm Password">
            <br>
        </div>

        <button class="btn btn-primary btn-block"> Sign Up</button>
       
    </form>
</template>

<script>
import axios from "axios"
export default {
    name: "RegisterUser",
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_comfirm: ''
        }
    },
    methods: {
    handleSubmit(){
        const data = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm //fixed typo
        }
        axios.post('HTTP://LOCALHOST:8000/registeruser', data)
        .then(
            res =>{
                console.log(res)
            }
        ).catch (
            err => {
                console.log(err)
            }
        )
    }
}
        
            
        }
    

</script>