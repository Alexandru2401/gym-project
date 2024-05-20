import React from "react";
import avatar from "../asessts/avatar.png";
export default function CoachesCard(props) {
  return (
    <div className="trainer-card">
      <div className="trainer-card-img">
        <img src={avatar} />
        <h2 className="trainer-name">{props.name}</h2>
      </div>
      <p className="trainer-description">About: {props.description}</p>
      <p className="trainer-experience">{props.experience}</p>
    </div>
  );
}
