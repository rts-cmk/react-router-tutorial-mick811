import { useParams, Link } from "react-router";

export default function User() {
  const { userId } = useParams();
  
  // I en rigtig app ville du fetch bruger data her
  const users = {
    "1": { name: "Peter Hansen", email: "peter@example.com" },
    "2": { name: "Maria Nielsen", email: "maria@example.com" },
    "3": { name: "Lars Jensen", email: "lars@example.com" },
  };
  
  const user = users[userId];
  
  if (!user) {
    return (
      <div>
        <h1>Bruger ikke fundet</h1>
        <p>Bruger med ID {userId} eksisterer ikke.</p>
        <Link to="/">Gå til forsiden</Link>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Bruger Profil</h1>
      <div className="user-profile">
        <p><strong>ID:</strong> {userId}</p>
        <p><strong>Navn:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      
      <div className="user-links">
        <h3>Test andre brugere:</h3>
        <ul>
          <li><Link to="/users/1">Bruger 1</Link></li>
          <li><Link to="/users/2">Bruger 2</Link></li>
          <li><Link to="/users/3">Bruger 3</Link></li>
        </ul>
      </div>
      
      <p><Link to="/">Gå til forsiden</Link></p>
    </div>
  );
}

