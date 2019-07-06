import reactify from 'skatejs-react-integration';
import { TodoApp } from './to-do-app';

// Create your constructor.
class ToDoComponent extends TodoApp {}

// Define your custom element.
window.customElements.define('to-do', ToDoComponent);

// Reactify it!
export const ToDo = reactify(ToDoComponent);
