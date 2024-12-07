import React, { useState, useEffect } from "react";
import "./announcement.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;

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
          id: 9,
          title:
            "The next training from Shargan Consulting will deal with a very interesting topic 'Paradoxical leadership, the opposite who fit' on 06.04.2024 at 11:00 near its offices in Pajtoni Center. We welcome you!",
          category: "Trainings",

          media: {
            type: "image",
            url: "/training4.jpg",
            style: { width: "345px" },
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
          id: 16,
          title:
            "Shargan Consulting, in the next collaboration with the best companies in the market, offers employment",
          category: "Job Offer",

          media: {
            type: "image",
            url: "/njoftim.jpg",
            style: { width: "305px" },
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
          id: 18,
          title: "Human resources in Albania...",
          category: "Interviews",
          details:
            "Human resources in Albania have advanced, focusing on talent development, employee retention, and global standards. Despite challenges like skill gaps, high turnover, and migration, organizations are improving workplace culture and offering growth opportunities. These efforts aim to meet the evolving demands of the local labor market.",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid4.mp4",
            style: { width: "450px" },
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
          id: 20,
          title: "Interview with piskproduction!! (part 1)",
          category: "Interviews",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid6.mp4",
          },
        },
        {
          id: 21,
          title: "Interview with piskproduction!! (part 2)",
          category: "Interviews",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid5.mp4",
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
          id: 23,
          title:
            "'Burnout, awareness, identification, treatment' training cycles began",
          category: "Trainings",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training14.mp4",
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
        {
          id: 28,
          category: "Motivational Talks",
          media: {
            type: "image",
            url: "/training18.jpg",
            style: { width: "410px" },
          },
        },
        {
          id: 29,
          category: "Motivational Talks",
          media: {
            type: "image",
            url: "/training19.jpg",
            style: { width: "410px" },
          },
        },
        {
          id: 30,
          category: "Motivational Talks",
          media: {
            type: "image",
            url: "/training20.jpg",
            style: { width: "410px" },
          },
        },
        {
          id: 31,
          title: "COMING SOON",
          category: "Trainings",
          media: {
            type: "image",
            url: "/training21.jpg",
            style: { width: "410px" },
          },
        },
        {
          id: 32,
          title: "COMING SOON",
          category: "Trainings",
          media: {
            type: "image",
            url: "/training22.jpg",
            style: { width: "410px" },
          },
        },
        {
          id: 33,
          title: "COMING SOON",
          category: "Trainings",
          media: {
            type: "image",
            url: "/training23.jpg",
            style: { width: "410px" },
          },
        },
      ];
      setAnnouncements(data);
      setFiltered(data);
    };

    fetchAnnouncements();
  }, []);

  // Handle filtering
  const handleFilter = (category) => {
    setCategory(category);
    if (category === "All") {
      setFiltered(announcements);
    } else {
      setFiltered(announcements.filter((item) => item.category === category));
    }
    setCurrentPage(1);
  };

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
          "Job Offer",
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
        {currentItems.map((item) => {
          // Apply the width style only when the category is "Job Offer" and category is not "All"
          const mediaStyle =
          category === "Job Offer" && item.category === "Job Offer"
          ? { width: "310px" }
          : {};

          return (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.details}</p>
              <p>{item.details2}</p>
              <p>{item.details3}</p>
              <p>{item.details4}</p>
              {item.media && item.media.type === "image" && (
                <img
                  src={item.media.url}
                  alt={item.title}
                  className="media"
                  style={{ ...item.media.style, ...mediaStyle }} // Combine styles only for "Job Offer"
                />
              )}
              {item.media &&
                item.media.type === "video" &&
                (item.media.url.includes("youtube.com/embed") ? (
                  <div className="video-wrapper">
                    <iframe
                      src={item.media.url}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ ...item.media.style, ...mediaStyle }} // Apply style only for "Job Offer"
                    ></iframe>
                  </div>
                ) : item.media.url.includes("instagram.com") ? (
                  <div className="video-wrapper">
                    <iframe
                      src={item.media.embedUrl}
                      title={item.title}
                      width="400"
                      height="600"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ ...item.media.style, ...mediaStyle }} // Apply style only for "Job Offer"
                    ></iframe>
                  </div>
                ) : (
                  <video controls className="media" style={{ ...item.media.style, ...mediaStyle }}>
                    <source src={item.media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
            </div>
          );
        })}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filtered.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
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