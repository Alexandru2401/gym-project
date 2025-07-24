import { offers } from "../api/offers";
import OffersCard from "./OffersCard";
export default function Offers() {
  return (
    <section className="offers-section-container">
      <h2 className="offers-title">See our offers</h2>
      {offers.map((offer) => {
        return (
          <OffersCard
            key={offer.id}
            name={offer.name}
            description={offer.description}
            price={offer.price}
          />
        );
      })}
    </section>
  );
}
