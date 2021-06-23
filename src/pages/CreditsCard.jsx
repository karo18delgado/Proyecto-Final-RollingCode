import React from "react";
import Cards from "react-credit-cards";
import "../assets/shoppingcart.css";
import "react-credit-cards/es/styles-compiled.css";
import { Row } from "react-bootstrap";
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Row>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className="d-flex flex-wrap justify-content-center">
            <input
              type="tel"
              name="number"
              className="numberInput"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              // style={{ marginTop: "30px", margin: "20px" }}
            />
            <input
              type="tel"
              name="name"
              placeholder="Name"
              className="nameInput"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              // style={{ marginTop: "30px", margin: "20px" }}
            />
            <input
              type="tel"
              name="expiry"
              className="expiryInput"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              // style={{ marginTop: "30px", margin: "20px" }}
            />
            <input
              type="tel"
              name="cvc"
              className="cvcInput"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              // style={{ marginLeft: "260px" }}
            />
          </form>
        </Row>
      </div>
    );
  }
}
