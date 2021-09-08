<template>
  <div class="checkout-container">
    <!-- view oder information container start -->
    <div class="order-info-container">
      <h1 class="title">Order #{{ getOrder.orderNumber }}</h1>
      <h1 class="order-sub-title">has been placed</h1>
      <router-link to="view-order">
        <span class="order-view-link">View Order</span>
      </router-link>
    </div>
    <!-- view oder information container ends -->

    <!-- Place new oder bottom button -->
    <div class="checkout-button-container">
      <BaseButton title="New Order" @on-button-click="onNewOrder" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CartModule } from "@/store/modules/cart";
import { OrderModule } from "@/store/modules/orders";
import Card from "@/components/Card/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";

@Component({
  components: {
    Card,
    BaseButton,
  },
})
export default class Order extends Vue {
  get getCartItems() {
    return CartModule.items;
  }
  get getOrder() {
    return OrderModule.order;
  }
  get getCartTotalItems() {
    return CartModule.totalItems;
  }

  onNewOrder() {
    console.log("onContinueToCheckout");

    CartModule.resetCart();

    this.$router.push({ name: "Home" });
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
  justify-content: space-between;
  min-height: 93.5vh;

  .order-info-container {
    .title {
      font-size: 70px;
    }
    .order-sub-title {
      margin-top: -50px;
      color: $input-text-title-color;
      margin-bottom: 60px;
    }
    .order-view-link {
      font-size: 32px;
      margin-top: 60px;
      font-weight: bold;
      color: $button-bg;
      cursor: pointer;
    }
  }
  // .product-card {
  //   min-height: calc(100vh - 270px);
  // }
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
