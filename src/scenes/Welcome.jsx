import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <>
            <h2>Welcome</h2>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>

        </>
    )
}