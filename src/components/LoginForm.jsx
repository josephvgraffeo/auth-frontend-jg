import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // http://127.0.0.1:5002
        // https://auth-api-jg.web.app
        fetch("https://auth-api-jg.web.app/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password}),
        })
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
                navigate('/secret')
            })
            .catch(err => alert(err.message))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Form.Group>
                    <p className='text-light'>Please login to enter</p>
                    <Form.Label>Email &nbsp;</Form.Label>
                    <Form.Control 
                        name="email"
                        value={email}
                        type="email" 
                        placeholder="Enter email" 
                        className="p-2 hover-effect"
                        onChange={e => setEmail(e.target.value)}
                        />
                {/* <label htmlFor="email">Email &nbsp;
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label> */}
                </Form.Group>

                <br />
                
                <Form.Group>
                    <Form.Label>Password &nbsp;</Form.Label>
                    <Form.Control 
                        name="password"
                        value={password}
                        type="password" 
                        placeholder="Enter Password" 
                        className="p-2 hover-effect"
                        onChange={e => setPassword(e.target.value)}
                        />
                {/* <label htmlFor="password">Password &nbsp;
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label> */}
                </Form.Group>
                
                <br />

                <Button 
                variant="outline-light"
                size="lg" 
                type="submit"
                className='mt-3'>Login</Button>

                <br />

                <Link to="/signup"><Button variant="outline-light" size="lg" className='mt-3 ms-2'>New User? Sign Up here</Button></Link>
            </form>
        </>
    )
}