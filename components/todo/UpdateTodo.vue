<template>
  <div
    class="
      update-container
      container-fluid
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <div class="card shadow pt-2 pb-2" style="width: 30rem">
      <div class="card-body">
        <h5 class="card-title">Update Todo</h5>
        <input
          type="text"
          class="form-control mt-3 mb-3"
          value="This value will be changed..."
          v-model="loadedTodo.text"
        />
        <a
          @click="$emit('hideUpdateTodoEvent', true)"
          href="#"
          class="card-link btn btn-sm btn-outline-danger"
          >Cancel</a
        >
        <a
          @click="$emit('updateTodoEvent', loadedTodo)"
          href="#"
          class="card-link btn btn-sm btn-outline-warning"
          >Update</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  computed: {
    loadedTodo() {
      return this.todo ? { ...this.todo } : { _id: null, text: '' }
    },
  },
}
</script>

<style>
</style>