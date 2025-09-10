import { locationData } from "./aboutData";
export default function Location() {
  return (
    <section className="location">
      <h3>Our headquarters</h3>
      <div className="locations-container">
        {locationData.map((item, index) => (
          <article className="location-item" key={index}>
            <img src={item.image} alt={`An image of ${item.country}`} />
            <div>
              <h2 className="location-title">{item.country}</h2>
              <div className="location-details-container">
                <p className="location-details">{item.street}</p>
                <p className="location-details">{item.city}</p>
                <p className="location-details">{item.state}</p>
                <p className="location-details">{item.phone}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
