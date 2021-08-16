<template>
  <div class="row">
    <Todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo._id"
      @updateTodoEvent="$emit('updateTodoEvent', $event)"
      @deleteTodoEvent="$emit('deleteTodoEvent', $event)"
    />
  </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>