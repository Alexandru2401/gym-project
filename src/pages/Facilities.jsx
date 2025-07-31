import { facilitiesList } from "../api/facilities.js";

export default function Facilities() {
  return (
    <div className="facilities-wrapper">
      {facilitiesList.map((section, index) => (
        <div key={index} className="facilities-container">
          <h2>{section.title}</h2>
          <ul className="facilities-container">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
