import { Link } from "react-router";
export default function Error() {
  return (
    <section className="error-page">
      <h2>Oops.... There was an error</h2>
      <Link to="/" className="btn">
        Return Home
      </Link>
    </section>
  );
}
