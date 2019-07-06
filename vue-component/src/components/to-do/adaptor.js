import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import TodoApp from './to-do-app';
const ToDo = window.customElements.define('to-do-app', wrap(Vue, TodoApp));
export default ToDo;
