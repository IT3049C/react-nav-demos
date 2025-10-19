import "./EventDetails.css";
import springInnovationFair from "../assets/spring-innovation-fair.png";

export function EventDetails() {
  const event = {
    id: 1,
    name: `Spring Innovation Fair`,
    description: `The Spring Innovation Fair is a showcase of student innovation and entrepreneurship. It is a great opportunity to learn about the different projects and ideas that students are working on.`,
    date: `2026-04-18`,
    time: `11:00 AM - 3:00 PM`,
    location: `Student Center Plaza`,
    image: springInnovationFair,
  };

  return (
    <div className="event-details-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="event-title">{event.name}</h1>
        <hr className="header-divider" />
      </div>

      {/* Split Content Section */}
      <div className="split-content">
        {/* Image Section */}
        <div className="image-section">
          <img src={event.image} alt={event.name} className="event-image" />
        </div>

        {/* Details Section */}
        <div className="details-section">
          <p className="event-description">{event.description}</p>

          <div className="details-list">
            <div className="detail-item">
              <span className="detail-label">📅 Date:</span>
              <span className="detail-value">{event.date}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">🕐 Time:</span>
              <span className="detail-value">{event.time}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">📍 Location:</span>
              <span className="detail-value">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
