import { Link } from "react-router";

export default function NotFound() {
    return <>
        <div>
            <h1>404 - Side ikke fundet</h1>
            <p>Beklager, denne side eksisterer ikke.</p>
            <Link to="/">Gå til forsiden</Link>
        </div>
    </>
}