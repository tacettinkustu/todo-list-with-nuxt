<template>
  <div class="row">
    <div class="col-md-6 offset-3 mt-5 d-flex">
      <input
        v-model="todoText"
        type="text"
        class="form-control form-control-lg mr-1"
        ref="todoTextInput"
      />
      <button @click="addTodo" class="btn btn-outline-dark">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: '',
    }
  },
  methods: {
    addTodo() {
      if (this.todoText !== '') {
        this.$emit('addTodoEvent', this.todoText)
      }
      this.todoText = ''
      this.$nextTick(() => this.$refs.todoTextInput.focus())
    },
  },
}
</script>

<style>
</style>