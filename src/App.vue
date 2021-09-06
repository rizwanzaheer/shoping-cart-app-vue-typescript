<template>
  <div id="app">
    <div id="nav">
      <label class="brand-logo" @click="onBrandLogoClick"> Ordering App </label>
      <div>
        <router-link to="/">Product</router-link> |
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "App",
})
export default class extends Vue {
  private onBrandLogoClick() {
    this.$router.push({ name: "Home" });
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -21px;
  margin-right: -8px;
  margin-bottom: -14px;
  margin-left: -8px;
}

#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: $lightGray;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .brand-logo {
    cursor: pointer;
    font-size: 19px;
  }
}
</style>
