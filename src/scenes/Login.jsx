import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"

export default function Login() {
    return (
        <Container className="p-5 custom-login-form">

            <Row >
                <Col><Header title="Login"/></Col>
            </Row>

            <Row >
                <Col><LoginForm /></Col>
            </Row>

        </Container>
    )
}