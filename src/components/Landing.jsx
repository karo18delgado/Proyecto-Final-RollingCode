import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css' ;
export default function Landing() {
  return <div className="bg-dark mb-5 d-flex flex-column justify-content-center">
    <div className="d-flex flex-column justify-content-center">

      <Card className="d-flex flex-column justify-content-center">
      <div style={{backgroundColor:'rgb(240, 230,255)'}}>  
      <h1 className="d-flex flex-row justify-content-center mt-5">iPhone12 </h1>
      <h3 className="d-flex flex-row justify-content-center">Morado Soñado </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Muy pronto disponible en Morado </h4>
      </div>    
      <Card.Img src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12-spring21_durable-design-display_geo_04202021_Full-Bleed-Image.jpg.large.jpg" alt="Card image" />
      </Card>
    </div>

    <div className="d-flex flex-column justify-content-center">

      <Card className="d-flex flex-column justify-content-center">
      <div style={{backgroundColor:'rgb(0,0,0)'}}>  
      <h1 className="d-flex flex-row justify-content-center text-white mt-5">iPad Pro </h1>
      <h3 className="d-flex flex-row justify-content-center text-white">Con los superpoderes del chip M1 de Apple </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Consulta la disponibilidad mas adelante </h4>
      </div>    
      <Card.Img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/04/ipad-pro-2021-2317515.jpg" alt="Card image" />
      </Card>
    </div>

    <div className="d-flex flex-column justify-content-center">

      <Card className="d-flex flex-column justify-content-center">
      <div style={{backgroundColor:'rgb(255,255,255)'}}>  
      <h1 className="d-flex flex-row justify-content-center text-black mt-5">iMac</h1>
      <h3 className="d-flex flex-row justify-content-center text-black">Dice hola </h3>
      <h4 className="d-flex flex-row justify-content-center text-secondary">Muy pronto disponible </h4>
      </div>    
      <Card.Img src="https://www.oneclickstore.com/ar/wp-content/uploads/2017/09/iMac-Hero-1.jpg" />
</Card>
    </div>

    
  </div>;
}
