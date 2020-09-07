import React from "react";
import { connect } from "react-redux";
import { selectCollectionItem } from "../../redux/CollectionReducer/collection.selector";
import CollectionItem from "../../components/CollectionItem/CollectionItem.component";
import "./collectionPage.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">{collection.title.toUpperCase()}</h2>
    <div className="items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionItem(ownProps.match.params.CollectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
