<template>
  <div class="container main-container pt-5">
    <h3 class="text-center">ToDo App | Nuxt.js</h3>
    <TodoForm @addTodoEvent="addTodo($event)" />
    <h3 class="text-center mt-5 mb-3">TODO List</h3>
    <Todos
      v-if="todos.length !== 0"
      :todos="todos"
      @updateTodoEvent="showUpdateContainer($event)"
      @deleteTodoEvent="deleteTodo($event)"
    />
    <Alert v-else />
    <UpdateTodo
      @updateTodoEvent="updateTodo($event)"
      :todo="toUpdateTodo"
      :class="{ 'show-update-container': showUpdate }"
      @hideUpdateTodoEvent="showUpdate = false"
    />
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
  data() {
    return {
      showUpdate: false,
      toUpdateTodo: null,
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch('addTodo', todo)
    },
    deleteTodo(todo) {
      this.$store.dispatch('deleteTodo', todo)
    },
    showUpdateContainer(todo) {
      this.showUpdate = true
      this.toUpdateTodo = todo
    },
    updateTodo(updatedTodo) {
      this.showUpdate = false
      this.$store.dispatch('updateTodo', updatedTodo)
    },
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    },
  },
}
</script>
