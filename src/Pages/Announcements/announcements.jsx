import { useState, useEffect, useRef, useCallback, memo } from "react";
import PropTypes from "prop-types";
import "./announcement.css";

// Fix display name for CustomVideo component
const CustomVideo = memo(function CustomVideo({ item, onInView }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoId = item.id;
  const [videoState, setVideoState] = useState({
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    muted: false,
    loading: true,
    inView: false,
  });

  // Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoState((prev) => ({ ...prev, inView: true }));
            onInView && onInView(videoId);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoId, onInView]);

  // Optimize event listeners with cleanup
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !videoState.inView) return;

    const handlePlay = () =>
      setVideoState((prev) => ({ ...prev, playing: true }));
    const handlePause = () =>
      setVideoState((prev) => ({ ...prev, playing: false }));
    const handleWaiting = () =>
      setVideoState((prev) => ({ ...prev, loading: true }));
    const handleCanPlay = () =>
      setVideoState((prev) => ({ ...prev, loading: false }));
    const handleTimeUpdate = () => {
      setVideoState((prev) => ({
        ...prev,
        currentTime: videoElement.currentTime,
      }));
    };
    const handleLoadedMetadata = () => {
      setVideoState((prev) => ({
        ...prev,
        duration: videoElement.duration,
        loading: false,
      }));
    };

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("waiting", handleWaiting);
    videoElement.addEventListener("canplay", handleCanPlay);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Preload metadata only
    videoElement.preload = "metadata";

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("waiting", handleWaiting);
      videoElement.removeEventListener("canplay", handleCanPlay);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoId, videoState.inView]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current || !videoState.inView) return;

    if (videoState.playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [videoState.playing, videoState.inView]);

  const handleSeek = useCallback(
    (e) => {
      if (!videoRef.current || !videoState.inView) return;

      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * videoState.duration;

      videoRef.current.currentTime = newTime;
    },
    [videoState.duration, videoState.inView]
  );

  const handleVolumeChange = useCallback(
    (value) => {
      if (!videoRef.current || !videoState.inView) return;

      const newVolume = parseFloat(value);
      videoRef.current.volume = newVolume;

      setVideoState((prev) => ({
        ...prev,
        volume: newVolume,
        muted: newVolume === 0,
      }));
    },
    [videoState.inView]
  );

  const toggleMute = useCallback(() => {
    if (!videoRef.current || !videoState.inView) return;

    const newMuted = !videoState.muted;
    videoRef.current.muted = newMuted;

    setVideoState((prev) => ({
      ...prev,
      muted: newMuted,
      volume: newMuted ? 0 : prev.volume > 0 ? prev.volume : 0.5,
    }));
  }, [videoState.muted, videoState.inView]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current || !videoState.inView) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }, [videoState.inView]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!videoState.inView) {
    return (
      <div
        ref={containerRef}
        className="video-placeholder"
        style={{ width: item.media.style?.width || "100%", height: "200px" }}
      >
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`custom-video-container ${
        videoState.loading ? "loading" : ""
      }`}
    >
      <video
        ref={videoRef}
        preload="metadata"
        onClick={togglePlay}
        poster="/video-poster.jpg" // Add a placeholder poster
      >
        <source src={item.media.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading spinner */}
      {videoState.loading && <div className="loading-spinner"></div>}

      {/* Initial play overlay */}
      <div
        className={`video-overlay ${videoState.playing ? "hidden" : ""}`}
        onClick={togglePlay}
      >
        <div className="play-icon">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Custom controls - simplified for performance */}
      <div className="video-controls">
        <button className="play-pause-btn" onClick={togglePlay}>
          {videoState.playing ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="progress-container" onClick={handleSeek}>
          <div
            className="progress-bar"
            style={{
              width: `${
                (videoState.currentTime / videoState.duration) * 100 || 0
              }%`,
            }}
          ></div>
        </div>

        <div className="time-display">
          {formatTime(videoState.currentTime)} /{" "}
          {formatTime(videoState.duration)}
        </div>

        <div className="volume-container">
          <button className="volume-btn" onClick={toggleMute}>
            {videoState.muted ? (
              <svg viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={videoState.volume}
            onChange={(e) => handleVolumeChange(e.target.value)}
            className="volume-slider"
          />
        </div>

        <button className="fullscreen-btn" onClick={toggleFullscreen}>
          <svg viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
});

CustomVideo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    media: PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      style: PropTypes.object,
    }).isRequired,
  }).isRequired,
  onInView: PropTypes.func,
};

// Fix display name for AnnouncementCard component
const AnnouncementCard = memo(function AnnouncementCard({
  item,
  onVideoInView,
}) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{item.title}</h2>
        {item.details && <p>{item.details}</p>}
        {item.details2 && <p>{item.details2}</p>}
        {item.details3 && <p>{item.details3}</p>}
        {item.details4 && <p>{item.details4}</p>}
      </div>

      {item.media && (
        <div className="media-container">
          {item.media.type === "image" && (
            <img
              src={item.media.url}
              alt={item.title || "Announcement image"}
              className="media"
              loading="lazy" // Native lazy loading for images
            />
          )}
          {item.media.type === "video" &&
            (item.media.url.includes("youtube.com/embed") ? (
              <div className="video-wrapper">
                <iframe
                  src={item.media.url}
                  title={item.title || "YouTube video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ) : item.media.url.includes("instagram.com") ? (
              <div className="video-wrapper">
                <iframe
                  src={item.media.embedUrl}
                  title={item.title || "Instagram video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              <CustomVideo item={item} onInView={onVideoInView} />
            ))}
        </div>
      )}
    </div>
  );
});

AnnouncementCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    details: PropTypes.string,
    details2: PropTypes.string,
    details3: PropTypes.string,
    details4: PropTypes.string,
    media: PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      embedUrl: PropTypes.string,
      style: PropTypes.object,
    }),
  }).isRequired,
  onVideoInView: PropTypes.func,
};

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const activeVideosRef = useRef(new Set()); // Use ref instead of state since we don't need re-renders
  const videoLimitRef = useRef(2); // Use ref for consistency

  const itemsPerPage = 2;

  // Handle video in view to limit active videos
  const handleVideoInView = useCallback((videoId) => {
    const newSet = new Set(activeVideosRef.current);
    // Limit to videoLimit active videos at a time
    if (newSet.size >= videoLimitRef.current) {
      const oldestVideo = Array.from(newSet)[0];
      newSet.delete(oldestVideo);
    }
    newSet.add(videoId);
    activeVideosRef.current = newSet;
  }, []); // N

  // Mock API fetch
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = [
        {
          id: 1,
          title:
            "Invited on SCAN TV: Discussing the Impact of State Administration Salary Increases on Private Business Behavior 🤔",
          category: "Interviews",
          details:
            "The anticipated salary increases in state administration are likely to pressure private sector employers to raise wages to retain employees and stay competitive. This challenge may strain small and medium-sized businesses with limited resources. Alternatively, some companies might focus on improving working conditions or offering non-financial benefits to attract talent.",
          media: {
            type: "video",
            url: "https://www.youtube.com/embed/IPU8XihwMB8",
            style: { width: "400px" },
          },
        },
        {
          id: 2,
          title:
            "Invited on SCAN TV: Addressing the Risks Faced by Minors in the Workplace 👷‍♂️⚠️",
          category: "Interviews",
          details:
            "The employment of minors can lead to violations of basic rights, exposure to hazardous conditions, and harm to their development. Minors often engage in illegal or exploitative work, increasing their risk of abuse. Strengthening law enforcement, educating families and employers, and promoting educational opportunities are crucial to ensuring a safer, more sustainable future for minors.",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid.mp4",
            style: { width: "360px" },
          },
        },
        {
          id: 3,
          title:
            "Invited on SCAN TV: Can Employment of Minors Solve the Workforce Crisis?",
          category: "Interviews",
          details:
            "Using minors to address the labor crisis raises serious ethical, legal, and social concerns, as it often violates their rights and harms their development. Instead of exploiting minors, it is crucial to invest in policies that promote vocational training, improve working conditions, and attract talent from underrepresented population groups. These efforts should always respect legal and ethical standards. Ultimately, protecting minors and investing in sustainable solutions is the responsible approach.",
          media: {
            type: "video",
            url: "/instavid2.mp4",
            style: { width: "360px" },
          },
        },
        {
          id: 4,
          title: "Invited on SCAN TV: Can businesses employ minors?",
          category: "Interviews",
          details:
            "Employment of minors is allowed in many areas but is strictly regulated to protect their health, safety, and well-being. Laws limit the types of work, working hours, and minimum age for employment, requiring businesses to avoid legal and ethical violations. Compliance with these regulations is crucial to ensure the employment of minors aligns with international children's rights standards.",
          media: {
            type: "video",
            url: "/instavid3.mp4",
            style: { width: "360px" },
          },
        },
        {
          id: 6,
          title:
            "Shargan Consulting completed the pilot project in the preparation of applicants for the position of 'Human Resources Specialist'. Thank you Ms. Jurgensa Dosti for the professionalism and commitment..🙏👏",
          category: "Trainings",
          media: {
            type: "image",
            url: "/training.jpg",
            style: { width: "360px" },
          },
        },
        {
          id: 7,
          title:
            "Ms. Jurgensa expresses her gratitude: 'I would like to sincerely thank @shargan_consulting for providing me with such a valuable and enriching experience. It has truly been a rewarding journey, and I am grateful from the bottom of my heart. ❤️'",
          category: "Trainings",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training2.mp4",
            style: { width: "360px" },
          },
        },
        {
          id: 8,
          title:
            "Paradoxical leadership is the way of management that manages to balance the opposite needs that enable the growth of the company, in an almost natural way. Soon we will have the opportunity to organize this training again.",
          category: "Trainings",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training3.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 10,
          title:
            "The month of March is dedicated to the figure of the woman and Shargan Consulting shared with the participants the topic 'Executive presence of the woman (not masculinized) at work' with trainer Dr. Matilda Likaj.",
          category: "Trainings",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training5.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 11,
          title:
            "The training conducted on 24.02.2024 on the analysis and prevention of staff turnover by Shargan Consulting, enabled us to discuss with professionals from different industries the real situation of Albanian companies and the importance of taking measures against this phenomenon.",
          category: "Trainings",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training6.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 12,
          title:
            "Training-discussion 'We said to work, but not to die from working hours' P, on the balance of professional life-personal life, for which everyone fights.",
          category: "Trainings",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training7.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 13,
          title:
            "Round table with Primary Dental staff on team building, customer care and sales strategies to enhance collaboration, improve patient satisfaction, and drive business growth",
          category: "Trainings",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training8.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 14,
          title:
            "Staff turnover is the wound that damages Albanian companies every day. Analysis of the causes and measures to reduce the percentage have become necessary. Shargan Consulting is ready to help reduce this phenomenon.",
          category: "Employer-Employee Dynamics",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training9.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 15,
          title: "Employers, attention! See what employees are looking for.",
          category: "Employer-Employee Dynamics",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training10.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 17,
          title:
            "Shargan Consulting offers the new program of mentoring and theoretical and professional preparation in the position of 'Human Resources Specialist' as well as the possibility of presenting applicants' candidacies to interested companies",
          category: "Trainings",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training11.mp4",
            style: { width: "300px" },
          },
        },

        {
          id: 19,
          title: "Two important elements in an interview",
          category: "Employer-Employee Dynamics",
          details:
            "Two important elements in an interview are preparation and effective communication. Preparation involves researching the company, understanding the role, and practicing responses to common questions. Effective communication ensures you present your skills clearly, maintain professionalism, and build a positive connection with the interviewer.",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training12.mp4",
            style: { width: "300px" },
          },
        },
        {
          id: 22,
          title: "How to understand TOXIC employees",
          category: "Employer-Employee Dynamics",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training13.mp4",
            style: { width: "320px" },
          },
        },
        {
          id: 24,
          title: "Let's develop empathy together",
          category: "Motivational Talks",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training15.mp4",
            style: { width: "320px" },
          },
        },
        {
          id: 25,
          title: "Shargan OFFERS...",
          category: "Shargan OFFERS...",
          details2:
            "Shargan Consulting is a dynamic company offering personalized services in human resources management, recruitment, training, and talent development, with a focus on local and international businesses, while also providing leadership mentorship, customized programs, and support for international students through Student Journey Albania.",
          media: {
            type: "video",
            url: "/infoservice.mp4",
            style: { width: "320px" },
          },
        },
        {
          id: 26,
          title: "Good generations can make the future better",
          category: "Motivational Talks",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training16.mp4",
          },
        },
        {
          id: 27,
          title: "Let's cheers only for values",
          category: "Motivational Talks",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training17.mp4",
          },
        },
      ];
      // Simulate a slower API response for testing
      setTimeout(() => {
        setAnnouncements(data);
        setFiltered(data);
      }, 100);
    };

    fetchAnnouncements();
  }, []);

  // Handle filtering with useCallback to prevent unnecessary re-renders
  const handleFilter = useCallback(
    (selectedCategory) => {
      setCategory(selectedCategory);

      if (selectedCategory === "All") {
        setFiltered(announcements);
      } else {
        setFiltered(
          announcements.filter((item) => item.category === selectedCategory)
        );
      }
      setCurrentPage(1);
    },
    [announcements]
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="announcements-section">
      <div className="filters">
        {[
          "All",
          "Shargan OFFERS...",
          "Interviews",
          "Trainings",
          "Employer-Employee Dynamics",
          "Motivational Talks",
        ].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="announcement-cards">
        {currentItems.map((item) => (
          <AnnouncementCard
            key={item.id}
            item={item}
            onVideoInView={handleVideoInView}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filtered.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Announcements;
