<template>
    <section id="hero">
      <h1>Welcome to our Landing Page</h1>
      <p>Learn more about our company and services</p>
      <button class="blue-button">Learn More</button>
      <br>
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
    export default {
        name: "LandIng",
    }
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