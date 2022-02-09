import React from "react";
import { Form, Button } from "react-bootstrap";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", user: "", password: "", img: "" };

    //Campos de modificacion.
    this.inputEmail = React.createRef();
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
    this.inputImg = React.createRef();
  }

  componentDidMount() {
    this.setState({
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    });
  }

  render() {
    const IhandlePerfilSetting = (valorA, valorB) =>{
        console.log(valorA, valorB)
        if (
            valorA !== undefined &&
            valorA !== "" &&
            valorA !== this.state.valor
          ) {
            console.log("Cambiando de email");
            this.setState({ valorB: valorA });
          } else {
            switch (valorA) {
              case "":
                console.log("El email no puede estar vacio.");
                break;
              case undefined:
                console.log("El email no puede estar indefinido.");
                break;
              default:
                console.log("El email no puede ser el mismo.");
                break;
            }
          }
    }

    const handlePerfilSetting = () => {
        IhandlePerfilSetting(this.inputEmail.current.value, this.state.email);
    };

    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address: {this.state.email}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduzca su email para actualizar."
            ref={this.inputEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>User name: {this.state.user}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduzca su nombre para actualizar."
            ref={this.inputUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: {this.state.password}</Form.Label>
          <Form.Control
            type="password"
            placeholder="Introduzca su Password para actualizar"
            ref={this.inputPassword}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>User img: {this.state.img}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduzca su imagen para actualizar"
            ref={this.inputImg}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handlePerfilSetting}>
          Submit
        </Button>
      </Form>
    );
  }

  componentWillUnmount() {
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
  }
}

export default Perfil;
