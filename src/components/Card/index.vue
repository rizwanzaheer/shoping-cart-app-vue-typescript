<template>
  <div class="card-container">
    <!-- when the card type is product-view -->
    <div class="card-body" v-if="cardType === 'product-view'">
      <div class="img-container">
        <img
          :src="`${host}${cardProductItem.imagePath}`"
          :alt="cardProductItem.name"
        />
        <!-- {{ cardProductItem.imagePath }} -->
      </div>
      <div class="product-info-container">
        <h1 class="text-left">{{ cardProductItem.name }}</h1>
        <h3 class="text-left">€{{ cardProductItem.price }}.00</h3>
      </div>
      <div class="button-contain">
        <BaseButton
          title="Add to Cart"
          @on-button-click="(d) => onAddToCart(cardProductItem)"
        />
      </div>
    </div>
    <!-- when the card type is other then product-view -->
    <div class="card-body" v-else>
      <div class="item-count-container">{{ cardProductItem.itemCount }}</div>
      <div class="product-info-container">
        <h1 class="text-left">{{ cardProductItem.itemInfo.productName }}</h1>
        <h3 class="text-left">€{{ cardProductItem.itemInfo.price }}.00</h3>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CartModule } from "@/store/modules/cart";

import BaseButton from "../BaseButton/index.vue";

@Component({
  name: "Card",
  components: {
    BaseButton,
  },
})
export default class extends Vue {
  private host = process.env["VUE_APP_ROOT_API_URL"];
  @Prop({}) private cardType!: string;

  // @Prop({ default: 0 }) private productItemCount!: number;
  @Prop({}) private cardProductItem!: any;

  private onAddToCart(data: string) {
    console.log("onAddToCart data is: ", data);
    CartModule.addItemInCart(data);
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables.scss";

.card-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: row;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-body {
  display: flex;
  flex-direction: row;
  min-width: 0;
  width: 100%;
  word-wrap: break-word;
  padding: 10px;
  :nth-child(1) {
    min-width: 15%;
  }
  :nth-child(2) {
    min-width: 55%;
  }
  :nth-child(3) {
    min-width: 30%;
  }

  .img-container {
    max-height: 150px;
    padding: 10px 1px;

    img {
      width: inherit;
      height: 100%;
      background-size: cover;
    }
  }
  .button-contain {
    align-items: center;
    /* align-content: center; */
    justify-content: center;
    display: flex;
  }
  .product-info-container {
    :nth-child(1) {
      font-weight: 500;
      text-transform: capitalize;
      font-size: 28px;
      margin-top: 35px;
      margin-bottom: 0px;
    }
    :nth-child(2) {
      font-weight: 500;
      text-transform: capitalize;
      font-size: 26px;
      margin-top: 0px;
      // margin-bottom: 0px;
      color: $price-color;
    }
  }
}
@media screen and (max-width: 1024px) {
  .card-body {
    :nth-child(1) {
      min-width: 25%;
    }
    :nth-child(2) {
      min-width: 50%;
    }
    :nth-child(3) {
      min-width: 35%;
    }
  }
  .card-container {
    // background-color: blue;
  }
}
</style>
