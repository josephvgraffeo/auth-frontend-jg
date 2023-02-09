import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // http://127.0.0.1:5002
        fetch("https://auth-api-jg.web.app/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, password}),
        })
            .then(res => res.json())
            .then(response => {
                setUser(response.user);
                navigate('/secret')
            })
            .catch(err => alert(err.message))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email &nbsp;
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <br />
            <label htmlFor="password">Password &nbsp;
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Sign Up" />
        </form>
    )
}