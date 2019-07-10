<script>
	import TodoApp from './component/to-do-app.js';
import { register } from 'svelte-custom-elements';

const todos = [
        { text: "Native WC", checked: true },
        { text: "React WC", checked: false },
        { text: "VueJS WC", checked: false },
        { text: "Svelte WC", checked: false },
        { text: "Angular WC", checked: false }
      ];
register( 'to-do-app', TodoApp, [todos] );

//document.body.innerHTML = '<my-component></my-component>';
</script>
<to-do-app todos></to-do-app>