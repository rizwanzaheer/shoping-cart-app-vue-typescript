<template>
  <div class="product-container">
    <h1 class="text-left title">Products:</h1>

    <SearchBar placeholder="Search product..." />

    <!-- show availe product container start -->
    <div class="product-card">
      <div v-if="getAllProducts.length !== 0">
        <Card
          v-for="product in getAllProducts"
          cardType="product-view"
          :cardProductItem="product"
          :key="product.id"
        />
      </div>
      <div v-else>
        <h2>Sorry! Products are not Available...</h2>
      </div>
    </div>
    <!-- show availe product container ends -->

    <!-- bottom button -->
    <div class="cart-button-container">
      <BaseButton
        title="View Cart"
        :isItemCount="true"
        :itemCountVal="getCartTotalItemCount"
        @on-button-click="onViewCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ProductModule } from "@/store/modules/product";
import { CartModule } from "@/store/modules/cart";
import SearchBar from "@/components/SearchBar/index.vue";
import Card from "@/components/Card/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";

@Component({
  components: {
    SearchBar,
    Card,
    BaseButton,
  },
})
export default class Home extends Vue {
  get getAllProducts() {
    return ProductModule.products;
  }

  get getCartItems() {
    return CartModule.items;
  }

  get getCartTotalItemCount() {
    return CartModule.totalItems;
  }

  onViewCart() {
    this.$router.push({ name: "Cart" });
  }

  mounted() {
    ProductModule.fetchProducts();
  }
}
</script>



<style lang="scss">
@import "./src/styles/variables.scss";
.title {
  color: $title-color;
}
.product-container {
  // background: grey;
  width: 100%;
  padding: 0px 50px 5%;
  display: flex;
  flex-direction: column;
  .product-card {
    margin-top: 80px;
    min-height: calc(100vh - 450px);
  }

  .cart-button-container {
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
