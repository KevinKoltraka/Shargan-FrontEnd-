import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  // Sample event data - replace with your actual data fetching
  useEffect(() => {
    // This would be your API call in a real application
    const fetchEvents = async () => {
      // Simulating API response
      const eventData = [
        {
          id: 1,
          title: "Annual Tech Conference",
          date: "2025-05-15",
          time: "09:00 AM - 05:00 PM",
          location: "Convention Center",
          category: "technology",
          description: "Join us for the biggest tech conference of the year featuring keynote speakers, workshops, and networking opportunities.",
          mediaType: "image",
          media: "/api/placeholder/400/250"
        },
        {
          id: 2,
          title: "Charity Fundraiser Gala",
          date: "2025-06-10",
          time: "07:00 PM - 11:00 PM",
          location: "Grand Ballroom",
          category: "charity",
          description: "An evening of fine dining and entertainment to raise funds for local education initiatives.",
          mediaType: "video",
          media: "/api/placeholder/400/250", // This would be a video URL in production
          thumbnail: "/api/placeholder/400/250"
        },
        {
          id: 3,
          title: "Product Launch Event",
          date: "2025-05-22",
          time: "06:00 PM - 09:00 PM",
          location: "Innovation Hub",
          category: "business",
          description: "Be the first to experience our revolutionary new product line with demonstrations and special offers.",
          mediaType: "image",
          media: "/api/placeholder/400/250"
        },
        {
          id: 4,
          title: "Community Workshop",
          date: "2025-05-30",
          time: "10:00 AM - 12:00 PM",
          location: "Community Center",
          category: "education",
          description: "Learn practical skills in this hands-on workshop led by industry experts.",
          mediaType: "video",
          media: "/api/placeholder/400/250", // This would be a video URL in production
          thumbnail: "/api/placeholder/400/250"
        },
        {
          id: 5,
          title: "Industry Networking Mixer",
          date: "2025-06-05",
          time: "05:30 PM - 08:30 PM",
          location: "Business Lounge",
          category: "business",
          description: "Connect with professionals from your industry in a relaxed setting with refreshments provided.",
          mediaType: "image",
          media: "/api/placeholder/400/250"
        },
        {
          id: 6,
          title: "Educational Seminar",
          date: "2025-06-15",
          time: "02:00 PM - 04:00 PM",
          location: "Learning Center",
          category: "education",
          description: "An in-depth seminar covering the latest developments and best practices in the field.",
          mediaType: "image",
          media: "/api/placeholder/400/250"
        },
        {
          id: 7,
          title: "Startup Pitch Competition",
          date: "2025-06-20",
          time: "01:00 PM - 05:00 PM",
          location: "Innovation Hub",
          category: "business",
          description: "Watch innovative startups pitch their ideas to investors and compete for funding.",
          mediaType: "video",
          media: "/api/placeholder/400/250", // This would be a video URL in production
          thumbnail: "/api/placeholder/400/250"
        }
      ];

      setEvents(eventData);
      setFilteredEvents(eventData);

      // Extract unique categories
      const uniqueCategories = [...new Set(eventData.map(event => event.category))];
      setCategories(uniqueCategories);
    };

    fetchEvents();
  }, []);

  // Filter events by category
  const filterEventsByCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    
    if (category === 'all') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.category === category);
      setFilteredEvents(filtered);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Media renderer for images/videos
  const renderMedia = (event) => {
    if (event.mediaType === 'video') {
      return (
        <div className="video-container">
          <div className="video-overlay">
            <div className="play-button">
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <img src={event.thumbnail} alt={event.title} className="event-thumbnail" />
        </div>
      );
    } else {
      return <img src={event.media} alt={event.title} className="event-image" />;
    }
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      
      {/* Category Filters */}
      <div className="filter-container">
        <button 
          className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => filterEventsByCategory('all')}
        >
          All Events
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterEventsByCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Events Grid */}
      <div className="events-grid">
        {currentEvents.length > 0 ? (
          currentEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                {renderMedia(event)}
                <div className="event-date-badge">
                  <span className="event-date">{formatDate(event.date)}</span>
                </div>
                {event.mediaType === 'video' && (
                  <div className="media-badge">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Video</span>
                  </div>
                )}
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                  <div className="event-detail">
                    <svg className="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <svg className="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-footer">
                  <span className="event-category">{event.category}</span>
                  <div className="event-buttons">
                    <button className="event-button register-btn">Register</button>
                    <Link to={`/event/${event.id}`} className="event-button details-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>No events found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-button prev" 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button 
            className="pagination-button next" 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        /* Events Component Styles */
        :root {
          --primary: #0e4c71;
          --accent: #ffb100;
          --white: white;
          --light-primary: rgba(14, 76, 113, 0.1);
          --light-accent: rgba(255, 177, 0, 0.1);
          --shadow: 0 4px 6px rgba(14, 76, 113, 0.1);
          --transition: all 0.3s ease;
        }

        .events-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: var(--primary);
        }

        .events-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--primary);
          position: relative;
          padding-bottom: 1rem;
        }

        .events-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: var(--accent);
          border-radius: 2px;
        }

        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .filter-button {
          padding: 0.625rem 1.25rem;
          background-color: var(--white);
          color: var(--primary);
          border: 2px solid var(--primary);
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-button:hover {
          background-color: var(--light-primary);
          transform: translateY(-2px);
        }

        .filter-button.active {
          background-color: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
          box-shadow: var(--shadow);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .event-card {
          background-color: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(14, 76, 113, 0.15);
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(14, 76, 113, 0.15);
        }

        .event-image-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .event-image,
        .event-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .event-card:hover .event-image,
        .event-card:hover .event-thumbnail {
          transform: scale(1.05);
        }

        /* Video container styling */
        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(14, 76, 113, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: var(--transition);
        }

        .video-container:hover .video-overlay {
          background-color: rgba(14, 76, 113, 0.5);
        }

        .play-button {
          width: 64px;
          height: 64px;
          background-color: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          opacity: 0.9;
          transition: var(--transition);
        }

        .video-container:hover .play-button {
          transform: scale(1.1);
          opacity: 1;
        }

        .media-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: var(--accent);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          z-index: 2;
        }

        .event-date-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: var(--accent);
          color: var(--primary);
          padding: 0.5rem 1rem;
          font-weight: 600;
          border-top-left-radius: 8px;
          z-index: 2;
        }

        .event-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .event-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
          line-height: 1.3;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .event-detail {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .event-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          color: var(--accent);
        }

        .event-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--primary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .event-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .event-category {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background-color: var(--light-primary);
          color: var(--primary);
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .event-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .event-button {
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .register-btn {
          background-color: var(--primary);
          color: var(--white);
        }

        .register-btn:hover {
          background-color: var(--accent);
          color: var(--primary);
        }

        .details-btn {
          background-color: var(--white);
          color: var(--primary);
          border: 1px solid var(--primary);
        }

        .details-btn:hover {
          background-color: var(--light-primary);
        }

        .no-events {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          background-color: var(--light-primary);
          border-radius: 8px;
          font-size: 1.1rem;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .pagination-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid var(--primary);
          border-radius: 50%;
          background-color: var(--white);
          color: var(--primary);
          cursor: pointer;
          transition: var(--transition);
        }

        .pagination-button:hover:not(:disabled) {
          background-color: var(--light-primary);
        }

        .pagination-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          gap: 0.25rem;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--primary);
          border-radius: 50%;
          background-color: var(--white);
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .pagination-number:hover {
          background-color: var(--light-primary);
        }

        .pagination-number.active {
          background-color: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .events-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .events-title {
            font-size: 2rem;
          }
          
          .filter-container {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
            -webkit-overflow-scrolling: touch;
          }
          
          .filter-button {
            flex-shrink: 0;
          }
          
          .event-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .event-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .event-button {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .events-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .event-card {
            max-width: 480px;
          }
          
          .events-title {
            font-size: 1.8rem;
          }
          
          .pagination {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .events-container {
            padding: 2rem 0.75rem;
          }
          
          .events-title {
            font-size: 1.5rem;
          }
          
          .event-title {
            font-size: 1.2rem;
          }
          
          .event-content {
            padding: 1.25rem;
          }
          
          .pagination-button,
          .pagination-number {
            width: 35px;
            height: 35px;
          }
          
          .play-button {
            width: 48px;
            height: 48px;
          }
          
          .play-button svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Events;