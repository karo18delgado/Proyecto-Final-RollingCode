import "../assets/about.css";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import carolina from "../assets/img/carolina.png";
import agustin from "../assets/img/agustin.jpeg";
import rodolfo from "../assets/img/rodolfo.jpeg";
import nicolas from "../assets/img/nicolas.jpeg";
import rosendo from "../assets/img/rosendo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

export default function About() {
  AOS.init();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);

  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);

  return (
    <div>
      {/* VALORES DE APPLE */}

      {/* MEDIO AMBIENTE */}
      <h2 className="letra-valores">Valores de Apple</h2>
      <hr />
      <h1 className="letra-seccion-medioAmbiente">
        <img
          className="logo-seccion"
          src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png"
          alt=""
        />{" "}
        Medio ambiente
      </h1>
      <h1 className="letra-titulo">Somos neutros en carbono</h1>
      <h2 className="letra-subtitulo">
        Y para el{" "}
        <span className="letra-num" style={{ color: "#00D959" }}>
          2030{" "}
        </span>
        todos tus productos favoritos también los serán.
      </h2>

      <Container>
        <Row>
          <Col md={12}>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="row fondo-card"
              style={{ backgroundColor: "#1d1d1f" }}
            >
              <p className="letra-card-grande col-md-5">
                El planeta no puede esperar. Nosotros tampoco.
              </p>
              <img
                className="imagen-card col-md-7"
                src="https://www.apple.com/v/environment/l/images/overview/plan__ce92yq3xbtg2_large.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div data-aos="fade-up" data-aos-duration="3000">
          <Row>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card
                className="p-3 listado-card "
                style={{ backgroundColor: "#fff" }}
              >
                <blockquote className="blockquote mb-0 card-body">
                  <Card.Title className="letra2">
                    Apple Inc. Oficialmente verde.
                  </Card.Title>
                  <div className="toggle-button-container">
                    <span className="toggle-button-indicator"></span>
                  </div>
                  <Card.Title className="letra2a">
                    Desde el 2018, todas las oficinas, tiendas y centros de
                    datos de Apple funcionan con energía 100% renovable.
                  </Card.Title>
                </blockquote>
                <div>
                  {/* Modal */}
                  <Button
                    className="botón-plus"
                    variant="dark"
                    onClick={handleShow1}
                    style={{ margin: "8px", borderRadius: "50%" }}
                  >
                    <FontAwesomeIcon
                      className="plus-icon-blanco"
                      icon={["fas", "plus"]}
                    ></FontAwesomeIcon>
                  </Button>

                  <Modal
                    size="lg"
                    show={show1}
                    onHide={handleClose1}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="letra-modalTitle">
                        <strong>
                          Nuestro plan para ser neutros en carbono para el 2030.
                        </strong>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="letra-modalBody">
                      <p style={{ color: "#86868b" }}>
                        <strong style={{ color: "#1d1d1f" }}>
                          Diseñar para reducir las emisiones de carbono.
                        </strong>
                        Cada vez usamos más materiales reciclados para fabricar
                        nuestros productos y trabajamos constantemente para
                        reducir su consumo de energía.
                      </p>
                      <p style={{ color: "#86868b" }}>
                        <strong style={{ color: "#1d1d1f" }}>
                          Mejorar la eficiencia energética.
                        </strong>
                        Usamos la energía de forma más eficiente en todas las
                        tiendas, oficinas, centros de datos y plantas de
                        fabricación.
                      </p>
                      <p style={{ color: "#86868b" }}>
                        <strong style={{ color: "#1d1d1f" }}>
                          Usar energía renovable.
                        </strong>
                        Estamos comprometidos con hacer que en toda nuestra
                        cadena de producción se utilice energía 100% renovable,
                        aprovechando la energía solar, eólica y de otras fuentes
                        renovables.
                      </p>
                      <p style={{ color: "#86868b" }}>
                        <strong style={{ color: "#1d1d1f" }}>
                          Evitar las emisiones directas.
                        </strong>
                        Estamos rediseñando los procesos en nuestras
                        instalaciones y en la cadena de producción para evitar
                        las emisiones de gases de efecto invernadero.
                      </p>
                      <p style={{ color: "#86868b" }}>
                        <strong style={{ color: "#1d1d1f" }}>
                          Invertir en soluciones naturales.
                        </strong>
                        Estamos invirtiendo en bosques productivos y en la
                        restauración de ecosistemas, de modo que se garantice el
                        respeto a las comunidades y se elimine el carbono de la
                        atmósfera.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose1}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card>
            </Col>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card className="listado-card">
                <Card.Body>
                  <Card.Title className="letra1">Usamos</Card.Title>
                  <Card.Img
                    src="https://www.apple.com/v/environment/l/images/overview/energy_1__dkogpew3n4cy_large_2x.jpg"
                    alt=""
                  />
                  <Card.Title className="letra1">para fabricar</Card.Title>
                  <Card.Img
                    style={{ height: "177px" }}
                    src="https://www.apple.com/v/environment/l/images/overview/energy_2__dhgalfc09byq_large_2x.jpg"
                    alt=""
                  />
                </Card.Body>
                {/* Modal */}
                <div>
                  <Button
                    className="botón-plus"
                    variant="dark"
                    onClick={handleShow2}
                    style={{ margin: "8px", borderRadius: "50%" }}
                  >
                    <FontAwesomeIcon
                      className="plus-icon-blanco"
                      icon={["fas", "plus"]}
                    ></FontAwesomeIcon>
                  </Button>

                  <Modal
                    size="lg"
                    show={show2}
                    onHide={handleClose2}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="letra-modalTitle">
                        <strong>La energía limpia ya no es opcional.</strong>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="letra-modalBody">
                      <p style={{ color: "#86868b" }}>
                        La mayor parte de nuestra huella de carbono proviene de
                        la electricidad que usamos para fabricar tus productos
                        favoritos. Lo bueno es que usando energía limpia en toda
                        la cadena de producción podemos eliminar esa huella casi
                        por completo. Desde el 2015, mediante el Programa de
                        Energías Limpias para Proveedores de Apple, estamos
                        apoyando a la cadena de producción en su proceso de
                        transición hacia el uso de energías de origen solar,
                        eólico y de otras fuentes renovables. Y para el 2030,
                        todos nuestros productos se fabricarán con energía 100%
                        limpia.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card className="listado-card">
                <Card.Img
                  variant="top"
                  style={{ height: "128px" }}
                  src="https://www.apple.com/v/environment/l/images/overview/carbon_removal_top__dfbnr356r2ie_medium_2x.png"
                />
                <Card.Body>
                  <Card.Title className="letra3">
                    Invertimos en ideas de toda naturaleza para eliminar el
                    carbono.
                  </Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  style={{ height: "145px" }}
                  src="https://www.apple.com/v/environment/l/images/overview/carbon_removal_bottom__f1frc0qg6ne6_medium_2x.png"
                />
                {/* Modal */}
                <div>
                  <Button
                    className="botón-plus"
                    variant="dark"
                    onClick={handleShow3}
                    style={{ margin: "8px", borderRadius: "50%" }}
                  >
                    <FontAwesomeIcon
                      className="plus-icon-blanco"
                      icon={["fas", "plus"]}
                    ></FontAwesomeIcon>
                  </Button>

                  <Modal
                    size="lg"
                    show={show3}
                    onHide={handleClose3}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="letra-modalTitle">
                        <strong>
                          La naturaleza puede ayudarnos a ser neutros en
                          carbono.
                        </strong>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="letra-modalBody">
                      <p style={{ color: "#86868b" }}>
                        Nos esforzamos día a día para reducir al máximo nuestras
                        emisiones de carbono, pero hay algunas que aún no
                        podemos evitar. Para buscar soluciones, hemos recurrido
                        a la sabiduría de la naturaleza. Creamos un Fondo de
                        Restauración de 200 millones de dólares, junto con
                        Conservación Internacional (CI) y Goldman Sachs, con el
                        objetivo de invertir en soluciones naturales para el
                        cambio climático y a la vez generar un rendimiento
                        financiero. Desde ya estamos trabajando codo a codo con
                        Conservación Internacional para recuperar de forma
                        natural las deterioradas sabanas de los montes Chyulu en
                        Kenia, implementar modelos nuevos e innovadores con
                        manglares en las costas de Colombia y evitar la
                        desaparición de la selva amazónica en la Zona Reservada
                        Río Nieva, en el norte de Perú. Todas estas iniciativas
                        ayudan a capturar carbono y restaurar ecosistemas y,
                        como consecuencia, nos acercan a nuestra gran meta de
                        ser neutros en carbono para el 2030.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose3}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card>
            </Col>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card bg="dark" className="text-center p-3 listado-card">
                <blockquote className="blockquote mb-0 card-body">
                  <Card.Title
                    className="letra4-blanca"
                    style={{ color: "white", paddingTop: "20px" }}
                  >
                    Nuestros productos usan menos energía.
                  </Card.Title>
                  <Card.Title
                    className="letra4-verde"
                    style={{ color: "#00D959" }}
                  >
                    Y cuidan más al planeta.
                  </Card.Title>
                </blockquote>
                {/* Modal */}
                <div>
                  <Button
                    className="botón-plus"
                    variant="light"
                    onClick={handleShow4}
                    style={{ margin: "8px", borderRadius: "50%" }}
                  >
                    <FontAwesomeIcon
                      className="plus-icon-negro"
                      icon={["fas", "plus"]}
                    ></FontAwesomeIcon>
                  </Button>

                  <Modal
                    size="lg"
                    show={show4}
                    onHide={handleClose4}
                    scrollable={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="letra-modalTitle">
                        <strong>
                          Los productos que ahorran energía reducen nuestra
                          huella de carbono. Y la tuya.
                        </strong>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="letra-modalBody">
                      <p style={{ color: "#86868b" }}>
                        El 19% de nuestra huella de carbono proviene del consumo
                        de energía de nuestros productos, y esto afecta
                        directamente la huella de cada cliente. Diseñar
                        productos que consuman menos energía es una de las
                        mejores formas en que podemos reducir su huella de
                        carbono, incluso cuando están en uso. Es un hecho que
                        las innovaciones en eficiencia energética que se aplican
                        a un producto pueden influir positivamente en otro. Para
                        confirmar el gran impacto de esta iniciativa, basta con
                        multiplicar estas mejoras por todos los dispositivos
                        Apple que hay en el mundo.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose4}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* SECCIÓN ACCESIBILIDAD */}

      <h1 className="letra-seccion-accesibilidad">
        <img
          className="logo-seccion"
          src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png"
          alt=""
        />
        Accesibilidad
      </h1>
      <h2 className="letra-subtitulo">
        {" "}
        Funcionalidades integradas para sacar todo tu potencial. A tu manera.
      </h2>

      <Container>
        <Row>
          <Col md={12}>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="row fondo-card"
              style={{ backgroundColor: "#e0def4", paddingTop: "30px" }}
            >
              <p className="letra-card-accesibilidad col-md-5">
                <p style={{ fontSize: "20px" }}>Control por Botón</p>
                Muévete a tu manera.
              </p>
              <img
                className="imagen-card col-md-7"
                src="https://www.apple.com/la/accessibility/images/overview/switch_control__bn1g8tmudd7m_small_2x.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div data-aos="fade-up" data-aos-duration="3000">
          <Row>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card
                className="p-3 listado-card  "
                style={{ backgroundColor: "#1D1D1F" }}
              >
                <blockquote className="blockquote mb-0 card-body">
                  <p style={{ fontSize: "20px", color: "#fff" }}>
                    Contenido Leído
                  </p>
                  <Card.Title className="letra1-accesibilidad">
                    Lee con los oídos.
                    {/* <FontAwesomeIcon
                                            className="volume-icon"
                                            icon={faVolumeUp}
                                        ></FontAwesomeIcon> */}
                    <FontAwesomeIcon
                      className="volume-icon"
                      icon={["fas", "volume-up"]}
                    ></FontAwesomeIcon>
                  </Card.Title>
                </blockquote>
              </Card>
            </Col>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card className=" p-3 listado-card imagen-fondo">
                <p
                  style={{
                    fontSize: "20px",
                    paddingTop: "20px",
                    color: "#fff",
                  }}
                >
                  Descripciones de Audio.
                </p>
                <Card.Title className="letra3-accesibilidad">
                  Luz.Cámara Audición.
                </Card.Title>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card bg="white" className="text-center p-3 listado-card">
                <blockquote className="blockquote mb-0 card-body">
                  <Card.Title
                    className="letra4"
                    style={{ color: "1D1D1F", paddingTop: "20px" }}
                  >
                    <p style={{ fontSize: "20px" }}>
                      FaceTime y detección de lengua de señas
                    </p>
                    Tu conversación en primer plano.
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    style={{ height: "198px" }}
                    src="https://www.apple.com/v/accessibility/p/images/overview/facetime_sign_language__9o3n3z4dusii_large_2x.jpg"
                  />
                </blockquote>
              </Card>
            </Col>
            <Col md={6} style={{ paddingBottom: "30px" }}>
              <Card className=" p-3 listado-card color-change-2x">
                <Card.Body>
                  <Card.Title className="letra1-accesibilidad2">
                    Hay un atajo para todo.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* SECCIÓN PRIVACIDAD */}

      <h1 className="letra-seccion-privacidad">
        <img
          className="logo-seccion"
          src="https://www.apple.com/v/accessibility/p/images/overview/hero_logo__bchmmzjnvys2_large_2x.png"
          alt=""
        />
        Privacidad
      </h1>
      <p className="letra-parrafo-privacidad">
        La privacidad es un derecho humano fundamental. Y también es uno de los
        valores fundamentales de Apple. Sabemos lo importante que son tus
        dispositivos en tu vida y creemos que sólo tu debes decidir qué
        compartir y con quién compartirlo. Por eso, los productos Apple están
        diseñados para proteger tu privacidad y ayudarte a mantener el control
        de tu información.No siempre es fácil, pero es el tipo de innovación en
        la creemos.
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container row fondo-card1"
        style={{ backgroundColor: "#041725" }}
      >
        <h3 className="letra-card-privacidad1 col-md-7 p-2">
          Safari impide que los rastreadores sigan tus pasos en internet.
          <p className="letra-parrafo-privacidad1 p-2 pt-4">
            La funcionalidad de prevención de rastreo inteligente te ayuda a
            navegar por internet sin que los anuncios te sigan de un sitio a
            otro.
          </p>
        </h3>
        <div className="col-md-5  video-privacidad1">
          <ReactPlayer
            style={{ position: "center" }}
            url="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/safari/small.mp4"
            playing
            controls
            loop
            width="100%"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container-fluid row fondo-card1"
        style={{ backgroundColor: "#261901" }}
      >
        <h3 className="letra-card-privacidad1 col-md-7 p-2">
          Mapas no cuenta las historias de tu historial de ubicaciones.
          <p className="letra-parrafo-privacidad1 p-2 pt-4">
            La app Mapas no asocia tus datos a tu Apple ID, y Apple tampoco
            mantiene un historial de los lugares donde estuviste.
          </p>
        </h3>
        <div className="col-md-5  video-privacidad1">
          <ReactPlayer
            style={{ position: "center" }}
            url="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/maps/medium_2x.mp4"
            playing
            controls
            loop
            width="100%"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container-fluid row fondo-card1"
        style={{ backgroundColor: "#262107" }}
      >
        <h3 className="letra-card-privacidad1 col-md-7 p-2">
          La app Fotos se enfoca en la protección de tus imágenes.
          <p className="letra-parrafo-privacidad1 p-2 pt-4">
            La app Fotos usa el aprendizaje automático para organizar las fotos
            directamente en tu dispositivo. Así, no tendrás que compartirlas con
            Apple ni con nadie.
          </p>
        </h3>
        <div className="col-md-5  video-privacidad1">
          <ReactPlayer
            style={{ position: "center" }}
            url="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/photos/medium_2x.mp4   "
            playing
            controls
            loop
            width="100%"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container-fluid row fondo-card1"
        style={{ backgroundColor: "#001f10" }}
      >
        <h3 className="letra-card-privacidad1 col-md-7 p-2">
          Las personas a las que envías mensajes son las únicas que pueden
          verlos.
          <p className="letra-parrafo-privacidad1 p-2 pt-4">
            Apple no puede leer los mensajes de iMessage que intercambias con
            otras personas.
          </p>
        </h3>
        <div className="col-md-5  video-privacidad1">
          <ReactPlayer
            style={{ position: "center" }}
            url="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/messages/medium_2x.mp4"
            playing
            controls
            loop
            width="100%"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container row fondo-card1"
        style={{ backgroundColor: "#260d16" }}
      >
        <h3 className="letra-card-privacidad1 col-md-7 p-2">
          La app Salud trata tu información médica con cuidado intensivo.
          <p className="letra-parrafo-privacidad1 p-2 pt-4">
            Sólo tú controlas la información que agregas a la app Salud y con
            quién la compartes.{" "}
          </p>
        </h3>
        <div className="col-md-5  video-privacidad1">
          <ReactPlayer
            style={{ position: "center" }}
            url="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/health/medium_2x.mp4"
            playing
            controls
            loop
            width="100%"
          />
        </div>
      </div>

      {/* SECCIÓN DIRECTIVOS */}

      <h2 className="letra-directivos">Directivos de Apple</h2>
      <hr />
      <h1 className="letra-seccion-directivos">Perfiles de los directivos</h1>

      <Container style={{ paddingBottom: "100px" }}>
        <Row>
          <Col xs={12} md={4} style={{ padding: "20px" }}>
            <Card
              style={{ height: "450px" }}
              className="listado-card-directivos"
            >
              <Card.Img
                className="img-directivos"
                variant="top"
                src={rosendo}
              />
              <Card.Body>
                <Card.Title>Rosendo Alves </Card.Title>
                <Card.Text>Programador FullStack</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{ padding: "20px" }}>
            <Card
              style={{ height: "450px" }}
              className="listado-card-directivos"
            >
              <Card.Img
                className="img-directivos"
                variant="top"
                src={carolina}
              />
              <Card.Body>
                <Card.Title>Delgado Ana Carolina</Card.Title>
                <Card.Text>Programadora FullStack</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{ padding: "20px" }}>
            <Card
              style={{ height: "450px" }}
              className="listado-card-directivos"
            >
              <Card.Img
                className="img-directivos"
                variant="top"
                src={agustin}
              />
              <Card.Body>
                <Card.Title>Urrutia Gómez Agustín</Card.Title>
                <Card.Text>Programador FullStack</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} style={{ padding: "20px" }}>
            <Card style={{ height: "450px" }} className="listado-card">
              <Card.Img
                className="img-directivos"
                variant="top"
                src={rodolfo}
              />
              <Card.Body>
                <Card.Title>Gonzalez Rodolfo Eduardo</Card.Title>
                <Card.Text>Programador FullStack</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{ padding: "20px" }}>
            <Card style={{ height: "450px" }} className="listado-card">
              <Card.Img
                className="img-directivos"
                variant="top"
                src={nicolas}
              />
              <Card.Body>
                <Card.Title>Gómez Nicolas</Card.Title>
                <Card.Text>Programador FullStack</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
