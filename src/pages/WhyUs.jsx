import { Link } from "react-router-dom";
import { whyUsItems } from "../api/whyus.js";
export default function WhyUs() {
  return (
    <section className="why-us-section">
      <h2>The best choice for you!</h2>
      <div className="why-us-wrapper">
        {whyUsItems.map((item, idx) => (
          <div className="why-us" key={idx}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.alt} />
            <p className="why-us-description">{item.description}</p>
          </div>
        ))}
      </div>
      <h2>Be part of our community!</h2>
      <Link to="/Offers">
        <button className="btn-primary btn">See more</button>
      </Link>
    </section>
  );
}
