<template>
  <div class="checkout-container">
    <h1 class="text-left title">Checkout:</h1>

    <!-- Your Deatils card start -->
    <div class="user-detail-card">
      <h1 class="text-left title">Your details:</h1>

      <div class="user-form-container">
        <Input
          label="First Name*"
          placeholder="first name"
          type="text"
          @on-input-change="onChangeFirstName"
        />
        <Input
          label="Last Name*"
          placeholder="your last name"
          type="text"
          @on-input-change="onChangeLastName"
        />
        <Input
          label="Email*"
          placeholder="your email"
          type="email"
          @on-input-change="onChangeEmail"
        />

        <div class="calender-container">
          <h1 class="text-left title">Delivery:</h1>
          <Input
            label="Delivery Date*"
            placeholder="Choose a date"
            type="date"
            @on-input-change="onChangeDeliverDate"
          />
        </div>
      </div>
    </div>
    <!-- Your Deatils card ends -->

    <!-- buttom button -->
    <div class="checkout-button-container">
      <BaseButton title="Place Order" @on-button-click="onPlaceOrder" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CartModule } from "@/store/modules/cart";
import { OrderModule } from "@/store/modules/orders";
import Card from "@/components/Card/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";
import Input from "@/components/Input/index.vue";

@Component({
  components: {
    Card,
    BaseButton,
    Input,
  },
})
export default class Checkout extends Vue {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private deliveryDate: string = "";
  get getCartItems() {
    return CartModule.items;
  }
  get getCartTotalItems() {
    return CartModule.totalItems;
  }
  private onChangeFirstName(e: string) {
    this.firstName = e;
  }
  private onChangeLastName(e: string) {
    this.lastName = e;
  }
  private onChangeEmail(e: string) {
    this.email = e;
  }
  private onChangeDeliverDate(e: string) {
    this.deliveryDate = e;
  }
  mounted() {
    OrderModule.getAllOrder();
  }

  public async onPlaceOrder() {
    try {
      if (this.firstName === "") {
        alert("name is required!");
        return;
      }
      if (this.lastName === "") {
        alert("last name is required!");
        return;
      }
      if (this.email === "") {
        alert("email is required!");
        return;
      }
      if (this.deliveryDate === "") {
        alert("delivery date is required!");
        return;
      }

      const orderProducts = CartModule.items.map((data) => {
        return {
          productId: data.itemInfo?.id,
          productQuantity: data.itemCount,
        };
      });

      const params = {
        deliverAt: new Date(this.deliveryDate).toISOString(),
        _orderProducts: orderProducts,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      await OrderModule.placeOrder(params);

      this.$router.push({ name: "Order" });
    } catch (e) {
      console.log("on place order e is: ", e);
    }
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
  .calender-container {
    margin-top: 50px;
    label {
      color: $button-bg;
    }
  }
}
</style>
