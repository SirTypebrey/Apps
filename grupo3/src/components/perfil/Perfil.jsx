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
    const handleChangeEmail = () => {
      this.setState({ email: this.inputEmail.current.value });
    };

    const handleChangeUser = () => {
      this.setState({ user: this.inputUser.current.value });
    };

    const handleChangePassword = () => {
      this.setState({ password: this.inputPassword.current.value });
    };

    const handleChangeImg = () => {
      this.setState({ img: this.inputImg.current.value });
    };

    return (
      <div>
        <div>
          <h2>Bienvenido! {this.state.user || this.state.email}</h2>
        </div>
        <div>
          <div>
            <strong>Su configuracion es la siguiente: </strong>
          </div>
          <div className="mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: {this.state.email}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduzca su email para actualizar."
                  ref={this.inputEmail}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleChangeEmail}
                >
                  Cambiar
                </Button>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User name: {this.state.user}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduzca su nombre para actualizar."
                  ref={this.inputUser}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleChangeUser}
                >
                  Cambiar
                </Button>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: {this.state.password}</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introduzca su Password para actualizar"
                  ref={this.inputPassword}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleChangePassword}
                >
                  Cambiar
                </Button>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>
                  User img:
                  {(
                    <img
                      className="img-fluid"
                      style={{ width: "3%" }}
                      src={this.state.img}
                    />
                  ) || "No tiene"}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduzca su imagen para actualizar"
                  ref={this.inputImg}
                />
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleChangeImg}
                >
                  Cambiar
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
  }
}

export default Perfil;
