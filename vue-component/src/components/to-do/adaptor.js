import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import Todo from "./to-do-app";
export default window.customElements.define("to-do-app", wrap(Vue, Todo));
