import MyHeader from "./components/MyHeader.vue";

export default {
  install: (app, options) => {
    app.component("my-header", MyHeader);
    app.directive("font-size", (el, binding, vnode) => {
      var size = 16;

      switch (binding.arg) {
        case "small":
          size = options.fontSize.small;
          break;
        case "large":
          size = options.fontSize.large;
          break;
        default:
          size = options.fontSize.medium;
          break;
      }

      el.style.fontSize = size + "px";
    });

    app.mixin({
      data() {
        return {
          featuredLink: "https://learnvue.co",
        };
      },
      created() {
        console.log("Printing from created.");
      },
    });
  },
};
