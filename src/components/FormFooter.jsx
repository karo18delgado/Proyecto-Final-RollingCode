import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormFooter() {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      // Consulta post a /mensaje
      await axios.post("/mensaje", input);
      alert("Mensaje enviado con éxito");
      setValidated(false);
      form.reset();
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="m-2"
    >
      <Form.Group controlId="exampleForm.ControlInput1" className="">
        <Form.Label style={{ color: "white" }}>Escribe tu correo</Form.Label>
        <Form.Control
          name="correo"
          onChange={(e) => handleChange(e)}
          required
          type="email"
          placeholder="nombre@correo.com"
          minLength={4}
          maxLength={30}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1" className="">
        <Form.Label style={{ color: "white" }}>Escribe un asunto</Form.Label>
        <Form.Control
          name="asunto"
          onChange={(e) => handleChange(e)}
          required
          type="text"
          placeholder="Ej: Consultas Generales"
          minLength={4}
          maxLength={30}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1" className="">
        <Form.Label style={{ color: "white" }}>Escribe tu consulta</Form.Label>
        <Form.Control
          name="descripcion"
          onChange={(e) => handleChange(e)}
          required
          as="textarea"
          placeholder="Ingresa tu consulta"
          rows={3}
          minLength={4}
          maxLength={120}
        />
      </Form.Group>
      <Button variant="primary" className="btn btn-light" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
