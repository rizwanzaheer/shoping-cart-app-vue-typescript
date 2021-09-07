<template>
  <button class="btn" @click="onButtonClick" :disabled="disabled">
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
  @Prop({ default: false }) private disabled!: boolean;

  @Emit()
  onButtonClick() {
    return;
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables.scss";

.btn {
  background-color: $icon-button-bg;
  border: none;
  color: $btn-icon-color;
  padding: 6px 20px;
  font-size: 10px;
  cursor: pointer;
  border-radius: 5px;
  height: 36px;
  .fas {
    font-size: 18px;
  }
}

button:disabled {
  // background: transparent;
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
  i {
    cursor: not-allowed;
  }
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: $button-bg;
}
</style>
