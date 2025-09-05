import CollectionCard from "./CollectionCard";
import { collectionData } from "./homeData";
export default function Collection() {
  return (
    <section className="collection">
      <h2 className="collection-header">our collection</h2>
      <div className="collection-container">
        {collectionData.map((item, index) => (
          <article key={index}>
            <img src={item.image} alt={`Bag of ${item.name} coffee`} />
            <div>
              <h2 className="collection-card-title">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
