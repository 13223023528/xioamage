import { ADD_COUNTER, ADD_CART, CHANGE_CHECK } from './mutation.types'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload);
  },
  [CHANGE_CHECK](state, payload) {
    state.cartList.forEach(item => {
      if (item.iid == payload.iid) {
        item.check = !payload.check
      }
    });
  }
}