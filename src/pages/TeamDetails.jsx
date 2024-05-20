import React from "react";
import CoachesCard from "../components/CoachesCard";
import { trainers } from "../api/trainers";

export default function TeamDetails() {
  return (
    <section className="team-section">
      <h2>Meet your trainer</h2>
      <div className="coaches-card-container">
        {trainers.map((trainer) => {
          return (
            <CoachesCard
              name={trainer.name}
              description={trainer.description}
              experience={trainer.experience}
            />
          );
        })}
      </div>
    </section>
  );
}
