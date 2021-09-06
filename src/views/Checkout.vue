<template>
  <div class="checkout-container">
    <h1 class="text-left title">Checkout:</h1>

    <div class="user-detail-card">
      <div v-if="getCartTotalItems !== 0">
        <Card
          v-for="item in getCartItems"
          :cardProductItem="item"
          :key="item.itemInfo.id"
        />
      </div>
      <div v-else>
        <h2>Oohhoo... Cart is empty!</h2>
      </div>
    </div>
    <div class="checkout-button-container">
      <BaseButton title="Place Order" @on-button-click="onPlaceOrder" />
    </div>
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
export default class Checkout extends Vue {
  get getCartItems() {
    return CartModule.items;
  }
  get getCartTotalItems() {
    return CartModule.totalItems;
  }

  onPlaceOrder() {
    console.log("onPlaceOrder");
    this.$router.push({ name: "Order" });
  }
}
</script>



<style lang="scss">
@import "./src/styles/variables.scss";

.checkout-container {
  width: 100%;
  padding: 0px 50px 5%;
  display: flex;
  flex-direction: column;

  .user-detail-card {
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
