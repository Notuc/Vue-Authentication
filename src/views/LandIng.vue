<!-- <template>
  <section id="hero">
    <div>
    <h1 v-if="user">Welcome, {{ user.first_name }} {{ user.last_name }} to our Landing Page</h1>
    <h1 v-if="!user">You are not logged in </h1>
    <p>Learn more about our company and services</p>
    <button class="blue-button">Learn More</button>
    <br>
  </div>
  </section>
  <br>
  <section id="about">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna euismod congue tincidunt, magna nibh bibendum augue, a aliquet magna eros eget augue. Fusce euismod risus in est pellentesque, id blandit quam fringilla. Sed eget justo euismod, malesuada augue quis, tempus ante. Curabitur vel velit vel velit eleifend tincidunt id id ipsum. Sed et erat nec magna bibendum bibendum. Duis quis est euismod, volutpat velit vel, interdum velit. Sed vel velit vel velit eleifend tincidunt id id ipsum. Sed et erat nec magna bibendum bibendum. Duis quis est euismod, volutpat velit vel, interdum velit.</p>
  </section>
  <section id="services">
  </section>
</template>
<script>
import axios from 'axios'
  export default {
      name: "LandIng",
      data (){
        return{
          user: null,
        }
      },
      created() {
        axios.get('api/registerusers')
          .then(response => {
            this.user = response.data.registerusers;
          })
          .catch(error => {
            console.log(error);
          });
      },
};

  
</script>
<style>
.blue-button {
background-color: #167bff;
color: white;
border: none;
padding: 10px 20px;
font-size: 18px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.blue-button:hover {
background-color: #84b3f1;
}
</style> -->

<template>
  <section id="hero">
    <div>
      <h1 v-if="users.length > 0">Welcome, {{ displayUserName() }} to our Landing Page</h1>
      <h1 v-if="!users.length">You are not logged in </h1>
      <p>Learn more about our company and services</p>
      <button class="blue-button">Learn More</button>
    </div>
  </section>
  <br>
  <section id="about">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna euismod congue tincidunt, magna nibh bibendum augue, a aliquet magna eros eget augue. Fusce euismod risus in est pellentesque, id blandit quam fringilla. Sed eget justo euismod, malesuada augue quis, tempus ante. Curabitur vel velit vel velit eleifend tincidunt id id ipsum. Sed et erat nec magna bibendum bibendum. Duis quis est euismod, volutpat velit vel, interdum velit. Sed vel velit vel velit eleifend tincidunt id id ipsum. Sed et erat nec magna bibendum bibendum. Duis quis est euismod, volutpat velit vel, interdum velit.</p>
  </section>
  <section id="services">
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: "LandIng",
  data () {
    return {
      users: [],
    }
  },
  created() {
    axios.get('api/registerusers')
      .then(response => {
        this.users = response.data.registerusers;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
    displayUserName(){
      if(this.users.length > 0){
        //Get the logged in user's name
        let loggedInUser = this.users.find(user => user.loggedIn === true);
        if(loggedInUser) return loggedInUser.first_name + ' ' + loggedInUser.last_name;
      }
    }
  }
};
</script>
<style>
.blue-button {
background-color: #167bff;
color: white;
border: none;
padding: 10px 20px;
font-size: 18px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.blue-button:hover {
background-color: #84b3f1;
}
</style>
