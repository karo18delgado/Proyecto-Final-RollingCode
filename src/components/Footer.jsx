import React from 'react';
import FormFooter from './FormFooter';

export default function Footer() {
  return (
    <div className="Footer px-2" bg="dark" variant="dark" expand="lg">
        <div className="d-flex flex-wrap justify-content-around">
        <div md="6" className="m-2 p-2">
            <h5 className="title m-2 p-2">Productos</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#mac">Mac</a>
              </li>
              <li className="list-unstyled">
                <a href="#ipad">Ipad</a>
              </li>
              <li className="list-unstyled">
                <a href="#iphone">Iphone</a>
              </li>
            </ul>
          </div>    
        <FormFooter/>
        </div>
    </div>
  );
}
