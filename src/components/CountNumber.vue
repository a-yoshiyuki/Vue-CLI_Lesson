<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{subTitle | upperCase | lowerCase }}</p>
  </div>
</template>

<script type="text/javascript" src="">
import {tokyo} from "@/tokyo";

export default {
  mixins: [tokyo],
  created() {
    console.log("created in component");
  }
};
</script>