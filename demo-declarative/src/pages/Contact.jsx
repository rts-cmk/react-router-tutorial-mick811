import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her ville du normalt sende formular data til en server
    
    // Naviger til tak-siden
    navigate("/thank-you");
  };

  return (
    <div>
      <h1>Kontakt os</h1>
      <p>Send os en besked, så vender vi tilbage hurtigst muligt!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Navn:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Besked:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        
        <button type="submit">Send besked</button>
      </form>
    </div>
  );
}

