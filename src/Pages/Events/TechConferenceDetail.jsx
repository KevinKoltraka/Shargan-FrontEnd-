import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import "./event-details.css";

export const TechConferenceDetail = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyInterest: '',
    educationLevel: 'undergraduate'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Simulating API call
    const fetchEventDetails = async () => {
      setLoading(true);
      setTimeout(() => {
        setEvent({
          id: 1,
          title: "Shargan Consulting at GETEX Fair Education 2025",
          subtitle: "Your Gateway to Studying in Albania",
          date: "2025-04-30",
          endDate: "2025-05-02",
          location: "Dubai International Convention Center",
          address: "Sheikh Zayed Road, Dubai, UAE",
          description: "Join Shargan Consulting at GETEX Fair Education 2025 in Dubai to explore academic opportunities in Albania – a growing hub for international education in Europe.",
          longDescription: "We are excited to announce that Shargan Consulting will be participating in the GETEX Fair Education 2025 in Dubai, one of the most prestigious international education events, taking place from April 30 to May 2, 2025! This fair is the perfect opportunity for students, parents, and education professionals to explore academic opportunities abroad — and Shargan Consulting is here to showcase the potential of studying in Albania, a growing hub for international education in Europe. As a consulting firm dedicated to guiding international students in their academic journey, our mission is to connect young minds with quality education and a bright future.",
          featuredImage: "/api/placeholder/1200/600",
          highlights: [
            "Learn about accredited universities in Albania, offering English-language programs",
            "Speak directly with our team of education experts",
            "Discover student life in Albania",
            "Get step-by-step assistance with application procedures and visa support"
          ],
          studyFields: [
            "Medicine", "Engineering", "Business", "Social Sciences",
            "Arts and Humanities", "Computer Science", "Architecture"
          ],
          consultants: [
            {
              name: "Dr. Sara Hoxha",
              role: "Education Director",
              bio: "15+ years in international education consulting"
            },
            {
              name: "Ahmed Al-Farsi",
              role: "Middle East Relations Manager",
              bio: "Specializes in helping students from the Gulf region"
            },
            {
              name: "Maria Berisha",
              role: "Student Success Coordinator",
              bio: "Helped hundreds of international students transition to Albania"
            }
          ],
          schedule: [
            {
              date: "April 30, 2025",
              sessions: [
                { time: "10:00 AM", title: "Introduction to Studying in Albania" },
                { time: "12:00 PM", title: "Medical Education in Albania" },
                { time: "3:00 PM", title: "Student Life in Albania" }
              ]
            },
            {
              date: "May 1, 2025",
              sessions: [
                { time: "10:00 AM", title: "Engineering Education in Albania" },
                { time: "1:00 PM", title: "Visa and Immigration Process" },
                { time: "4:00 PM", title: "Alumni Success Stories" }
              ]
            },
            {
              date: "May 2, 2025",
              sessions: [
                { time: "10:00 AM", title: "Business Programs in Albania" },
                { time: "12:00 PM", title: "Scholarship Opportunities" },
                { time: "2:00 PM", title: "Q&A Panel with Consultants" }
              ]
            }
          ],
          universities: [
            { name: "University of Tirana", programs: "Medicine, Business" },
            { name: "Epoka University", programs: "Engineering, Architecture" },
            { name: "Albanian University", programs: "Medicine, Pharmacy" },
            { name: "Polis University", programs: "Architecture, Design" }
          ],
          faqs: [
            {
              question: "What are the language requirements?",
              answer: "Most programs are taught in English. You'll need IELTS (6.0+) or TOEFL (80+)."
            },
            {
              question: "Are Albanian degrees recognized internationally?",
              answer: "Yes, Albanian universities follow the Bologna Process with international recognition."
            }
          ],
          contact: {
            email: "info@sharganconsulting.com",
            phone: "+355 69 930 5604",
            booth: "Hall 3, Stand B24"
          }
        }
        );
        setLoading(false);
      }, 1000);
    };

    fetchEventDetails();
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation request submitted:", formData);
    setFormSubmitted(true);
  };

  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.toLocaleDateString('en-US', options)}`;
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (!event) {
    return (
      <div className="not-found-container">
        <h2>Event Not Found</h2>
        <p>The event information you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="back-button">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      {/* Hero Section */}
      <section className="event-hero" style={{ backgroundImage: `url(${event.featuredImage})` }}>
        <div className="hero-content">
          <h1 className="event-title">{event.title}</h1>
          <h2 className="event-subtitle">{event.subtitle}</h2>
          <div className="event-meta">
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-icon">{formatDateRange(event.date, event.endDate)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📍</span>
              <span className="meta-icon">{event.location}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🎟️</span>
              <span className="meta-icon">Booth: {event.contact.booth}</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => {
                window.open('https://wa.me/355699305604?text=Hello!%20I%20would%20like%20to%20request%20a%20consultation.', '_blank');
              }}
            >
              Request Consultation
            </button>
          </div>

        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tabs-section">
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === 'programs' ? 'active' : ''}`}
            onClick={() => handleTabChange('programs')}
          >
            Study Programs
          </button>
          <button
            className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => handleTabChange('schedule')}
          >
            Schedule
          </button>
          <button
            className={`tab ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => handleTabChange('faqs')}
          >
            FAQs
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="event-content" className="content-section">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>About Our Participation</h2>
            <p>{event.longDescription}</p>

            <div className="highlights-section">
              <h3>At our booth, visitors will have the opportunity to:</h3>
              <ul className="highlights-list">
                {event.highlights.map((highlight, index) => (
                  <li key={index}> {highlight}</li>
                ))}
              </ul>
            </div>

            <div className="why-albania">
              <h3>Why Study in Albania?</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>Affordable Education</h4>
                  <p>Lower tuition fees and living costs compared to Western Europe</p>
                </div>
                <div className="benefit-item">
                  <h4>Quality Programs</h4>
                  <p>Internationally recognized degrees following the Bologna system</p>
                </div>
                <div className="benefit-item">
                  <h4>English Programs</h4>
                  <p>Wide range of programs taught entirely in English</p>
                </div>
                <div className="benefit-item">
                  <h4>European Location</h4>
                  <p>Gateway to Europe with rich cultural experiences</p>
                </div>
              </div>
            </div>

            <div className="universities-section">
              <h3>Partner Universities</h3>
              <div className="universities-grid">
                {event.universities.map((uni, index) => (
                  <div key={index} className="university-card">
                    <h4>{uni.name}</h4>
                    <p>{uni.programs}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="consultants-section">
              <h3>Meet Our Team</h3>
              <div className="consultants-grid">
                {event.consultants.map((consultant, index) => (
                  <div key={index} className="consultant-card">
                    <h4>{consultant.name}</h4>
                    <p className="consultant-role">{consultant.role}</p>
                    <p>{consultant.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'programs' && (
          <div className="tab-content">
            <h2>Study Programs in Albania</h2>
            <p>Albania offers a wide range of internationally recognized academic programs in various fields of study.</p>

            <div className="programs-grid">
              <div className="program-category">
                <h3>Medical & Health Sciences</h3>
                <ul>
                  <li>Medicine (6 years)</li>
                  <li>Dentistry (5 years)</li>
                  <li>Pharmacy (5 years)</li>
                  <li>Nursing (3-4 years)</li>
                </ul>
                <p><strong>Tuition:</strong> €5,000-7,000/year</p>
              </div>

              <div className="program-category">
                <h3>Business & Economics</h3>
                <ul>
                  <li>Business Administration</li>
                  <li>Finance & Banking</li>
                  <li>Marketing</li>
                  <li>International Business</li>
                </ul>
                <p><strong>Tuition:</strong> €2,500-3,500/year</p>
              </div>

              <div className="program-category">
                <h3>Engineering & Technology</h3>
                <ul>
                  <li>Computer Engineering</li>
                  <li>Civil Engineering</li>
                  <li>Architecture</li>
                  <li>Computer Science</li>
                </ul>
                <p><strong>Tuition:</strong> €3,000-4,000/year</p>
              </div>

              <div className="program-category">
                <h3>Social Sciences & Humanities</h3>
                <ul>
                  <li>International Relations</li>
                  <li>Psychology</li>
                  <li>Communication</li>
                  <li>English Language & Literature</li>
                </ul>
                <p><strong>Tuition:</strong> €2,000-3,000/year</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="tab-content">
            <h2>Fair Schedule</h2>
            <p>Join us at our booth throughout the fair and attend our specialized information sessions.</p>

            {event.schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="schedule-day">
                <h3>{day.date}</h3>
                <div className="sessions-list">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="session-item">
                      <span className="session-time">{session.time}</span>
                      <span className="session-title">{session.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="schedule-note">
              <p>All sessions will be held at our booth ({event.contact.booth}). Individual consultations are available throughout the day.</p>
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs-list">
              {event.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Visit us at booth {event.contact.booth} during the fair or contact us directly.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">✉️</span>
                <span className="method-icon">{event.contact.email}</span>
              </div>
              <div className="contact-method">
                <span className="method-icon">📞</span>
                <span className="method-icon">{event.contact.phone}</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {!formSubmitted ? (
              <>
                <h3>Request a Consultation</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="studyInterest">Study Interest</label>
                    <select
                      id="studyInterest"
                      name="studyInterest"
                      value={formData.studyInterest}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select your interest</option>
                      {event.studyFields.map((field, index) => (
                        <option key={index} value={field}>{field}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Education Level</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="educationLevel"
                          value="undergraduate"
                          checked={formData.educationLevel === 'undergraduate'}
                          onChange={handleFormChange}
                        />
                        Undergraduate
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="educationLevel"
                          value="postgraduate"
                          checked={formData.educationLevel === 'postgraduate'}
                          onChange={handleFormChange}
                        />
                        Postgraduate
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="submit-button">Request Consultation</button>
                </form>
              </>
            ) : (
              <div className="submission-success">
                <h3>Thank You!</h3>
                <p>Your consultation request has been received. One of our education consultants will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="event-footer">
        <p>Shargan Consulting - Your Gateway to Studying in Albania</p>
        <p>Visit us at GETEX Education Fair 2025 - {event.contact.booth}</p>
      </section>
    </div>
  );
};

export default TechConferenceDetail;