<template>
  <div class="container">
    <form
      @submit.prevent="
        createTask({
          title: task.title,
          desc: task.description,
          id: task.id
        })
      "
    >
      <b-form-input
        v-model="task.title"
        placeholder="Enter your title"
        class="mb-3 mt-5"
        @input="checkField"
      ></b-form-input>
      <b-form-input
        v-model="task.description"
        placeholder="Enter description"
        @input="checkField"
      ></b-form-input>
      <div class="w-100 p-3 mb-1 text-center">
        <b-button
          variant="outline-primary"
          class="ml-0"
          type="submit"
          :disabled="active"
          >Create task</b-button
        >
      </div>
    </form>
    <div>
      <b-card
        class="mt-3"
        v-for="(todo, index) in todoList"
        :key="index"
        :title="todo.title"
      >
        <b-card-text>{{ todo.desc }}</b-card-text>
        <b-button
          @click="DELETE_TASK(todo.id)"
          class="ml-0"
          variant="danger"
          size="sm"
          >Delete</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { mapActions, mapState } from "vuex";

Vue.use(BootstrapVue);
export default {
  name: "TodoList",
  data() {
    return {
      task: {
        title: "",
        description: "",
        id: ""
      },

      active: true
    };
  },
  methods: {
    ...mapActions(["CREATE_TASK", "DELETE_TASK"]),
    createTask: function(task) {
      this.CREATE_TASK(task);
      this.task.title = "", this.task.description = "";
      this.active = true
    },
    checkField() {
      console.log(this.title);

      if (this.task.title && this.task.description) {
        this.active = false;
      } else {
        this.active = true
      }
    },
    sendForm() {
      if (this.active) {
        alert("Hello");
      }
    }
  },
  computed: {
    ...mapState(["todoList"])
  }
};
</script>
<style lang="scss">
.button--active {
  border: 1px solid red;
}
</style>
