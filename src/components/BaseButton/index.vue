<template>
  <div class="button-container">
    <button @click="onButtonClick">{{ title }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "BaseButton",
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

.button-container {
  button {
    padding: 15px 20px;
    min-width: 160px !important;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0.7rem;
    font-size: 24px;
    color: $button-bg;
    text-transform: capitalize;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background: blue;
    }
  }
}
</style>
