import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}
