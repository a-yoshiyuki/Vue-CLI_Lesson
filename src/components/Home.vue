<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">{{tmpData}}</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{subTitle | upperCase | lowerCase }}</p>
    <CountNumber></CountNumber>
  </div>
</template>

<script type="text/javascript" src="">
import CountNumber from "./CountNumber.vue";
import {tokyo} from "@/tokyo";

export default {
  mixins: [tokyo],
  data () {
    return {
      tmpData: "hello",
    };
  },
  components: {
    CountNumber
  },
  directives: {
    border (el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>