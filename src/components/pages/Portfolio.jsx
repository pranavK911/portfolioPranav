import React, { useState } from "react";
import { Eye } from "lucide-react";
import "./Pages.css";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mobile Apps", "Web Apps", ];

  const projects = [
    {
      id: 1,
      title: "Smart E-commerce App",
      category: "Mobile Apps",
      image: "/projects/appicon.png",
      link: "/apk/se.apk",
    },

    {
      id: 2,
      title: "ChatCode",
      category: "Mobile Apps",
      image: "/projects/chatCode.png",
      link: "/apk/chatCode.apk",
    },

    {
      id: 3,
      title: "SafeZ",
      category: "Mobile Apps",
      image: "/projects/safez.png",
      link: "#",
    },

    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Apps",
      image: "/projects/portfolio.png",
      link: "#",
    },

    {
      id: 5,
      title: "Booking App ",
      category: "Web Apps",
      image: "/projects/Book.png",
      link: "#",
    },
    {
      id: 6,
      title: "Mumma’s Magic Cakes",
      category: "Web Apps",
      image: "/projects/cake.png",
      link: "https://project-rda-3rtf.vercel.app/",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
         project.category === activeTab);

  const getApkFileName = (title) => `${title.trim()}.apk`;

  const handleProjectClick = (e, project) => {
    if (!project.link.endsWith(".apk")) return;

    e.preventDefault();
    const apkName = getApkFileName(project.title);
    const confirmed = window.confirm(
      `Do you want to download ${project.title} (${apkName})?`
    );

    if (confirmed) {
      const link = document.createElement("a");
      link.href = project.link;
      link.download = apkName;
      link.click();
    }
  };

  return (
    <article className="article portfolio fade-in">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Filter Tabs */}

      <ul className="filter-list">
        {tabs.map((tab) => (
          <li className="filter-item" key={tab}>
            <button
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Project List */}

      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li className="project-item" key={project.id}>
            <a
              href={project.link}
              onClick={(e) => handleProjectClick(e, project)}
              {...(project.link.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <figure className="project-img-box">
                <img src={project.image} alt={project.title} loading="lazy" />

                <div className="project-item-icon-box">
                  <Eye size={20} />
                </div>
              </figure>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;
