<template>
  <div class="button-container">
    <button @click="onButtonClick">
      {{ title }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "Button",
})
export default class extends Vue {
  @Prop({ default: "Click me!" }) private title!: string;

  @Emit()
  onButtonClick() {
    console.log("click working");
    return;
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables.scss";
</style>
