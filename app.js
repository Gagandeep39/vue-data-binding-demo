const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the Course',
      vueLink: 'https://vuejs.org/',
      courseGoalA: 'Learn Vue',
      courseGoalB: 'Master Vue',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

app.mount('#user-goal');
