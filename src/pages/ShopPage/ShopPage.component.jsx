import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview.components";
import CollectionPage from "../collectionPage/collectionPage.components";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:CollectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
