import { ADD_COUNTER, ADD_CART } from './mutation.types'
export default {
  addToCart(context, payload) {
    return new Promise((resolve) => {
      let product = context.state.cartList.find(item => item.iid == payload.iid);
      if (product) {
        context.commit(ADD_COUNTER, product);
      } else {
        payload.count = 1;
        payload.check = true;
        context.commit(ADD_CART, payload);
      }
      resolve();
    })
  }
}