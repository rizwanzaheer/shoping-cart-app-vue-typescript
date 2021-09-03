<template>
  <div class="home">
    <h1>Products:</h1>
    <input @input="searchItem($event.target.value)" />
    <code>
      <pre>

      {{ getAllProducts }}
      </pre>
    </code>

    Cart Items:
    <code>
      <pre>

      {{ getCartItems }}
      </pre>
    </code>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ProductModule } from "@/store/modules/product";
import { CartModule } from "@/store/modules/cart";

@Component({
  components: {},
})
export default class Home extends Vue {
  get getAllProducts() {
    return ProductModule.products;
  }

  get getCartItems() {
    return CartModule.items;
  }

  private searchItem(e: string) {
    console.log("update user name e is: ", e);
    ProductModule.searchItem(e);
  }

  mounted() {
    console.log("hoe is calling ");
    // ProductModule.fetchProducts();
    CartModule.addItemInCart({
      itemInfo: {
        productId: Math.random(),
        productName: "Coca Cola",
        price: "124",
        imagePath: "file/images",
        imageName: "CocaCola.jpg",
        notAvailableFrom: new Date(),
        notAvailableTo: new Date(),
      },
      itemCount: 12,
    });
  }
}
</script>
