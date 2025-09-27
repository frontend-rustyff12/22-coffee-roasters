import FormItem from "./FormItem";
import { formData } from "./subscribeData";
export default function SubscribeForm() {
  return (
    <div className="order-container">
      <nav className="desktop-only">
        <ul>
          <li className="form-nav-item">01 Preferences</li>
          <li className="form-nav-item">02 Bean type</li>
          <li className="form-nav-item">03 Quantity</li>
          <li className="form-nav-item">04 Grind option</li>
          <li className="form-nav-item">05 Deliveries</li>
        </ul>
      </nav>

      <section className="subscribe-form">
        <form>
          {formData.map((item, index) => (
            <FormItem props={item} index={index} />
          ))}
        </form>
      </section>
    </div>
  );
}
