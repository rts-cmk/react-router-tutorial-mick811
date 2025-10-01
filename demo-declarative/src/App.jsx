import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}