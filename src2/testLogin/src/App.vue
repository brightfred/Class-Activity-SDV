<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logoutUser" v-if="isAuthenticated">Logout</button>
    <img src="https://images.phylopic.org/images/9b87d61c-900c-4ad2-8abb-56a7b30bfc95/vector.svg" alt="Phylopic Image" class="phylopic-image"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

const title = ref('Welcome to the App');
const message = ref('Please log in to continue.');

const login = () => {
  loginWithRedirect();
};

const logoutUser = () => {
  logout({ returnTo: window.location.origin });
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button + button {
  margin-left: 1rem;
}

.phylopic-image {
  margin-top: 2rem;
  width: 100px;
  height: 100px;
  filter: invert(39%) sepia(99%) saturate(5724%) hue-rotate(193deg) brightness(94%) contrast(105%);
  transition: filter 0.3s ease;
}

.phylopic-image:hover {
  filter: invert(09%) sepia(81%) saturate(4713%) hue-rotate(193deg) brightness(94%) contrast(105%);
}
</style>