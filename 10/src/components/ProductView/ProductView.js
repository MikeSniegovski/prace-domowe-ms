import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductView.css";

class ProductView extends Component {

  render() {
    const { product: { Title, Id, Category, Contents, Price, Manufacturer, ImageUrl, Description } } = this.props;

    return <div className="c-product-view">
      <div className="c-product-list__img" style={{ backgroundImage: 'url(' + ImageUrl + ')' }}></div>
      <div className="c-product-list__info">
        <h1>{Title}</h1>
        Category: {Category}
        <br />
        Contents: {Contents}
        <br />
        <strong>Price: {Price} $</strong>
        <br />
        Manufacturer: {Manufacturer}

        <p>{Description}</p>
      </div>
    </div>;
  }
}

export default ProductView;