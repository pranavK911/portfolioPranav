import React from "react";
import { Layers, Globe, Smartphone, Monitor, Download } from "lucide-react";
import "./Pages.css";

const About = () => {
  return (
    <article className="article about fade-in">
      <header>
        <h2 className="article-title">About Me</h2>
      </header>

      <div
        className="download-resume-button"
        role="button"
        tabIndex={0}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1BcFM-kKfDwdu7APft9xkp4RPLYH9QeDV/view",
            "_blank",
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.open(
              "https://drive.google.com/file/d/1BcFM-kKfDwdu7APft9xkp4RPLYH9QeDV/view",
              "_blank",
            );
          }
        }}
      >
        <Download size={18} strokeWidth={2.4} />
        <span>Download Resume</span>
      </div>

      <section className="about-text">
        <p>
          I'm <b>Pranav Kumar</b>, a Software Developer based in Patna, Bihar,
          India, focused on building scalable, high-performance applications
          across mobile, web, and <b>native iOS platforms</b>.
        </p>

        <p>
          I specialize in React, React Native, <b>SwiftUI</b>, Node.js, and
          Firebase, creating seamless{" "}
          <b>cross-platform and native experiences</b> with a strong emphasis on
          performance, clean architecture, and user-centric design.
        </p>

        <p>
          I enjoy solving real-world problems and building impactful digital
          products with smooth user experiences across{" "}
          <b>mobile, web, and iOS</b>.
        </p>
      </section>

      <section className="service">
        <h3 className="service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Smartphone size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Mobile App Development</h4>
              <p className="service-item-text">
                Building cross-platform mobile apps using React Native for
                Android and iOS.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Globe size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Web Development</h4>
              <p className="service-item-text">
                Developing fast and responsive web applications using React and
                modern frontend technologies.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Layers size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Backend Development</h4>
              <p className="service-item-text">
                Firebase, and REST APIs. Experienced in authentication,
                real-time databases, cloud functions, and mobile app
                integration.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Monitor size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">App Deployment</h4>
              <p className="service-item-text">
                Publishing and managing applications on Google Play Store and
                Apple App Store.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3 className="skills-title">Skills</h3>

        <div className="skills-container">
          <div className="skills-track">
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg" />
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
            </div>
            <div className="skill">
              <img src="/skills/Firebase.svg" />
            </div>

            <div className="skill">
              <img src="/skills/Postman.svg" alt="Postman" />
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            </div>

            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
              />
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
                alt="Xcode"
              />
            </div>
            <div className="skill">
              <img src="/skills/apple.svg" alt="Apple" />
            </div>
            <div className="skill">
              <img src="skills/android.svg" alt="Android " />
            </div>
            <div className="skill">
              <img
                src="https://cdn.simpleicons.org/appstore"
                alt="App Store "
              />
            </div>
            <div className="skill">
              <img
                src="https://cdn.simpleicons.org/googleplay/4285F4"
                alt="Google Play "
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
