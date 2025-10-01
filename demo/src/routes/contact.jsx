import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formular data...
    
    // Naviger til tak-siden
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
}