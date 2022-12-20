import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let id = 0;

createApp({
  data() {
    return {
      newTodo: "",
      todos: [],
      editedTodo: null,
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
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      this.editedTodo = null;
      todo.text = todo.text.trim();
      if (!todo.text) {
        this.removeTodo(todo);
      }
    },
  },
}).mount("#app");
