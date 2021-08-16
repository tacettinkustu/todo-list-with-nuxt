<template>
  <div class="row">
    <Todo v-for="index in 10" :key="index" />
  </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  components: {
    Todo,
  },
}
</script>

<style>
</style>