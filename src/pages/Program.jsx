import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function Program() {
  return (
    <div className="schedule-container">
      <h2>
        <ScheduleIcon />
        Work Schedule:
      </h2>
      <div className="schedule-list">
        <p>Monday - Friday:</p>
        <ul>
          <li>06:00 - 10:00: Individual and group training</li>
          <li>
            10:00 - 12:00: Sessions with personal trainer (pre-registration)
          </li>
          <li>12:00 - 15:00: Closed for cleaning and maintenance</li>
          <li>15:00 - 19:00: Individual and group training </li>
          <li>
            19:00 - 21:00: Group fitness classes (aerobics, yoga, pilates, etc.)
          </li>
        </ul>
        <p>Saturday:</p>
        <ul>
          <li> 08:00 - 12:00: Individual and group workouts </li>
          <li>
            12:00 - 13:00: Sessions with personal trainer (pre-registration){" "}
          </li>
          <li>13:00 - 14:00: Closed for cleaning and maintenance </li>
          <li>14:00 - 18:00: Individual and group training </li>
        </ul>
        <p>Sunday: Closed</p>
      </div>
      <div className="politicies">
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Politicies: </p>
        <ul>
          <li>All members must sign in and out using their membership card.</li>
          <li>
            Reservations are required for group fitness classes and personal
            trainer sessions.
          </li>
          <li>
            Observe hygiene and safety rules, including cleaning equipment after
            each use and maintaining social distance.{" "}
          </li>
          <li>
            Children under 16 are only allowed under supervision and during
            certain hours. Times may change depending on special events or
            holidays.
          </li>
        </ul>
      </div>
    </div>
  );
}
