import React, { Component, Fragment } from "react";
import "./ProductsFilters.css";

class ProductsFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortByName: true,
    };
  }

  render() {

    return <div className="c-product-list__filters">
      <select>
        <option value="cat1">cat1</option>
        <option value="cat2">cat2</option>
      </select>
      <input type="search" name="" id="" />
      <button>sort by name</button>
      <button>sort by price</button>
      <label htmlFor="organic">
        is organic
        <input type="checkbox" name="organic" id="" />
      </label>

    </div>;
  }
}

export default ProductsFilters;