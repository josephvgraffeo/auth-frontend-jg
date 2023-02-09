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

        setUser({email, password});
        navigate('/secret')
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