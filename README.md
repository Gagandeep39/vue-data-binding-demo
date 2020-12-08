# Basics

- [Basics](#basics)
  - [Data Binding](#data-binding)
    - [Interpolation](#interpolation)
    - [v-bind Directive](#v-bind-directive)
  - [Methods](#methods)
  - [Scope](#scope)

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
- They are accessed as `<p>{{ outputGoal() }}</p>`

```js
const app = Vue.createApp({
  data() {
    return {
      // Variables
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return 'Learn Vue';
      else return 'Master Vue';
    },
  },
});
```

## Scope

- Variables declared inside `data` cannot be accsed from function directly
- We are required to use this operator
- Vue takes all varables inside `data` and methods inside `method` and merge them in a single class, thats why we can use this operator
