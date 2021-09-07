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
    // 1.check if product is already in card or not
    const itemIndex = this.items.findIndex(
      (x: IItemView) => x.itemInfo?.id === item?.id
    );

    // 2. if present then just simply update the product count
    if (itemIndex > -1) {
      this.items[itemIndex].itemCount++;
      this.totalItems++;
    } else {
      // 3. if not then insert item in card & update the count
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
  public deleteProduct(productId: number) {
    // 1.check if product is already in card or not
    const itemIndex = this.items.findIndex(
      (x: IItemView) => x.itemInfo?.id === productId
    );

    // 2. if yes then remove other move on
    if (itemIndex > -1) {
      this.totalItems = this.totalItems - this.items[itemIndex]?.itemCount;
      this.items.splice(itemIndex, 1);
      this.items = [...this.items];
    }
  }

  @Mutation
  public deleteItem(productId: number) {
    // 1.check if product is already in card or not
    const itemIndex = this.items.findIndex(
      (x: IItemView) => x.itemInfo?.id === productId
    );

    // 2. if yes then remove other move on
    if (itemIndex > -1) {
      this.totalItems = this.totalItems - 1;
      const updatedVal = {
        ...this.items[itemIndex],
        itemCount: this.items[itemIndex]?.itemCount - 1,
      };
      this.items[itemIndex] = updatedVal;
    }
  }

  @Mutation
  public insertMoreItem(itemId: number) {
    // 1.check if product is already in card or not
    const itemIndex = this.items.findIndex(
      (x: IItemView) => x.itemInfo?.id === itemId
    );

    // 2. if yes then remove other move on
    if (itemIndex > -1) {
      this.totalItems = this.totalItems + 1;
      const updatedVal = {
        ...this.items[itemIndex],
        itemCount: this.items[itemIndex]?.itemCount + 1,
      };
      this.items[itemIndex] = updatedVal;
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
      // const { data: products } = await HttpService.get('products');
      this.addItems(productItem);
      // this.insertProduct(products);
      return productItem;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Action
  public async addMoreItem(itemId: any) {
    try {
      this.insertMoreItem(itemId);
      return itemId;
    } catch (e) {
      throw new Error(e);
    }
  }

  // here we remove whole pepsi/fanta product from cart
  @Action
  public async removeProductFromCart(productId: any) {
    try {
      this.deleteProduct(productId);
      return productId;
    } catch (e) {
      throw new Error(e);
    }
  }

  @Action
  public async removeItemFromCart(itemId: any) {
    try {
      this.deleteItem(itemId);
      return itemId;
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
