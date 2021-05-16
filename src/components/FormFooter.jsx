import React from 'react';
import Form from 'react-bootstrap/Form'

export default function FormFooter() {
  return (
    <Form className="m-2 p-2">
  <Form.Group controlId="exampleForm.ControlInput1" className="m-2 p-2">
    <Form.Label>Escribe tu correo</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" className="m-2 p-2">
    <Form.Label>Escribe tu consulta</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  );
}
