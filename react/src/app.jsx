import * as React from "react";
import { TodoApp } from "./web-component/to-do-app";

customElements.define("to-do-app", TodoApp);

const todos = [
  { text: "Native WC", checked: true },
  { text: "React WC", checked: false },
  { text: "VueJS WC", checked: false },
  { text: "Svelte WC", checked: false },
  { text: "Angular WC", checked: false }
];
export const App = () => <to-do-app todos={todos} />;
