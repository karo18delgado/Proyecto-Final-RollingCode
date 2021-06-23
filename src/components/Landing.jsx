import React from "react";
import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "../assets/cards.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return <div className="bg-dark d-flex flex-column justify-content-center">
    <div className="d-flex flex-column justify-content-center card-landing"  >

      <Card style={{backgroundColor:'rgb(240, 230,255)'}} className="d-flex flex-column justify-content-center">
      <div >  
      <h1 className="d-flex flex-row justify-content-center mt-4">iPhone12 </h1>
      <h3 className="d-flex flex-row justify-content-center">Morado Soñado </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Muy pronto disponible en Morado </h4>
      <Button variant="primary" className="btn btn-dark boton-comprar d-flex flex-row m-auto" type="submit">
           <Link to="Iphone" style={{ color: 'inherit', textDecoration: 'inherit'}}>Tienda Iphone</Link> 
          </Button>
      </div>    
      <Card.Img className="card-landing-img"src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12-spring21_durable-design-display_geo_04202021_Full-Bleed-Image.jpg.large.jpg" alt="Card image" />
      
      </Card>
      
    </div>

    <div className="d-flex flex-column justify-content-center">

      <Card style={{backgroundColor:'rgb(0,0,0)'}} className="d-flex flex-column justify-content-center">
      <div >  
      <h1 className="d-flex flex-row justify-content-center text-white mt-4">iPad Pro </h1>
      <h3 className="d-flex flex-row justify-content-center text-center text-white">Con los superpoderes del chip M1 de Apple </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Consulta por preventa</h4>
      <Button variant="primary" className="btn btn-light boton-comprar d-flex flex-row m-auto" type="submit">
           <Link to="Ipad" style={{ color: 'inherit', textDecoration: 'inherit'}}>Tienda Ipad</Link> 
          </Button>
      </div>    
      <Card.Img className="card-landing-img" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/04/ipad-pro-2021-2317515.jpg" alt="Card image" />
      </Card>
    </div>

    <div className="d-flex flex-column justify-content-center">
      <Card style={{backgroundColor:'rgb(255,255,255)'}} className="d-flex flex-column justify-content-center">
      <div >  
      <h1 className="d-flex flex-row justify-content-center text-black mt-4">iMac</h1>
      <h3 className="d-flex flex-row justify-content-center text-black">Dice hola </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Muy pronto disponible </h4>
      <Button variant="primary" className="btn btn-dark boton-comprar d-flex flex-row m-auto" type="submit">
           <Link to="Mac" style={{ color: 'inherit', textDecoration: 'inherit'}}>Tienda Mac</Link> 
          </Button>
      </div>    
      <Card.Img className="card-landing-img" src="https://www.oneclickstore.com/ar/wp-content/uploads/2017/09/iMac-Hero-1.jpg" />
</Card>
    </div>   
  </div>;
}
