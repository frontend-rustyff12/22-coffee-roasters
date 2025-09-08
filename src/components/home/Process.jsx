import { processData } from "./homeData";
import { Link } from "react-router";

export default function Process() {
  return (
    <section className="process-container">
      <h3 className="process-title">How it works</h3>
      <div className="process-decals">
        <div className="process-circle"></div>
        <div className="process-circle"></div>
        <div className="process-circle"></div>
      </div>
      <div className="process-cards">
        {processData.map((item) => (
          <article className="process-card" key={item.id}>
            <h2 className="number">{item.id}</h2>
            <div className="process-card-text">
              <h3 className="larger">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Link to="subscribe" className="btn process-btn">
        Create your plan
      </Link>
    </section>
  );
}
