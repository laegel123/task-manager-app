<template>
  <div :class="{ dark: themeStore.isDarkMode}">
    <button @click="toggleDarkMode">
      {{ themeStore.isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>

    <ul>
      <li>
        <router-link to="/">Task page</router-link>
      </li>
      <li>
        <router-link to="/about">About page</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { useTaskStore } from './store/taskStore'
import { useThemeStore } from './store/themeStore'

export default {
  name:"App",
  data(){
    return{
      themeStore: useThemeStore(),
    }
  },
  methods:{
    toggleDarkMode() {
      this.themeStore.toggleDarkMode();
    }
  },
  created() {
    const taskStore = useTaskStore(); 
    taskStore.loadTaskData();         
  }
}
</script>

<style>
  body {
    background-color: white;
    color: black;
  }

  .dark {
    background-color: #333;
    color: white;
  }
</style>