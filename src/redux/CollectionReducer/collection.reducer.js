import SHOP_DATA from "./ShopPage.data";
const INITIAL_STATE = {
  shopData: SHOP_DATA,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
