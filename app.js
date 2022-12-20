import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let id = 0;

createApp({
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
}).mount("#app");
