import store from '@/store';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import HttpService from '@/service/HttpService';

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
    this.order = orderInfo;
  }

  @Action
  public async getAllOrder() {
    const { data: orders } = await HttpService.get(`orders`);
    // this.context.commit('setOrders', setOrders);
  }

  // actions
  @Action
  async viewOrder() {
    console.log('View order');
  }
}

export const OrderModule = getModule(Orders);
