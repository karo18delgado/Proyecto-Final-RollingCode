import React from 'react';
import Form from 'react-bootstrap/Form'

export default function FormFooter() {
  return (
    <Form className="m-2">
  <Form.Group controlId="exampleForm.ControlInput1" className="">
    <Form.Label style={{color:'white'}}>Escribe tu correo</Form.Label>
    <Form.Control type="email" placeholder="nombre@correo.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" className="">
    <Form.Label style={{color:'white'}}>Escribe un asunto</Form.Label>
    <Form.Control type="text" placeholder="Consultas Generales" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" className="">
    <Form.Label style={{color:'white'}}>Escribe tu consulta</Form.Label>
    <Form.Control as="textarea" placeholder="Ingresa tu consulta" rows={3} />
  </Form.Group>
</Form>
  );
}
