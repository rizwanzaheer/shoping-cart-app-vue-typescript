import store from '@/store';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import HttpService from '@/service/HttpService';

import { IProductView } from './product';

export interface IItemView {
  itemInfo?: IProductView;
  itemCount?: number;
}

export interface ICardState {
  items?: [IItemView];
  totalItems?: number;
}

@Module({ dynamic: true, store, namespaced: true, name: 'cart' })
class Cart extends VuexModule implements ICardState {
  public items: [IItemView] = [
    {
      itemInfo: {
        productId: Math.random(),
        productName: 'Fanta',
        price: '124',
        imagePath: 'file/images',
        imageName: 'fanta.jpg',
        notAvailableFrom: new Date(),
        notAvailableTo: new Date(),
      },
      itemCount: 10,
    },
  ];
  public totalItems: number = 1;

  @Mutation
  public addItems(item: object) {
    this.items.push(item);
    // this.items = [item];
  }

  @Action
  public async addItemInCart(products: any) {
    // const { data: products } = await HttpService.get('products');
    console.log('action fetchProducts is: ', products);
    this.addItems(products);
    // this.insertProduct(products);
    return products;
  }
}

export const CartModule = getModule(Cart);
