import { Link } from "react-router";

export default function NotFound() {
    return <>
        <div>
            <h1 className="text-4xl font-bold" data-gap-block>
                404 - Side ikke fundet
            </h1>
            <p>Beklager, denne side eksisterer ikke.</p>
            <Link to="/">Gå til forsiden</Link>
        </div>
    </>
}