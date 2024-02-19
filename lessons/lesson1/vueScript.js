new Vue({
  el: "#app",
  data: {
    message: "Hello VUE",
    counter: 0,
    x: 0,
    y: 0,
    bigText: `<span>VHTML <a href="#">Info</a></span>`,
  },
  methods: {
    mouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    changeText() {
      this.message = "Text click";
    },
    // sayHello() {
    //   this.message = "new message";
    //   return this.message;
    // },
    increase(step, event) {
      this.counter += step;
      console.log(event);
    },
  },
});
