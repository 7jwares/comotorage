


// Enregistrement global (souvent dans main.js)
// Utile pour les composants fréquemment utilisés comme des boutons génériques
Vue.component('my-button', {
  template: `
    <button @click="incrementCount">
      Count: {{ count }}
    </button>
  `,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  }
});


