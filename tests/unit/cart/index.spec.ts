import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { CartModule, IItemView } from '@/store/modules/cart';

const Vue = createLocalVue();
Vue.use(Vuex);

describe('Product Store', () => {
  it('has to get a store instance', async (done) => {
    // const service = factory();
    const service = CartModule;

    const items = [
      {
        itemInfo: {
          id: Math.random(),
          productName: 'Fanta',
          price: 124,
          imagePath: 'file/images',
          imageName: 'fanta.jpg',
          notAvailableFrom: new Date().toISOString(),
          notAvailableTo: new Date().toISOString(),
        },
        itemCount: 10,
      },
    ];
    service.addItemInCart([items]);
    expect(service.items).toBe(items);

    expect(service).toBeInstanceOf(Object);
    done();
  });
});
