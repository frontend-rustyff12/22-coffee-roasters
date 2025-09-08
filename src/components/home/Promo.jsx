import PromoCard from "./PromoCard";
import { promoData } from "./homeData";
export default function Promo() {
  return (
    <section className="promo">
      <div className="promo-background"></div>
      <div className="promo-text">
        <h2>Why choose us?</h2>

        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className="promo-cards">
        {promoData.map((item, index) => (
          <PromoCard
            image={item.image}
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
