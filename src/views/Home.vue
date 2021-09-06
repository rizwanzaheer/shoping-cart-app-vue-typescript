<template>
  <div class="product-container">
    <h1 class="text-left title">Products:</h1>
    <SearchBar placeholder="Search product..." />

    <div class="product-card">
      <Card
        v-for="product in getAllProducts"
        cardType="product-view"
        :cardProductItem="product"
        :key="product.id"
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

    <div class="cart-button-container">
      <router-link to="/cart">
        <BaseButton title="View Cart" @on-button-click="onViewCart" />
      </router-link>
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
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
  .product-card {
    margin-top: 5rem;
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
