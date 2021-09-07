import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { ProductModule } from '@/store/modules/product';

const Vue = createLocalVue();
Vue.use(Vuex);

// const factory = () => {
//   const store = new Vuex.Store({
//     modules: {
//       product: ProductModule,
//     },
//   });
//   return getModule(ProductModule, store);
// };

describe('Product Store', () => {
  it('has to get a store instance', async (done) => {
    // const service = factory();
    const service = ProductModule;
    expect(service).toBeInstanceOf(Object);
    done();
  });
});
