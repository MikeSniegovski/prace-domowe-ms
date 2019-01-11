import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortByName: true,
      apiData: []
    };
  }

  render() {
    const { productsList } = this.props;
    return <ul className="c-product-list">
        {productsList.map(
          ({
            Title,
            Id,
            Category,
            Price,
            Organic,
            ImageUrl
          }) => (
              <li key={Id} className="c-product-list__item">
                <Link to={`/products/${Id}`} className="c-product-list__link">
                  <div className="c-product-list__img" style={{backgroundImage: 'url(' + ImageUrl + ')'}}></div>
                  <div className="c-product-list__info">
                    <h3>{Title}</h3>
                    Category: {Category}
                    <br />
                    Organic: {Organic}<br/>
                    <strong>Price: {Price} $</strong>
                  </div>
                </Link>
              </li>
            )
        )}
      </ul>;
  }
}

export default ProductsList;