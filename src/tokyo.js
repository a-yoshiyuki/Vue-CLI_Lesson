export const tokyo = {
  data () {
    return {
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a great city"
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log("created in Mixin");
  }
};