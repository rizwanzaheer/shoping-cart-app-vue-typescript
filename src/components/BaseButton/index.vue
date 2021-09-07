<template>
  <div class="button-container">
    <button @click="onButtonClick" :disabled="disabled">
      <span>
        {{ title }}
      </span>
      <div class="icon-container" v-if="isItemCount">
        <!-- <i class="fas fa-search" /> -->
        <span>{{ itemCountVal }}</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "BaseButton",
})
export default class extends Vue {
  @Prop({ default: "Click me!" }) private title!: string;
  @Prop({ default: false }) private isItemCount!: boolean;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: 0 }) private itemCountVal!: number;

  @Emit()
  onButtonClick() {
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
    display: flex;
    span {
      flex: 5;
    }
    .icon-container {
      // display: flex;
      // justify-content: flex-end;
    }
  }
  button:disabled {
    // background: transparent;
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.8;
    text-decoration: none;
    // i {
    //   cursor: not-allowed;
    // }
  }
}
</style>
