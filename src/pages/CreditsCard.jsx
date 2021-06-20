import React from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';
import {Row, Col} from "react-bootstrap";
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
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
          />
           <input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{marginTop:"30px", margin:"20px"}}
          />
          <input
            type="tel"
            name="cvc"
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
