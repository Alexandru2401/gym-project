import React from "react";
import { Link } from "react-router-dom";
import homeWorkout from "../asessts/homeWorkout.jpg";
import support from "../asessts/support.jpg";
import workout from "../asessts/workout.jpg";
import massage from "../asessts/massage.jpg";
export default function HomeOffers() {
  return (
    <section className="section-container">
      <h2 className="section-title">See our offers</h2>
      <div className="card-container">
        <div className="img-container">
          <img src={homeWorkout} />
        </div>
        <div className="description-container">
          <p>
            You want to go to the gym, but your schedule is full? No problem,
            discover the offer of home workouts, online, under the guidance of a
            professional.
          </p>
          <Link to="/Offers">
            <button className="btn-primary">See more</button>
          </Link>
        </div>
      </div>
      <div className="card-container">
        <div className="description-container">
          <p>
            Do you want to take advantage of all the facilities of the hall?Then
            the premium membership is all you need.
          </p>
          <Link to="/Offers">
            <button className="btn-primary">See more</button>
          </Link>
        </div>
        <div className="img-container">
          <img src={support} />
        </div>
      </div>

      <div className="card-container">
        <div className="img-container">
          <img src={workout} />
        </div>
        <div className="description-container">
          <p>
            Are you already experienced and don't think you need the guidance of
            a coach? No problem, the basic membership is the best choice!
          </p>
          <Link to="/Offers">
            <button className="btn-primary">See more</button>
          </Link>
        </div>
      </div>
      <div className="card-container">
        <div className="description-container">
          <p>
            Just want to relax after a day's work? Take a look at our spa
            offers.
          </p>
          <Link to="/Offers">
            <button className="btn-primary">See more</button>
          </Link>
        </div>
        <div className="img-container">
          <img src={massage} />
        </div>
      </div>
    </section>
  );
}
