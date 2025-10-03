import { useParams } from "react-router";

export default function City() {
    const { city } = useParams();

    return <h1>Velkommen til {city}!</h1>;
}