export default function PromoCard({ image, title, description }) {
  return (
    <article className="promo-card">
      <div className="promo-card-content">
        <img src={image} alt={`Image of ${title}`} />
        <div className="promo-card-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
