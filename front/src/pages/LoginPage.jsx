import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import useLogin from "../hooks/useLogin";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const {user} = useAuth()
  const {login} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(user){
    return <Navigate to="/account" />;
  }else{
    return(
      <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
    );
  }
}

export default LoginPage;
