import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "components/TopBar";
import Footer from "components/Footer";
import Home from "components/Home";
import Contact from "components/Contact";
import Products from "components/Products";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="shop-layout">
          <TopBar />
          <main className="c-maincontent">
            <Route path="/" exact component={Home} />
            <Route path="/products/:productId?" component={Products} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/cart" component={Cart} /> */}
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout;