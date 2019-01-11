import React, { Component, Fragment } from "react";
import "./Products.css";
import ProductsList from './../ProductsList';
import ProductView from './../ProductView';
import ProductsFilters from './../ProductsFilters';

const productsAPI = "https://www.loop54.com/hubfs/resources/products.json?t=1519812271932";

function checkResp(resp) {
  if (resp.ok) {
    console.log("status", resp.status);
    return resp.json();
  } else {
    console.log("bad status")
  }
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortByName: true,
      apiData: []
    };
  }

  componentDidMount() {
    fetch(productsAPI)
      .then(checkResp)
      .then(apiData => this.setState({ apiData: apiData.Products }));
  }

  findProduct = ({ Id }) => {
    const { match: { params: { productId } } } = this.props;
    return Id === productId || productId === undefined;
  };

  render() {
    const { search, apiData } = this.state;
    const { match: { params: { productId } } } = this.props;

    return <Fragment>

      <ProductsFilters productsList={apiData}></ProductsFilters>

      {!productId && <ProductsList productsList={apiData}></ProductsList>}

      {productId && <ProductView product={apiData.find(this.findProduct)} />}


    </Fragment>;
  }
}

export default Products;