import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="c-contact">
        <h1>Kontakt</h1>
        <p>Jeśli chcesz się znami skontaktować to napisz na adres <a href="mailto:kontak@takisupersklep.pl">kontak@takisupersklep.pl</a>,</p>
        <p>lub zadzwoń pod numer <a href="tel:+48666333999">+48 666 333 999</a></p>
        <p>Adres: <br/>
          ul. Bardzo ładna 32A,<br/>
          00-007 Sklepowice Wielkie
        </p>
      </div>
    );
  }
}

export default Contact;
