<template>
  <div class="search-bar-container">
    <div class="input-group">
      <div :class="['input-group-prepend', 'input-group-prepend-icon-push']">
        <div class="input-group-text"><i class="fas fa-search"></i></div>
      </div>
      <input
        v-model="searchText"
        type="text"
        :class="['from-control', 'input-text-style', 'push-right']"
        :placeholder="placeholder"
      />
      <div class="input-group-append" v-if="searchText">
        <div class="input-group-text" @click="clearSearch">
          <i class="fas fa-times" />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { ProductModule } from "@/store/modules/product";
import debounce from "lodash-es/debounce";

@Component({
  name: "SearchBar",
})
export default class extends Vue {
  private searchText = "";
  @Prop({ default: "Search ...." }) private placeholder!: string;

  created() {
    this.onDebouncedVariable = debounce(this.onDebouncedVariable, 500);
  }

  @Watch("searchText")
  onVariable() {
    this.onDebouncedVariable();
  }

  private onDebouncedVariable() {
    ProductModule.searchItem(this.searchText);
  }

  clearSearch() {
    this.searchText = "";
    ProductModule.searchItem("");
  }
}
</script>




<style lang="scss">
@import "./src/styles/variables.scss";

.search-bar-container {
  display: flex;
  flex-direction: column;
  label {
    font-size: 25px;
    color: $input-text-title-color;
  }
}

input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-color: #ada18d;
  color: $input-text-color;
  background-color: $input-text-bg;
  overflow: visible;
}

input[type="text" i] {
  padding: 5px ​10px;
  width: 90%;
  height: inherit;
  font-size: 1.5rem;
  font-weight: bold;
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

  // color: rgb(255, 255, 249);
  background-color: rgb(36, 39, 41);
  border-color: rgb(90, 98, 102);

  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  // color: #495057;
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
  height: 55px;
}
.input-group-prepend,
.input-group-append {
  margin-right: -1px;
  display: flex;
}

.input-group-prepend-icon-push {
  position: absolute;
  left: 12px;
  z-index: 1;
  top: 8px;
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
}

.input-group-append {
  position: absolute;
  right: 10px;
  top: 8px;
}

.input-text-style {
  width: 250px;
  border-radius: 5px;
  // background: $darkGray;
  border: 1px solid #ccc;
  outline: none;
  padding: 6px;
}
.fas {
  font-size: 28px;
  font-weight: lighter;
  cursor: pointer;
}
.fa-search {
  font-weight: 500;
}

.input-text-style:focus {
  border: 1px solid #56b4ef;
  box-shadow: 0px 0px 3px 1px #c8def0;
}
.push-right {
  padding-left: 60px !important;
}
</style>
