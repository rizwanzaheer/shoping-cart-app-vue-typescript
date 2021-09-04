<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text"><i class="fas fa-search"></i></div>
    </div>
    <input
      @input="searchItem($event.target.value)"
      type="text"
      class="from-control"
    />
    <div class="input-group-append">
      <div class="input-group-text"><i class="fas fa-times"></i></div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ProductModule } from "@/store/modules/product";

@Component({
  name: "SearchBar",
})
export default class extends Vue {
  private searchItem(e: string) {
    ProductModule.searchItem(e);
  }
}
</script>




<style lang="scss">
@import "./src/styles/variables.scss";
input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-color: #ada18d;
  color: #ffffff;
  background-color: #242729;
  overflow: visible;
}

input[type="text" i] {
  padding: 1px 2px;
  width: 90%;
}

.from-control {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;

  color: rgb(255, 255, 249);
  background-color: rgb(36, 39, 41);
  border-color: rgb(90, 98, 102);

  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: $input-text-bg;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group-prepend,
.input-group-append {
  margin-right: -1px;
  display: flex;
}
.input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.5rem 1rem;
  font-size: 4.25rem;
  line-height: 4.5;
  border-radius: 0.3rem;
  // color: white;
  // background-color: rgb(53, 57, 59);
  // border-color: rgb(90, 98, 102);

  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  // background-color: #e9ecef;
  // border: 1px solid #ced4da;
  border-radius: 0.25rem;
  position: absolute;
  margin-left: -40px;
  margin-top: 4px;
}

// .input-group-append{
//   margin-left: -1px;
// }
</style>
