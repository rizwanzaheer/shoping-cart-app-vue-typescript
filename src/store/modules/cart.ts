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
  public items: [IItemView] = [];
  public totalItems: number = 0;

  // example view of IItemView
  //  [
  //   {
  //     itemInfo: {
  //       id: Math.random(),
  //       productName: 'Fanta',
  //       price: 124,
  //       imagePath: 'file/images',
  //       imageName: 'fanta.jpg',
  //       notAvailableFrom: new Date(),
  //       notAvailableTo: new Date(),
  //     },
  //     itemCount: 10,
  //   },
  //   {
  //     itemInfo: {
  //       id: Math.random(),
  //       productName: 'pepsi',
  //       price: 124,
  //       imagePath: 'file/images',
  //       imageName: 'fanta.jpg',
  //       notAvailableFrom: new Date(),
  //       notAvailableTo: new Date(),
  //     },
  //     itemCount: 24,
  //   },
  // ];

  @Mutation
  public addItems(item: any) {
    console.log('addItems item is: ', item);
    // 1.check if product is already in card or not
    const itemIndex = this.items.findIndex((x: IItemView) => {
      console.log('x.itemInfo.id is: ', x.itemInfo?.id);
      console.log('item.id is: ', item.id);
      return x.itemInfo?.id === item?.id;
    });
    console.log('itemIndex is: ', itemIndex);

    // 2. if present then just simply update the product count
    if (itemIndex > -1) {
      console.log('product found ');
      this.items[itemIndex].itemCount++;
      this.totalItems++;
    } else {
      // 3. if not then insert item in card & update the count
      console.log('product not found');
      this.items.push({
        itemInfo: {
          ...item,
        },
        itemCount: 1,
      });
      this.totalItems++;
    }
  }
  @Mutation
  public onResetCart() {
    this.items = [];
    this.totalItems = 0;
  }

  @Action
  public async addItemInCart(productItem: any) {
    try {
      console.log('addItemInCart productItem is: ', productItem);
      // const { data: products } = await HttpService.get('products');
      // console.log('action fetchProducts is: ', productItem);
      this.addItems(productItem);
      // this.insertProduct(products);
      return productItem;
    } catch (e) {
      throw new Error(e);
    }
  }
  @Action
  public resetCart() {
    this.onResetCart();
    return;
  }
}

export const CartModule = getModule(Cart);
