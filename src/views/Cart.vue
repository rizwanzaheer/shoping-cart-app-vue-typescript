<template>
  <div class="cart-container">
    <h1 class="text-left title">Cart:</h1>

    <div class="product-card">
      <Card
        v-for="item in getCartItems"
        :cardProductItem="item"
        :key="item.itemInfo.id"
      />

      <!-- <code>
      <pre>
      {{ getAllProducts }}
      </pre>
    </code>
    <code>
      <pre>
      {{ getCartItems }}
      </pre>
    </code> -->
    </div>

    <code>
      <pre>
        {{ getCartItems }}
      </pre>
    </code>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CartModule } from "@/store/modules/cart";
import Card from "@/components/Card/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";

@Component({
  components: {
    Card,
    BaseButton,
  },
})
export default class Cart extends Vue {
  get getCartItems() {
    return CartModule.items;
  }
}
</script>



<style lang="scss">
@import "./src/styles/variables.scss";

.cart-container {
  width: 100%;
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
}
</style>
