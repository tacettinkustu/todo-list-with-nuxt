<template>
  <div class="container main-container pt-5">
    <h3 class="text-center">ToDo App | Nuxt.js</h3>
    <TodoForm @addTodoEvent="addTodo($event)" />
    <h3 class="text-center mt-5 mb-3">TODO List</h3>
    <Todos
      v-if="todos.length !== 0"
      :todos="todos"
      @deleteTodoEvent="deleteTodo($event)"
    />
    <Alert v-else />
  </div>
</template>

<script>
import Todos from '../components/todo/Todos.vue'
import TodoForm from '../components/todo/TodoForm.vue'
import UpdateTodo from '../components/todo/UpdateTodo.vue'
import Alert from '../components/todo/Alert.vue'
export default {
  components: {
    Todos,
    TodoForm,
    UpdateTodo,
    Alert,
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch('addTodo', todo)
    },
    deleteTodo(todo) {
      this.$store.dispatch('deleteTodo', todo)
    },
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    },
  },
}
</script>
