import React from "react";
import CoachesCard from "../components/CoachesCard";
import { Link } from "react-router-dom";
import { trainers } from "../api/trainers";

export function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet your trainer</h2>
      <div className="coaches-card-container">
        {trainers.map((trainer) => {
          return (
            <CoachesCard
              name={trainer.name}
              description={trainer.description}
            />
          );
        })}
      </div>
      <Link to="/Team">
        <button className="btn-primary btn">See more</button>
      </Link>
    </section>
  );
}
