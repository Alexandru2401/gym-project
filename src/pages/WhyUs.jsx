import React from "react";
import Team from "../asessts/Team.png";
import pool from "../asessts/pool.jpg";
import yoga from "../asessts/yoga.jpg";
import trofee from "../asessts/trofee.jpg";
import support from "../asessts/support.jpg";
import community from "../asessts/community.jpg";
import { Link } from "react-router-dom";
export default function WhyUs() {
  return (
    <section className="why-us-section">
      <h2>The best choice for you!</h2>
      <div className="why-us-wrapper">
        <div className="why-us">
          <h2>Suport</h2>
          <img src={support} />
          <p className="why-us-description">
            A gym membership gives you the opportunity to benefit from
            personalised training plans tailored to your specific needs and
            goals.
          </p>
        </div>
        <div className="why-us">
          <h2>Best team</h2>
          <img src={Team} />
          <p className="why-us-description">
            Membership gives you access to certified personal trainers who can
            guide you in achieving your fitness goals, whether it's weight loss,
            muscle gain or general fitness improvement.
          </p>
        </div>
        <div className="why-us">
          <h2>Be part of community</h2>
          <img src={community} />
          <p className="why-us-description">
            GymWorld it's not just a gym, it's a community where we all help
            each other to achieve our goals and live healthier lives.{" "}
          </p>
        </div>
        <div className="why-us">
          <h2>Various facilities</h2>
          <img src={pool} />
          <p className="why-us-description">
            Relaxation spaces including sauna and steam room. Jacuzzi or
            swimming pool for muscle recovery and relaxation. Massage rooms for
            recovery treatments
          </p>
        </div>
        <div className="why-us">
          <h2>Variety of fitness programs</h2>
          <img src={yoga} />
          <p className="why-us-description">
            Participate in various fitness programs such as yoga, pilates,
            cycling, HIIT, Zumba and more.
          </p>
        </div>
        <div className="why-us">
          <h2>Events and competitions</h2>
          <img src={trofee} />
          <p className="why-us-description">
            participate in various internal events and competitions dedicated
            exclusively to clients with great prizes!{" "}
          </p>
        </div>
      </div>
      <h2>Be part of our community!</h2>
      <Link to="/Offers">
        <button className="btn-primary btn">See more</button>
      </Link>
    </section>
  );
}
