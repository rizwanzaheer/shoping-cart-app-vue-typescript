<template>
  <button class="btn" @click="onButtonClick">
    <i :class="iconName"></i>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "Button",
})
export default class extends Vue {
  @Prop({ default: "fas fa-plus" }) private iconName!: string;

  @Emit()
  onButtonClick() {
    console.log("click working");
    return;
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables.scss";

.btn {
  background-color: $icon-button-bg; /* Blue background */
  border: none; /* Remove borders */
  color: $btn-icon-color; /* White text */
  padding: 6px 20px; /* Some padding */
  font-size: 10px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-radius: 5px;
  .fas {
    font-size: 18px;
  }
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: $button-bg;
}
</style>
