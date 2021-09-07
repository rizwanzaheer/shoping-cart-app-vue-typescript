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

        <p class="text-left" v-if="dataType === 'single'">
          Not Available on
          {{ cardProductItem.notAvailableFrom | moment("dddd, MMM Do YY") }}
        </p>
        <p class="text-left" v-else>
          Not Available from:
          {{ cardProductItem.notAvailableFrom | moment("dddd, MMM Do YY") }}
          - to:
          {{ cardProductItem.notAvailableTo | moment("dddd, MMM Do YY") }}
        </p>
      </div>
      <div class="button-contain">
        <BaseButton
          title="Add to Cart"
          :disabled="!isProductAvailable || isHappenToday"
          @on-button-click="(d) => onAddToCart(cardProductItem)"
        />
      </div>
    </div>
    <!-- when the card type is other then product-view -->
    <div class="other-card-body" v-else>
      <div class="item-count-container">
        <h2>{{ cardProductItem.itemCount }}x</h2>
      </div>
      <div class="products-info-container">
        <h2 class="text-left title-style">
          {{ cardProductItem.itemInfo.name }}
        </h2>
        <div class="icon-container">
          <div class="icon-button-container-left">
            <Button
              iconName="fas fa-minus"
              :disabled="cardProductItem.itemCount < 2"
              @on-button-click="
                () => onItemRemoveClick(cardProductItem.itemInfo.id)
              "
            />
            <hr />
            <Button
              iconName="fas fa-plus"
              @on-button-click="
                () => onItemAddClick(cardProductItem.itemInfo.id)
              "
            />
          </div>
          <div class="icon-button-container-right">
            <i
              class="far fa-trash-alt"
              @click="() => onProductRemoveClick(cardProductItem.itemInfo.id)"
            ></i>
          </div>
        </div>
      </div>
      <div class="arrow-price-container">
        <div class="icon-contain">
          <i
            class="fas fa-chevron-right"
            style="font-size: 18px; font-weight: bold"
          ></i>
        </div>
        <div class="price-contain">
          <h3 class="">€{{ cardProductItem.itemInfo.price }}.00</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Vue, Prop, Emit } from "vue-property-decorator";
import { CartModule } from "@/store/modules/cart";

import Button from "../Button/index.vue";
import BaseButton from "../BaseButton/index.vue";

@Component({
  name: "Card",
  components: {
    BaseButton,
    Button,
  },
})
export default class extends Vue {
  private host = process.env["VUE_APP_ROOT_API_URL"];
  private isProductAvailable: boolean = true;
  private dataType: string = "single";
  private isHappenToday: boolean = false;
  private showAvailableAlert: boolean = false;

  @Prop({}) private cardType!: string;

  // @Prop({ default: 0 }) private productItemCount!: number;
  @Prop({}) private cardProductItem!: any;

  private onAddToCart(data: string) {
    CartModule.addItemInCart(data);
  }
  @Emit()
  public onItemRemoveClick(itemId: string) {
    // console.log("onItemRemoveClick itemId is: ", itemId);
    return;
  }

  @Emit()
  public onItemAddClick(itemId: string) {
    // console.log("onItemAddClick itemId is: ", itemId);
    return;
  }
  @Emit()
  public onProductRemoveClick(itemId: string) {
    console.log("onProductRemoveClick id is: ", itemId);
    return;
  }

  getDates() {
    if (
      this.cardProductItem.notAvailableFrom !== null &&
      this.cardProductItem.notAvailableTo !== null
    ) {
      this.dataType = "double";
      console.log("double date Available");

      const startCheckDateDiff = Vue.moment(new Date()).diff(
        Vue.moment(this.cardProductItem.notAvailableFrom),
        "days"
      );
      const endCheckDateDiff = Vue.moment(new Date()).diff(
        Vue.moment(this.cardProductItem.notAvailableTo),
        "days"
      );
      console.log("this.cardProductItem is: ", this.cardProductItem.name);
      console.log(" startCheckDateDiff is: ", startCheckDateDiff);
      console.log("endCheckDateDiff is: ", endCheckDateDiff);
      if (startCheckDateDiff > 0 && endCheckDateDiff < 0) {
        this.isProductAvailable = false;
        this.showAvailableAlert = true;
      }
    } else {
      console.log("single date Available");
      const checkDateDiff = Vue.moment(new Date()).diff(
        Vue.moment(this.cardProductItem.notAvailableFrom),
        "days"
      );

      if (checkDateDiff === 0) {
        this.isProductAvailable = false;
        // this.showAvailableAlert = true;
      }
      console.log("this.cardProductItem is: ", this.cardProductItem.name);
      console.log("checkDateDiff is: ", checkDateDiff);
    }
  }
  checkProductAvailability() {
    // console.log(
    //   "this.moment is: ",
    //   Vue.moment(new Date()).diff(Vue.moment(new Date() + 1), "days")
    // );
    // this.dataType === "single"
    //   ? (this.isProductAvailable = false)
    //   : (this.isProductAvailable = true);
  }

  mounted() {
    this.getDates();
    this.checkProductAvailability();
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

  .products-info-container {
    :nth-child(1) {
      font-weight: 500;
      text-transform: capitalize;
      font-size: 28px;
      // margin-top: 35px;
      // margin-bottom: 0px;
    }
  }
}
.other-card-body {
  display: flex;
  flex-direction: row;
  min-width: 0;
  width: 100%;
  word-wrap: break-word;
  padding: 10px;
  justify-content: space-between;
  .item-count-container {
    min-width: 15%;
    h2 {
      padding: 0;
      margin-top: 10px;
      color: $button-bg;
    }
  }
  // :nth-child(2) {
  //   min-width: 55%;
  // }
  .arrow-price-container {
    min-width: 30%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: center;
    .icon-contain,
    .price-contain {
      min-height: 50%;
      display: flex;
      align-items: center;
      margin-right: 20px;
      color: $input-text-bg;
    }
    .icon-contain {
      color: $right-arrow-color;
    }
    .price-contain {
      color: $price-color;
    }
  }

  .products-info-container {
    width: 12254px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .icon-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .icon-button-container-left {
      display: inherit;
      background: $icon-button-bg;
      border-radius: 5px;
      hr {
        color: $input-text-title-color;
      }
    }
    .icon-button-container-right {
      font-size: 22px;
      margin: 0px 15px;
      cursor: pointer;
    }
  }

  // .button-contain {
  //   align-items: center;
  //   /* align-content: center; */
  //   justify-content: center;
  //   display: flex;
  // }
  // .product-info-container {
  //   :nth-child(1) {
  //     font-weight: 500;
  //     text-transform: capitalize;
  //     font-size: 28px;
  //     margin-top: 35px;
  //     margin-bottom: 0px;
  //   }
  //   :nth-child(2) {
  //     font-weight: 500;
  //     text-transform: capitalize;
  //     font-size: 26px;
  //     margin-top: 0px;
  //     // margin-bottom: 0px;
  //     color: $price-color;
  //   }
  // }

  // .products-info-container {
  //   :nth-child(1) {
  //     font-weight: 500;
  //     text-transform: capitalize;
  //     font-size: 28px;
  //     // margin-top: 35px;
  //     // margin-bottom: 0px;
  //   }
  // }

  .title-style {
    margin-top: 10px;
    margin-bottom: 8px;
    text-transform: capitalize;
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
