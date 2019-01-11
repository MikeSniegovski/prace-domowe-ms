import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "components/logo.svg";
import "./TopBar.css";

class TopBar extends Component {
  render() {
    return (
      <header className="c-header">
        <div className="c-header__content">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav className="c-nav">
            <Link className="c-nav__link" to="/products">
              Produkty <small>cat1</small> <small>cat2</small>
            </Link>
            <Link className="c-nav__link" to="/contact">
              Kontakt
            </Link>
          </nav>
          <div className="c-header_cart">koszyk</div>
        </div>
      </header>
    );
  }
}

export default TopBar;
