import { subscribeProcessData } from "./subscribeData";

export default function SubscribeProcess() {
  return (
    <section className="subscribe-process-container">
      <div className="subscribe-process-decals">
        <div className="subscribe-process-circle"></div>
        <div className="subscribe-process-circle"></div>
        <div className="subscribe-process-circle"></div>
      </div>
      <div className="subscribe-process-cards">
        {subscribeProcessData.map((item) => (
          <article className="subscribe-process-card" key={item.id}>
            <h2 className="number">{item.id}</h2>
            <div className="subscribe-process-card-text">
              <h3 className="larger">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
