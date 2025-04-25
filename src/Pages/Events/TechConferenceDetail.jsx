import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

// Event Detail Page - Tech Conference
export const TechConferenceDetail = () => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [registrationForm, setRegistrationForm] = useState({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        ticketType: 'standard'
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        // Simulating API call
        const fetchEventDetails = async () => {
            setLoading(true);
            // In a real app, this would be an API call with the event ID
            setTimeout(() => {
                setEvent({
                    id: 1,
                    title: "Annual Tech Conference",
                    subtitle: "Exploring the Future of Technology",
                    date: "2025-05-15",
                    startTime: "09:00 AM",
                    endTime: "05:00 PM",
                    location: "Innovation Convention Center",
                    address: "123 Tech Blvd, Silicon Valley, CA 94043",
                    category: "technology",
                    description: "Join us for the most anticipated tech event of the year where industry leaders, innovators, and tech enthusiasts gather to explore cutting-edge advancements and future trends in technology.",
                    longDescription: "The Annual Tech Conference brings together the brightest minds in the technology sector for a day of insightful presentations, interactive workshops, and valuable networking opportunities. Discover the latest innovations in artificial intelligence, blockchain, cloud computing, cybersecurity, and more. This year's conference will feature keynote speeches from prominent tech leaders, panel discussions on emerging technologies, and hands-on demonstrations of groundbreaking products.",
                    featuredImage: "/api/placeholder/1200/600",
                    gallery: [
                        "/api/placeholder/600/400",
                        "/api/placeholder/600/400",
                        "/api/placeholder/600/400",
                        "/api/placeholder/600/400"
                    ],
                    speakers: [
                        {
                            name: "Dr. Emily Chen",
                            role: "AI Research Director, TechGiant Inc.",
                            bio: "Dr. Chen leads groundbreaking research in artificial intelligence and machine learning, with over 15 years of experience in the field.",
                            image: "/api/placeholder/300/300"
                        },
                        {
                            name: "Michael Rodriguez",
                            role: "CTO, FutureTech Solutions",
                            bio: "Michael has pioneered numerous technological innovations and has been a driving force in cloud computing advancements.",
                            image: "/api/placeholder/300/300"
                        },
                        {
                            name: "Sarah Johnson",
                            role: "Cybersecurity Expert",
                            bio: "With expertise in threat detection and digital forensics, Sarah has helped Fortune 500 companies strengthen their security infrastructure.",
                            image: "/api/placeholder/300/300"
                        },
                        {
                            name: "James Wilson",
                            role: "Blockchain Specialist",
                            bio: "James is recognized for his contributions to blockchain technology and decentralized applications development.",
                            image: "/api/placeholder/300/300"
                        }
                    ],
                    schedule: [
                        {
                            time: "08:30 AM - 09:00 AM",
                            title: "Registration & Breakfast",
                            location: "Main Lobby"
                        },
                        {
                            time: "09:00 AM - 10:00 AM",
                            title: "Opening Keynote: The Future of Computing",
                            speaker: "Dr. Emily Chen",
                            location: "Grand Ballroom"
                        },
                        {
                            time: "10:15 AM - 11:15 AM",
                            title: "Panel Discussion: AI Ethics and Implications",
                            speakers: ["Dr. Emily Chen", "Michael Rodriguez", "Sarah Johnson"],
                            location: "Grand Ballroom"
                        },
                        {
                            time: "11:30 AM - 12:30 PM",
                            title: "Workshop: Cloud Security Best Practices",
                            speaker: "Sarah Johnson",
                            location: "Workshop Room A"
                        },
                        {
                            time: "12:30 PM - 01:30 PM",
                            title: "Networking Lunch",
                            location: "Garden Terrace"
                        },
                        {
                            time: "01:45 PM - 02:45 PM",
                            title: "Blockchain Revolution in Enterprise",
                            speaker: "James Wilson",
                            location: "Grand Ballroom"
                        },
                        {
                            time: "03:00 PM - 04:00 PM",
                            title: "Future of DevOps & Continuous Integration",
                            speaker: "Michael Rodriguez",
                            location: "Workshop Room B"
                        },
                        {
                            time: "04:15 PM - 05:00 PM",
                            title: "Closing Remarks & Future Outlook",
                            location: "Grand Ballroom"
                        }
                    ],
                    ticketOptions: [
                        {
                            type: "standard",
                            name: "Standard Pass",
                            price: "$299",
                            features: [
                                "Access to all keynote sessions",
                                "Access to expo floor",
                                "Lunch and refreshments",
                                "Conference materials"
                            ]
                        },
                        {
                            type: "premium",
                            name: "Premium Pass",
                            price: "$499",
                            features: [
                                "All Standard Pass features",
                                "Access to workshops",
                                "Exclusive networking reception",
                                "1-year subscription to Tech Magazine"
                            ]
                        },
                        {
                            type: "vip",
                            name: "VIP Pass",
                            price: "$899",
                            features: [
                                "All Premium Pass features",
                                "Private Q&A with keynote speakers",
                                "VIP lounge access",
                                "Recorded sessions access for 1 year",
                                "Exclusive conference dinner"
                            ]
                        }
                    ],
                    sponsors: [
                        { name: "TechGiant", logo: "/api/placeholder/200/100", level: "Platinum" },
                        { name: "InnovateCorp", logo: "/api/placeholder/200/100", level: "Gold" },
                        { name: "FutureTech", logo: "/api/placeholder/200/100", level: "Gold" },
                        { name: "SecureNet", logo: "/api/placeholder/200/100", level: "Silver" },
                        { name: "CloudServices", logo: "/api/placeholder/200/100", level: "Silver" },
                        { name: "DevTools", logo: "/api/placeholder/200/100", level: "Bronze" }
                    ],
                    faqs: [
                        {
                            question: "What is the refund policy?",
                            answer: "Full refunds are available up to 30 days before the event. Between 30-14 days, 50% refund is available. No refunds are available within 14 days of the event, but tickets are transferable."
                        },
                        {
                            question: "Is there parking available at the venue?",
                            answer: "Yes, the convention center has an underground parking garage with 500 spaces. Daily rate is $25. We recommend carpooling or using public transportation as parking may fill up quickly."
                        },
                        {
                            question: "Will presentations be recorded?",
                            answer: "Yes, all keynote sessions and selected workshops will be recorded. Premium and VIP ticket holders will receive access to these recordings after the event."
                        },
                        {
                            question: "Is there a dress code?",
                            answer: "Business casual attire is recommended for all conference activities."
                        }
                    ],
                    contactInfo: {
                        email: "info@techtechconference.com",
                        phone: "+1 (555) 123-4567",
                        socialMedia: {
                            twitter: "https://twitter.com/techconf",
                            linkedin: "https://linkedin.com/techconf",
                            facebook: "https://facebook.com/techconf"
                        }
                    }
                });
                setLoading(false);
            }, 1000); // Added timeout duration of 1000ms and fixed the closing parenthesis
        };

        fetchEventDetails();
        // Scroll to top on component mount
        window.scrollTo(0, 0);
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would submit this data to your backend
        console.log("Registration submitted:", registrationForm);
        setFormSubmitted(true);
    };

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return <LoadingComponent />;
    }

    if (!event) {
        return (
            <div className="not-found-container">
                <h2>Event Not Found</h2>
                <p>The event you're looking for doesn't exist or has been removed.</p>
                <Link to="/events" className="back-button">Back to Events</Link>
            </div>
        );
    }

    return (
        <div className="event-detail-page">
            {/* Hero Section */}
            <section className="event-hero" style={{ backgroundImage: `url(${event.featuredImage})` }}>
                <div className="hero-content">
                    <div className="event-category">{event.category}</div>
                    <h1 className="event-title">{event.title}</h1>
                    <h2 className="event-subtitle">{event.subtitle}</h2>
                    <div className="event-meta">
                        <div className="meta-item">
                            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="meta-item">
                            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{event.startTime} - {event.endTime}</span>
                        </div>
                        <div className="meta-item">
                            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{event.location}</span>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <button
                            className="register-button"
                            onClick={() => {
                                document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Register Now
                        </button>
                        <button
                            className="schedule-button"
                            onClick={() => {
                                setActiveTab('schedule');
                                document.getElementById('event-content').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Schedule
                        </button>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Quick Info Section */}
            <section className="quick-info-section">
                <div className="quick-info-container">
                    <div className="quick-info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 010 7.75"></path>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Attendees</h3>
                            <p>Expected 800+ Professionals</p>
                        </div>
                    </div>
                    <div className="quick-info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Date</h3>
                            <p>{formatDate(event.date)}</p>
                        </div>
                    </div>
                    <div className="quick-info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Duration</h3>
                            <p>Full Day Event</p>
                        </div>
                    </div>
                    <div className="quick-info-item">
                        <div className="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Location</h3>
                            <p>{event.address}</p>
                        </div>
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
                        className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
                        onClick={() => handleTabChange('schedule')}
                    >
                        Schedule
                    </button>
                    <button
                        className={`tab ${activeTab === 'speakers' ? 'active' : ''}`}
                        onClick={() => handleTabChange('speakers')}
                    >
                        Speakers
                    </button>
                    <button
                        className={`tab ${activeTab === 'tickets' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tickets')}
                    >
                        Tickets
                    </button>
                    <button
                        className={`tab ${activeTab === 'sponsors' ? 'active' : ''}`}
                        onClick={() => handleTabChange('sponsors')}
                    >
                        Sponsors
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
                    <div className="tab-content overview-content">
                        <div className="overview-grid">
                            <div className="overview-description">
                                <h2>About This Event</h2>
                                <p className="description-text">{event.longDescription}</p>
                                <div className="key-highlights">
                                    <h3>Key Highlights</h3>
                                    <ul className="highlights-list">
                                        <li>
                                            <div className="highlight-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <div className="highlight-text">
                                                <h4>Expert-Led Sessions</h4>
                                                <p>Learn directly from industry leaders and visionaries</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="highlight-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <div className="highlight-text">
                                                <h4>Interactive Workshops</h4>
                                                <p>Gain hands-on experience with cutting-edge technologies</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="highlight-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <div className="highlight-text">
                                                <h4>Networking Opportunities</h4>
                                                <p>Connect with peers, potential partners, and industry influencers</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="highlight-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <div className="highlight-text">
                                                <h4>Product Demonstrations</h4>
                                                <p>Experience the latest innovations and technologies firsthand</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="overview-gallery">
                                <h3>Event Gallery</h3>
                                <div className="gallery-grid">
                                    {event.gallery.map((image, index) => (
                                        <div key={index} className="gallery-item">
                                            <img src={image} alt={`Event Gallery ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="event-cta">
                            <div className="cta-content">
                                <h3>Ready to join this exciting event?</h3>
                                <p>Secure your spot today and be part of this transformative experience.</p>
                            </div>
                            <button
                                className="cta-button"
                                onClick={() => {
                                    document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'schedule' && (
                    <div className="tab-content schedule-content">
                        <h2>Event Schedule</h2>
                        <p className="schedule-intro">
                            Plan your day with our comprehensive schedule of keynotes, workshops, and networking opportunities.
                        </p>
                        <div className="schedule-timeline">
                            {event.schedule.map((item, index) => (
                                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">{item.time}</div>
                                        <h3 className="timeline-title">{item.title}</h3>
                                        {item.speaker && <div className="timeline-speaker">Presented by: {item.speaker}</div>}
                                        {item.speakers && (
                                            <div className="timeline-speaker">Panel: {item.speakers.join(', ')}</div>
                                        )}
                                        <div className="timeline-location">
                                            <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="schedule-note">
                            <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 17h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                                <path d="M2 8v8a2 2 0 002 2h12a2 2 0 002-2V8"></path>
                                <path d="M16 3H8a3 3 0 00-3 3v0"></path>
                                <path d="M16 3a3 3 0 013 3v0"></path>
                            </svg>
                            <p>Schedule subject to minor changes. Download our mobile app for real-time updates.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'speakers' && (
                    <div className="tab-content speakers-content">
                        <h2>Meet Our Speakers</h2>
                        <p className="speakers-intro">
                            Learn from industry leaders and experts who are at the forefront of technological innovation.
                        </p>
                        <div className="speakers-grid">
                            {event.speakers.map((speaker, index) => (
                                <div key={index} className="speaker-card">
                                    <div className="speaker-image-container">
                                        <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                                    </div>
                                    <div className="speaker-info">
                                        <h3 className="speaker-name">{speaker.name}</h3>
                                        <div className="speaker-role">{speaker.role}</div>
                                        <p className="speaker-bio">{speaker.bio}</p>
                                        <div className="speaker-social">
                                            <a href="#" className="social-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'tickets' && (
                    <div className="tab-content tickets-content">
                        <h2>Ticket Options</h2>
                        <p className="tickets-intro">
                            Choose the ticket package that best suits your needs and goals for the event.
                        </p>
                        <div className="tickets-grid">
                            {event.ticketOptions.map((ticket, index) => (
                                <div key={index} className={`ticket-card ${ticket.type === 'premium' ? 'featured' : ''}`}>
                                    {ticket.type === 'premium' && (
                                        <div className="ticket-badge">MOST POPULAR</div>
                                    )}
                                    <div className="ticket-header">
                                        <h3 className="ticket-name">{ticket.name}</h3>
                                        <div className="ticket-price">{ticket.price}</div>
                                    </div>
                                    <ul className="ticket-features">
                                        {ticket.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="ticket-button"
                                        onClick={() => {
                                            setRegistrationForm(prev => ({
                                                ...prev,
                                                ticketType: ticket.type
                                            }));
                                            document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Select {ticket.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="tickets-note">
                            <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p>Group discounts are available for teams of 5 or more. Contact us for corporate packages.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'sponsors' && (
                    <div className="tab-content sponsors-content">
                        <h2>Our Sponsors</h2>
                        <p className="sponsors-intro">
                            We're grateful to these organizations for supporting this event and making it possible.
                        </p>

                        <div className="sponsors-section">
                            <h3 className="sponsor-level platinum">Platinum Sponsors</h3>
                            <div className="sponsors-grid platinum-sponsors">
                                {event.sponsors
                                    .filter(sponsor => sponsor.level === 'Platinum')
                                    .map((sponsor, index) => (
                                        <div key={index} className="sponsor-card platinum">
                                            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                            <div className="sponsor-name">{sponsor.name}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="sponsors-section">
                            <h3 className="sponsor-level gold">Gold Sponsors</h3>
                            <div className="sponsors-grid gold-sponsors">
                                {event.sponsors
                                    .filter(sponsor => sponsor.level === 'Gold')
                                    .map((sponsor, index) => (
                                        <div key={index} className="sponsor-card gold">
                                            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                            <div className="sponsor-name">{sponsor.name}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="sponsors-section">
                            <h3 className="sponsor-level silver">Silver Sponsors</h3>
                            <div className="sponsors-grid silver-sponsors">
                                {event.sponsors
                                    .filter(sponsor => sponsor.level === 'Silver')
                                    .map((sponsor, index) => (
                                        <div key={index} className="sponsor-card silver">
                                            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                            <div className="sponsor-name">{sponsor.name}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="sponsors-section">
                            <h3 className="sponsor-level bronze">Bronze Sponsors</h3>
                            <div className="sponsors-grid bronze-sponsors">
                                {event.sponsors
                                    .filter(sponsor => sponsor.level === 'Bronze')
                                    .map((sponsor, index) => (
                                        <div key={index} className="sponsor-card bronze">
                                            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                            <div className="sponsor-name">{sponsor.name}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="become-sponsor">
                            <h3>Interested in becoming a sponsor?</h3>
                            <p>Showcase your brand to industry leaders and technology professionals.</p>
                            <a href="#" className="sponsor-cta">View Sponsorship Opportunities</a>
                        </div>
                    </div>
                )}

                {activeTab === 'faqs' && (
                    <div className="tab-content faqs-content">
                        <h2>Frequently Asked Questions</h2>
                        <p className="faqs-intro">
                            Find answers to common questions about the event. If you don't see your question here, feel free to contact us.
                        </p>
                        <div className="faqs-container">
                            {event.faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h3 className="faq-question">
                                        <span className="faq-icon">Q:</span>
                                        {faq.question}
                                    </h3>
                                    <div className="faq-answer">
                                        <span className="faq-icon">A:</span>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="contact-info">
                            <h3>Still have questions?</h3>
                            <p>Reach out to our event team for assistance.</p>
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <span>{event.contactInfo.email}</span>
                                </div>
                                <div className="contact-method">
                                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                    </svg>
                                    <span>{event.contactInfo.phone}</span>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href={event.contactInfo.socialMedia.twitter} className="social-link">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href={event.contactInfo.socialMedia.linkedin} className="social-link">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href={event.contactInfo.socialMedia.facebook} className="social-link">
                                    <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Registration Section */}
            <section id="registration-section" className="registration-section">
                <div className="registration-container">
                    <div className="registration-header">
                        <h2>Register for the Event</h2>
                        <p>Complete the form below to secure your spot at the Annual Tech Conference.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="registration-success">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3>Registration Successful!</h3>
                            <p>Thank you for registering for the Annual Tech Conference. We've sent a confirmation email with further details to your inbox.</p>
                            <button
                                className="return-button"
                                onClick={() => setFormSubmitted(false)}
                            >
                                Register Another Person
                            </button>
                        </div>
                    ) : (
                        <form className="registration-form" onSubmit={handleRegistrationSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={registrationForm.name}
                                    onChange={handleRegistrationChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={registrationForm.email}
                                    onChange={handleRegistrationChange}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company/Organization</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={registrationForm.company}
                                        onChange={handleRegistrationChange}
                                        placeholder="Enter your company name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={registrationForm.jobTitle}
                                        onChange={handleRegistrationChange}
                                        placeholder="Enter your job title"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ticketType">Ticket Type *</label>
                                <select
                                    id="ticketType"
                                    name="ticketType"
                                    value={registrationForm.ticketType}
                                    onChange={handleRegistrationChange}
                                    required
                                >
                                    {event.ticketOptions.map((ticket) => (
                                        <option key={ticket.type} value={ticket.type}>
                                            {ticket.name} - {ticket.price}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                />
                                <label htmlFor="terms">
                                    I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                                </label>
                            </div>

                            <button type="submit" className="submit-button">
                                Complete Registration
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Location Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <h2>Event Location</h2>
                    <div className="map-wrapper">
                        {/* This would be replaced with an actual map component in a real implementation */}
                        <div className="placeholder-map">
                            <img src="/api/placeholder/1200/400" alt="Event Location Map" />
                            <div className="map-marker">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                                    <path d="M12 0c-4.4 0-8 3.6-8 8 0 5.4 7 13.4 7.3 13.7.2.2.5.3.7.3s.5-.1.7-.3c.3-.3 7.3-8.3 7.3-13.7 0-4.4-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="location-details">
                        <div className="location-item">
                            <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <h3>Address</h3>
                                <p>{event.address}</p>
                            </div>
                        </div>
                        <div className="location-item">
                            <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            <div>
                                <h3>Getting There</h3>
                                <p>Parking available on-site. Public transportation: Bus routes 42, 55, and subway line B.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Events Section */}
            <section className="related-events-section">
                <div className="related-container">
                    <h2>You May Also Be Interested In</h2>
                    <div className="related-events-grid">
                        <div className="related-event-card">
                            <img src="/api/placeholder/400/200" alt="Related Event" className="related-image" />
                            <div className="related-content">
                                <h3>Cloud Computing Summit</h3>
                                <div className="related-date">June 5, 2025</div>
                                <Link to="/event/cloud-summit" className="related-link">Learn More</Link>
                            </div>
                        </div>
                        <div className="related-event-card">
                            <img src="/api/placeholder/400/200" alt="Related Event" className="related-image" />
                            <div className="related-content">
                                <h3>Cybersecurity Workshop</h3>
                                <div className="related-date">May 28, 2025</div>
                                <Link to="/event/security-workshop" className="related-link">Learn More</Link>
                            </div>
                        </div>
                        <div className="related-event-card">
                            <img src="/api/placeholder/400/200" alt="Related Event" className="related-image" />
                            <div className="related-content">
                                <h3>AI Innovation Forum</h3>
                                <div className="related-date">July 12, 2025</div>
                                <Link to="/event/ai-forum" className="related-link">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        /* Variables */
        :root {
          --primary: #0e4c71;
          --accent: #ffb100;
          --white: white;
          --light-gray: #f5f7fa;
          --mid-gray: #e0e6ed;
          --dark-gray: #64748b;
          --primary-light: rgba(14, 76, 113, 0.1);
          --accent-light: rgba(255, 177, 0, 0.1);
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        /* Global Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: var(--primary);
          line-height: 1.6;
        }

        a {
          color: var(--primary);
          text-decoration: none;
        }

        button {
          cursor: pointer;
          font-family: inherit;
        }

        /* Loading & Error States */
        .loading-container,
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          text-align: center;
          padding: 2rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--primary-light);
          border-top: 4px solid var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .back-button {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background-color: var(--primary);
          color: var(--white);
          border-radius: 4px;
          font-weight: 600;
          transition: var(--transition);
        }

        .back-button:hover {
          background-color: var(--accent);
          color: var(--primary);
        }

        /* Hero Section */
        .event-hero {
          position: relative;
          height: 500px;
          background-size: cover;
          background-position: center;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(14, 76, 113, 0.8), rgba(14, 76, 113, 0.95));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 0 2rem;
        }

        .event-category {
          display: inline-block;
          background-color: var(--accent);
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .event-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .event-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .event-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
        }

        .meta-icon {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .register-button {
          background-color: var(--accent);
          color: var(--primary);
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          transition: var(--transition);
        }

        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .schedule-button {
          background-color: transparent;
          color: var(--white);
          border: 2px solid var(--white);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          transition: var(--transition);
        }

        .schedule-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Quick Info Section */
        .quick-info-section {
          background-color: var(--white);
          padding: 0;
          position: relative;
          z-index: 3;
          margin-top: -50px;
        }

        .quick-info-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 0 1rem;
        }

        .quick-info-item {
          background-color: var(--white);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          border-top: 4px solid var(--accent);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background-color: var(--primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: var(--primary);
          flex-shrink: 0;
        }

        .info-icon svg {
          width: 24px;
          height: 24px;
        }

        .info-content h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .info-content p {
          font-size: 0.9rem;
          color: var(--dark-gray);
        }

        /* Tabs Section */
        .tabs-section {
          background-color: var(--white);
          border-bottom: 1px solid var(--mid-gray);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .tabs-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0 1rem;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tab {
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark-gray);
          transition: var(--transition);
          white-space: nowrap;
        }

        .tab:hover {
          color: var(--primary);
        }

        .tab.active {
          color: var(--primary);
          border-bottom-color: var(--accent);
        }

        /* Content Section */
        .content-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .tab-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .tab-content h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: var(--accent);
        }

        /* Overview Tab */
        .overview-intro,
        .schedule-intro,
        .speakers-intro,
        .tickets-intro,
        .sponsors-intro,
        .faqs-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
          color: var(--dark-gray);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .description-text {
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .key-highlights h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 1rem;
          border-left: 4px solid var(--accent);
        }

        .highlights-list {
          list-style: none;
        }

        .highlights-list li {
          display: flex;
          margin-bottom: 1.5rem;
        }

        .highlight-icon {
          background-color: var(--accent-light);
          color: var(--accent);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .highlight-icon svg {
          width: 18px;
          height: 18px;
        }

        .highlight-text h4 {
          margin-bottom: 0.25rem;
        }

        .highlight-text p {
          color: var(--dark-gray);
          font-size: 0.95rem;
        }

        .overview-gallery h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 1rem;
          border-left: 4px solid var(--accent);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .event-cta {
          background-color: var(--primary);
          color: var(--white);
          border-radius: 8px;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .cta-button {
          background-color: var(--accent);
          color: var(--primary);
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          transition: var(--transition);
          white-space: nowrap;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        /* Schedule Tab */
        .schedule-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .schedule-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 4px;
          background-color: var(--mid-gray);
        }

        .timeline-item {
          position: relative;
          padding-left: 45px;
          margin-bottom: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: 10px;
          top: 0;
          width: 24px;
          height: 24px;
          background-color: var(--accent);
          border-radius: 50%;
          border: 4px solid var(--white);
          z-index: 1;
        }

        .timeline-content {
          background-color: var(--light-gray);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: var(--shadow);
          border-left: 4px solid var(--primary);
        }

        .timeline-time {
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .timeline-speaker {
          font-size: 0.95rem;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }

        .timeline-location {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--dark-gray);
        }

        .location-icon {
          width: 16px;
          height: 16px;
          margin-right: 0.5rem;
          color: var(--primary);
        }

        .schedule-note {
          background-color: var(--primary-light);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .note-icon {
          width: 24px;
          height: 24px;
          margin-right: 1rem;
          color: var(--primary);
        }

        /* Speakers Tab */
        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .speaker-card {
          background-color: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
          display: flex;
          border: 1px solid var(--mid-gray);
        }

        .speaker-image-container {
          width: 120px;
          flex-shrink: 0;
        }

        .speaker-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .speaker-info {
          padding: 1.5rem;
        }

        .speaker-name {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }

        .speaker-role {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .speaker-bio {
          font-size: 0.95rem;
          margin-bottom: 1rem;
          color: var(--dark-gray);
        }

        .speaker-social {
          display: flex;
          gap: 0.5rem;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--primary-light);
          color: var(--primary);
          transition: var(--transition);
        }

        .social-icon:hover {
          background-color: var(--primary);
          color: var(--white);
        }

        .social-icon svg {
          width: 16px;
          height: 16px;
        }

        /* Tickets Tab */
        .tickets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .ticket-card {
          background-color: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
          position: relative;
          border: 1px solid var(--mid-gray);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .ticket-card.featured {
          border-color: var(--accent);
          transform: scale(1.05);
        }
.ticket-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--accent);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
}

.ticket-header {
  background-color: var(--primary);
  color: var(--white);
  padding: 1.5rem;
  text-align: center;
}

.ticket-name {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.ticket-price {
  font-size: 2rem;
  font-weight: 700;
}

.ticket-features {
  list-style: none;
  padding: 1.5rem;
  flex-grow: 1;
}

.ticket-features li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.feature-icon {
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
  color: var(--accent);
}

.ticket-button {
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 1rem;
  font-weight: 600;
  margin: 0 1.5rem 1.5rem;
  border-radius: 4px;
  transition: var(--transition);
}

.ticket-button:hover {
  background-color: var(--accent);
  color: var(--primary);
}

.tickets-note {
  display: flex;
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
}

/* Sponsors Tab */
.sponsors-section {
  margin-bottom: 3rem;
}

.sponsor-level {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.sponsor-level::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
}

.sponsor-level.platinum::after {
  background-color: #e5e4e2;
}

.sponsor-level.gold::after {
  background-color: #ffd700;
}

.sponsor-level.silver::after {
  background-color: #c0c0c0;
}

.sponsor-level.bronze::after {
  background-color: #cd7f32;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.sponsor-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--mid-gray);
}

.sponsor-logo {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.sponsor-name {
  font-weight: 600;
}

.become-sponsor {
  background-color: var(--light-gray);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.become-sponsor h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sponsor-cta {
  display: inline-block;
  margin-top: 1rem;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
}

.sponsor-cta:hover {
  background-color: var(--accent);
  color: var(--primary);
}

/* FAQs Tab */
.faqs-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--mid-gray);
  padding: 1.5rem 0;
}

.faq-question {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.faq-answer {
  display: flex;
  align-items: flex-start;
  color: var(--dark-gray);
}

.faq-icon {
  display: inline-block;
  width: 24px;
  font-weight: bold;
  margin-right: 0.5rem;
}

.contact-info {
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;
}

.contact-methods {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
}

.contact-method {
  display: flex;
  align-items: center;
}

.contact-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  color: var(--primary);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: var(--primary-light);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary);
  color: var(--white);
}

/* Registration Section */
.registration-section {
  background-color: var(--light-gray);
  padding: 4rem 1rem;
}

.registration-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.registration-header {
  background-color: var(--primary);
  color: var(--white);
  padding: 2rem;
  text-align: center;
}

.registration-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.registration-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--mid-gray);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  width: auto;
  margin-right: 0.5rem;
}

.checkbox-group label {
  margin-bottom: 0;
}

.submit-button {
  width: 100%;
  background-color: var(--accent);
  color: var(--primary);
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: var(--transition);
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: var(--primary);
  color: var(--white);
}

.registration-success {
  padding: 3rem 2rem;
  text-align: center;
}

.success-icon {
  width: 64px;
  height: 64px;
  background-color: #def7ec;
  color: #047857;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.success-icon svg {
  width: 32px;
  height: 32px;
}

.registration-success h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.return-button {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
}

.return-button:hover {
  background-color: var(--accent);
  color: var(--primary);
}

/* Map Section */
.map-section {
  padding: 4rem 1rem;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
}

.map-container h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
}

.map-container h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--accent);
}

.map-wrapper {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
}

.placeholder-map {
  width: 100%;
  position: relative;
}

.placeholder-map img {
  width: 100%;
  height: auto;
  display: block;
}

.map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: var(--primary);
}

.location-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
}

.location-icon {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  color: var(--primary);
  flex-shrink: 0;
}

.location-item h3 {
  margin-bottom: 0.5rem;
}

/* Related Events Section */
.related-events-section {
  padding: 4rem 1rem;
  background-color: var(--light-gray);
}

.related-container {
  max-width: 1200px;
  margin: 0 auto;
}

.related-container h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
}

.related-container h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--accent);
}

.related-events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.related-event-card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.related-event-card:hover {
  transform: translateY(-5px);
}

.related-image {
  width: 100%;
  height: auto;
}

.related-content {
  padding: 1.5rem;
}

.related-content h3 {
  margin-bottom: 0.5rem;
}

.related-date {
  color: var(--dark-gray);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.related-link {
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  transition: var(--transition);
}

.related-link:hover {
  color: var(--accent);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-info-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tickets-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .related-events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .location-details {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .event-title {
    font-size: 2.25rem;
  }
  
  .event-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .speakers-grid {
    grid-template-columns: 1fr;
  }
  
  .tickets-grid {
    grid-template-columns: 1fr;
  }
  
  .ticket-card.featured {
    transform: scale(1);
  }
  
  .event-cta {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .quick-info-container {
    grid-template-columns: 1fr;
  }
  
  .related-events-grid {
    grid-template-columns: 1fr;
  }
  
  .speaker-card {
    flex-direction: column;
  }
  
  .speaker-image-container {
    width: 100%;
    height: 200px;
  }
  
  .tabs-container {
    justify-content: flex-start;
  }
  
  .tab {
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
  }
}
      `}</style>
        </div>
    );
};