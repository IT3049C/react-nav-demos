import "./Events.css";
import { NavLink } from "react-router-dom";

export function Events() {
  return (
    <section>
      <h2>Welcome to the Events List Page</h2>
      <p>Information about the different events will show here.</p>
      <ul>
        <li>
          {" "}
          <NavLink to="/events/details">Some Event</NavLink>
        </li>
      </ul>
    </section>
  );
}
