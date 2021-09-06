import store from '@/store';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import HttpService from '@/service/HttpService';
import { storageSave } from '@/utils/localStorage';

@Module({ dynamic: true, store, namespaced: true, name: 'orders' })
class Orders extends VuexModule {
  public allOrder: Array<Object> = [{}];
  public order: Object = {};

  @Mutation
  public setOrder(orderInfo: object) {
    this.order = orderInfo;
  }

  @Mutation
  public setOrders(orderInfo: Array<Object>) {
    this.allOrder = orderInfo;
  }

  @Action
  public async getAllOrder() {
    const { data: orders } = await HttpService.get(`orders`);
    // this.context.commit('setOrders', setOrders);
    this.setOrders({ ...orders });
  }

  @Action
  public async placeOrder(orderInfo: object) {
    try {
      console.log('placeOrder info is: ', orderInfo);
      const { data } = await HttpService.post(`orders`, orderInfo);
      // this.context.commit('setOrders', setOrders);
      console.log('order.orderInfo is: ', data.orderInfo);
      this.setOrder({ ...data.orderInfo });
      storageSave('userInfo', { ...data.user });
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  // actions
  @Action
  async viewOrder() {
    console.log('View order');
  }
}

export const OrderModule = getModule(Orders);
