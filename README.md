# Basics

- [Basics](#basics)
  - [Data Binding](#data-binding)
    - [Interpolation](#interpolation)
    - [v-bind Directive](#v-bind-directive)
  - [Methods](#methods)

## Data Binding

### Interpolation

- {{ var_name }} Interpolation
- Any variable defined inside data can be displayed using interpolation syntax
- Only available **between** opening and closing tags
- `data` is a reserved name

```js
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Learn Vue',
    };
  },
});
```

### v-bind Directive

- Allows modifying properties of HTML elements
- Ued inside tags
- eg. `<a v-bind:href="vueLink">Vue</a>`

## Methods

- Actions when an event is executed
- `method` is a reserved name

```js
const app = Vue.createApp({
  data() {
    return {
      // Variables
    };
  },
  methods: {
    // Your methods
  },
});

```

