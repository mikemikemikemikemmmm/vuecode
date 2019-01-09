import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    buyInformation: {
      order: [
        {
          purchaser: {
            firstName: '王',
            secondName: '小明',
            address: '台北市信義區一號',
          },
          products: [
            {
              id: 1,
              qty: 3,
            }, {
              id: 2,
              qty: 1,
            },
          ],
          pay: {
            creditCardNum: 123456789,
            name: '王小明',
            deadline: '3/2020',
          },
          receipt: {
            isMailing: true,
            data: {
              address: '台北市信義去',
              taxNum: 123456789,
            },
          },
        },
      ],
    },
    cart: {
      productList: [{
        productData:
          {
            title: '焦糖',
            unitPrice: 200,
            imgName: 'buy-card1.jpg',
          },
        qty: 2,
        }
      ],
      totalPrice: 400,
    },
    isLoading: false,
    products: [
      {
        title: '焦糖',
        unitPrice: 200,
        imgName: 'buy-card1.jpg',
      },
      {
        title: '紅茶',
        unitPrice: 400,
        imgName: 'buy-card2.jpg',
      },
      {
        title: '綠茶',
        unitPrice: 800,
        imgName: 'buy-card3.jpg',
      },
    ],
  },
  mutations: {
    CARTCHECK(state, data) {
      state.cart = data;
    },
    PRODUCTS(state, data) {
      state.products = data;
    },
    LOADING(state, status) {
      state.isLoading = status;
    },
    ADDTOCART(state, data) {
      state.cart.productList.push({ 
        productData: state.products[data.index],
        qty: data.qty,
        price: data.qty*state.products[data.index]['price'] 
      });
    },
  },
});
