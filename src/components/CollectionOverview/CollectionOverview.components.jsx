import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/CollectionReducer/collection.selector";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {Object.values(collections).map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
