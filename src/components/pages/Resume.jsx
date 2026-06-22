import React from "react";
import { BookOpen, Briefcase } from "lucide-react";
import "./Pages.css";
import "./Resume.css";
import zeenoCertificate from "../../assets/certificate/zeeno.png";
import codeQueryCertificate from "../../assets/certificate/cq0.png";
const Resume = () => {
  return (
    <article className="article resume fade-in">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Experience */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={20} />
          </div>
          <h3 className="timeline-title">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Mobile App Developer Intern at CodeQuery
            </h4>
            <span>January 2026 — April 2026</span>
            <p className="timeline-text">
              Contributed to building scalable mobile applications for iOS and
              Android using React Native. Developed reusable components,
              integrated APIs, enhanced app performance, and assisted in
              deployment through Xcode, Apple App Store, and Google Play
              Console.
            </p>
            <button
              className="certificate-btn"
              onClick={() => window.open(codeQueryCertificate, "_blank")}
            >
              View Certificate
            </button>
          </li>
          <li className="timeline-item">
            <h4
              className="timeline-item-title"
            >
              Frontend Developer Intern at Zeeno Tech
            </h4>
            <span>September 2025 — December 2025</span>
            <p className="timeline-text">
              Built and maintained responsive web applications using React.js,
              JavaScript, HTML, and CSS. Implemented reusable components,
              integrated APIs, translated UI/UX designs into interactive
              interfaces, and collaborated with the team to deliver scalable and
              optimized frontend solutions.
            </p>
            <button
              className="certificate-btn"
              onClick={() => window.open(zeenoCertificate, "_blank")}
            >
              View Certificate
            </button>
          </li>
        </ol>
      </div>

      {/* Education */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={20} />
          </div>
          <h3 className="timeline-title">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Bachelor of Computer Applications (BCA)
            </h4>
            <span>2021 — 2024</span>
            <p className="timeline-text">
              Studied computer science fundamentals including programming,
              database systems, web technologies and software engineering.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Intermediate (Science)</h4>
            <span>2018 — 2020</span>
            <p className="timeline-text">
              Completed higher secondary education with focus on mathematics.
            </p>
          </li>
        </ol>
      </div>
    </article>
  );
};

export default Resume;
