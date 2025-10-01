import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("contact", "routes/contact.jsx"),
  route("thank-you", "routes/thank-you.jsx"),
  route("*", "routes/not-found.jsx"),
];