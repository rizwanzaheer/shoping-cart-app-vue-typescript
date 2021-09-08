import store from '@/store';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
  MutationAction,
} from 'vuex-module-decorators';
import HttpService from '@/service/HttpService';

export interface IProductView {
  id: number;
  productName?: string;
  price?: number;
  imagePath?: string;
  imageName?: string;
  notAvailableFrom?: Date;
  notAvailableTo?: Date;
}

export interface IProductState {
  products: [IProductView];
}

@Module({ dynamic: true, store, namespaced: true, name: 'product' })
class Product extends VuexModule implements IProductState {
  public products: [IProductView] = [
    {
      id: Math.random(),
      productName: 'Pepsi',
      price: 124,
      imagePath: 'file/images',
      imageName: 'pepsi.jpg',
      notAvailableFrom: new Date(),
      notAvailableTo: new Date(),
    },
  ];

  @Mutation
  updateProducts(products: [IProductView]) {
    this.products = products;
  }

  @Mutation
  insertProduct(product: IProductView) {
    this.products.push(product);
  }

  @Action
  public async fetchProducts() {
    const { data: products } = await HttpService.get('products');
    this.updateProducts(products.results);
    // return products;
  }

  @Action
  public async searchItem(searchText: string) {
    try {
      const { data: products } = await HttpService.get(
        `products/search?name=${searchText}`
      );

      this.updateProducts(products);
      // return products;
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}

export const ProductModule = getModule(Product);
