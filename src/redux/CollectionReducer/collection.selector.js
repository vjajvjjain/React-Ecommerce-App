import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectCollection = (state) => state.collection;
export const selectShopData = createSelector(
  [selectCollection],
  (collection) => collection.shopData
);

export const selectCollectionItem = memoize((urlParams) =>
  createSelector([selectShopData], (shopData) => shopData[urlParams])
);
