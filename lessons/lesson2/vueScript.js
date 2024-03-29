new Vue({
  el: "#app",
  data: {
    likeToggle: false,
    data: [
      {
        title: "title text",
        text: "description text info element",
      },
      {
        title: "new title text",
        text: "new description text info element",
      },
    ],
    // listItems: [1, 2, 4],
    // blockWidth: 100,
    // blockColor: "yellow",
    // firstNum: 0,
    // secondNum: 0,
    // result: 0,
    // modelData: "",
    // linkHref: "product.html",
    // imgPhoto: "image.jpg",
    // styleBlock: {
    //   backgroundColor: "green",
    //   color: "red",
    // },
  },
  methods: {
    headingText() {
      if (this.modelData === "") {
        this.modelData = "Заголовок для блока";
      }
    },
    send() {
      console.log("Send data in input");
    },

    plus() {
      this.result = this.firstNum + this.secondNum;
    },
    minus() {
      this.result = this.firstNum - this.secondNum;
    },
    mult() {
      this.result = this.firstNum * this.secondNum;
    },
    div() {
      this.result = this.firstNum / this.secondNum;
    },
    addItem() {
      this.listItems.push(this.newList);
    },
  },
  computed: {
    change() {
      return {
        width: `${this.blockWidth}px`,
        height: `${this.blockWidth}px`,
        backgroundColor: this.blockColor,
      };
    },
  },
});
