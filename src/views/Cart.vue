<template>
  <div class="cart-container">
    <h1 class="text-left title">Cart:</h1>

    <!-- render products in items view start  -->
    <div class="product-card">
      <div v-if="getCartTotalItems !== 0">
        <Card
          v-for="item in getCartItems"
          :cardProductItem="item"
          :key="item.itemInfo.id"
          @on-item-add-click="onItemAddClick"
          @on-item-remove-click="onItemRemoveClick"
          @on-product-remove-click="onProductRemoveClick"
        />
      </div>
      <div v-else>
        <h2>Oohhoo... Cart is empty!</h2>
      </div>
    </div>
    <!-- render products in items view ends  -->

    <!-- Bottom button container start -->
    <div class="checkout-button-container">
      <BaseButton
        title="Continue to Checkout"
        @on-button-click="onContinueToCheckout"
        v-if="getCartTotalItems !== 0"
      />
      <BaseButton v-else title="Go Home" @on-button-click="backToHome" />
    </div>
    <!-- Bottom button container ends -->
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
  get getCartTotalItems() {
    return CartModule.totalItems;
  }

  onContinueToCheckout() {
    this.$router.push({ name: "Checkout" });
  }
  backToHome() {
    this.$router.push({ name: "Home" });
  }

  public onItemAddClick(itemId: string) {
    CartModule.addMoreItem(itemId);
  }
  public onItemRemoveClick(itemId: string) {
    CartModule.removeItemFromCart(itemId);
  }
  public onProductRemoveClick(itemId: string) {
    CartModule.removeProductFromCart(itemId);
  }
}
</script>



<style lang="scss">
@import "./src/styles/variables.scss";

.title {
  color: $title-color;
}
.cart-container {
  width: 100%;
  padding: 0px 50px 5%;
  display: flex;
  flex-direction: column;

  .product-card {
    min-height: calc(100vh - 315px);
  }
  .checkout-button-container {
    // position: absolute;
    // bottom: 0;
    margin-top: 30px;
    .button-container button {
      background-color: $button-bg;
      color: $white;
      width: 100%;
    }
  }
}
</style>
