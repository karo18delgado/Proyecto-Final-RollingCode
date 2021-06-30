import React from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';
import {Row} from "react-bootstrap";
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
      <div > 
        <Row>
            
        
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
         
          <input
            type="tel"
            name="number"
            maxLength="16"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
            
          />
           <input
            type="tel"
            name="name"
            maxLength="25"
            pattern="[a-z,A-Z]{6,25}"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
          />
          <input
            type="tel"
            name="expiry"
            maxLength="4"
            pattern="^[0-9]+"
            placeholder="Valid Thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
          />
          <input
            type="tel"
            name="cvc"
            maxLength="4"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginLeft:"260px",}}
          />
         
        </form> 
        
          </Row>
      </div>
    );
  }
}
