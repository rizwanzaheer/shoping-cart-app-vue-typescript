<template>
  <div class="product-container">
    <h1 class="text-left mgl20">Products:</h1>
    <SearchBar />
    <code>
      <pre>
      {{ getAllProducts }}
      </pre>
    </code>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ProductModule } from "@/store/modules/product";
import { CartModule } from "@/store/modules/cart";
import SearchBar from "@/components/SearchBar/index.vue";

@Component({
  components: {
    SearchBar,
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
.product-container {
  background: grey;
  width: 100%;
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
}
</style>
