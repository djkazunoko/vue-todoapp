import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let id = 0;
const STORAGE_KEY = "vue-todoapp";

createApp({
  data() {
    return {
      newTodo: "",
      todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
      editedTodo: null,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      this.editedTodo = null;
      todo.text = todo.text.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
      if (!todo.text) {
        this.removeTodo(todo);
      }
    },
  },
}).mount("#app");
