import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner container">
          <div className="logo">
            <a href="#">
              <img
                src="/assets/Asset 14.png"
                alt="GOREBEL Artificial Intelligence"
              />
            </a>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)}>Partners</a>
            <a href="#gartner" onClick={() => setMobileMenuOpen(false)}>Gartner</a>
            <a href="#customer-work" onClick={() => setMobileMenuOpen(false)}>Customer Work</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#about-us" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>
              Turn Enterprise Data
              <br />
              into Production-Grade
              <br />
              <span className="text-teal">AI Systems</span>
            </h1>
            <p className="hero-subtitle">
              Semantic data platforms, vector infrastructure, and
              <br />
              AI orchestration built on Azure and modern cloud—designed
              <br />
              by black-belt-level engineers.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-teal">Schedule Call</a>
              <a href="#projects" className="btn btn-outline">Explore AI Projects</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/Asset 109.png" alt="AI Neural Topology" />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="hero-wave">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--bg-soft)"
              d="M0,160 C80,60 160,60 240,160 C320,260 400,260 480,160 C560,60 640,60 720,160 C800,260 880,260 960,160 C1040,60 1120,60 1200,160 C1280,260 1360,260 1440,160 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="section who-we-are-section">
        <div className="container who-inner">
          <div className="who-content">
            <h2 className="who-title">Who We Are</h2>
            <div className="title-underline" style={{ width: "190px" }}></div>
            <p className="who-bold">
              We are South Africa’s AI enablement facility,
              helping businesses transform ideas into real,
              measurable outcomes. From strategy to
              deployment, we deliver production-ready AI
              solutions.
            </p>
            <div className="who-points">
              <p>• Based in George, Western Cape, GoRebel AI is a team of technologists and strategists building the future of business with Artificial Intelligence.</p>
              <p>• We work at the intersection of cloud technologies, edge computing, and machine learning, with full-stack deployment capabilities across Microsoft Azure and AWS environments.</p>
            </div>
          </div>
          <div className="who-image">
            <img src="/assets/Asset 98.png" alt="Who We Are Team" />
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section
        id="partners"
        className="section text-center"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="container">
          <h2 className="section-title center">Our Partners</h2>
          <div
            className="title-underline center"
            style={{ width: "220px" }}
          ></div>
          <p className="subtitle">
            Strategic cloud partners powering our AI delivery, governance, and
            production-grade outcomes.
          </p>

          <div className="partner-grid-3">
            <div className="partner-card">
              <div className="logo-wrapper">
                <img
                  src="/assets/microsoft_white.png"
                  alt="Microsoft"
                  className="external-partner-logo ms-logo"
                />
              </div>
              <h3>Microsoft</h3>
              <p className="partner-type">AI Cloud Partner</p>
              <p className="partner-badge">AZURE</p>
            </div>
            <div className="partner-card">
              <div className="logo-wrapper">
                <img
                  src="/assets/aws_white.png"
                  alt="Amazon Web Services"
                  className="external-partner-logo aws-logo"
                />
              </div>
              <h3>AWS</h3>
              <p className="partner-type">Services Partner</p>
              <p className="partner-badge">CLOUD & AI</p>
            </div>
            <div className="partner-card">
              <div className="logo-wrapper">
                <img
                  src="/assets/cloudflare_white.png"
                  alt="Cloudflare"
                  className="external-partner-logo cf-logo"
                />
              </div>
              <h3>Cloudflare</h3>
              <p className="partner-type">Builder & Consulting</p>
              <p className="partner-badge">EDGE & SECURITY</p>
            </div>
          </div>
          <a href="#contact" className="btn btn-teal mt-4">
            View Solution Architecture
          </a>
        </div>
      </section>



      {/* Gartner / Composable AI */}
      <section id="gartner" className="section container composable-ai">
        <div className="composable-image">
          <img src="/assets/Asset 94.png" alt="Modular AI Systems" />
        </div>
        <div className="composable-content text-right">
          <div className="gartner-logo-wrapper">
            <img
              src="/assets/gartner_logo_new.jpeg"
              alt="Gartner Logo"
              className="gartner-logo"
            />
            <div
              className="title-underline"
              style={{ width: "240px", margin: "0 0 25px auto" }}
            ></div>
          </div>
          <h3 className="composer-title text-right">
            Composable AI assembles reusable building blocks{" "}
            <br />
            into governed, measurable systems across clouds.
            <br />
            GoRebel applies this model to deliver outcomes
            <br />
            faster and more safely.
          </h3>
          <ul className="composer-list text-right">
            <li>
              • Modular: models, retrieval, tools, and workflows composed via
              clear interfaces.
            </li>
            <li>
              • Governed: security, observability, cost and compliance across
              devprod.
            </li>
            <li>
              • Cloud-native: built on Azure, AWS and Cloudflare with
              vector/search primitives.
            </li>
          </ul>
          <div className="text-right mt-4">
            <button className="btn btn-teal">
              Gartner's Composable Architecture
            </button>
          </div>
        </div>
      </section>

      {/* How We Work ? */}
      <section
        className="section text-center process-hub-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="container">
          <h2 className="section-title center">How we Work ?</h2>
          <div
            className="title-underline center"
            style={{ width: "240px" }}
          ></div>
          <p className="process-subtitle mb-5">
            Our process is built around real business needs and measurable
            outcomes
          </p>

          <div className="process-flow">
            {/* Background Arch SVG */}
            <div className="process-arc">
              <svg
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50,110 Q 500,650 950,110"
                  fill="none"
                  stroke="#1f2a44"
                  strokeWidth="2"
                  strokeDasharray="6,12"
                />
              </svg>
            </div>

            <div className="process-step step-1">
              <img
                src="/assets/Asset 83.png"
                alt="Identify"
                className="baked-circle-img"
              />
              <h4>Identify</h4>
              <p>
                Understand business goals,
                <br />
                pain points, and opportunities
                <br />
                for AI.
              </p>
            </div>

            <div className="process-step step-2">
              <div className="icon-circle">
                <img src="/assets/Asset 80.png" alt="Inspire" />
              </div>
              <h4>Inspire</h4>
              <p>
                Spark innovative ideas
                <br />
                using insights, data,
                <br />
                and AI trends.
              </p>
            </div>

            <div className="process-center">
              <img src="/assets/Asset 88.png" alt="AI Brain Wireframe" />
            </div>

            <div className="process-step step-3">
              <div className="icon-circle">
                <img src="/assets/Asset 79.png" alt="Implement" />
              </div>
              <h4>Implement</h4>
              <p>
                Build, train, and deploy
                <br />
                AI models tailored to
                <br />
                your business.
              </p>
            </div>

            <div className="process-step step-4">
              <img
                src="/assets/Asset 78.png"
                alt="Impact"
                className="baked-circle-img"
              />
              <h4>Impact</h4>
              <p>
                Measure success, iterate
                <br />
                continuously, and
                <br />
                optimize for results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Technologies */}
      <section
        className="section text-center"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className="container">
          <h2 className="section-title center">Specialty Technologies</h2>
          <div
            className="title-underline center"
            style={{ width: "420px" }}
          ></div>
          <div className="specialty-subtitles">
            <p className="specialty-lead">
              A focused stack of cloud, data, and foundation-model platforms we
              deliver and operationalize for production AI.
            </p>
            <p className="specialty-text">
              Our LLM specialty shines on Azure AI Foundry and AWS Bedrock,
              where we deliver secure, scalable, and
              <br />
              business-ready model experiences.
            </p>
          </div>

          <div className="tech-block">
            <div className="tech-logo">
              <img
                src="/assets/Azure Logo.svg-Cx7AJ2OM.png"
                alt="Azure Logo"
                className="brand-header-img azure-header"
              />
            </div>
            <div className="tech-grid">
              <a href="#" className="card-image-link card-active">
                <img
                  src="/assets/Azure foundry-llm base-zb4JlUX_.png"
                  alt="Azure AI Foundry"
                  className="card-icon"
                />
                <span className="card-text">Azure AI Foundry</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/Azure databricks-CDnMGYk0.png"
                  alt="Azure Databricks"
                  className="card-icon"
                />
                <span className="card-text">Azure Databricks</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/Azure fabric-B-oL-zZ-.png"
                  alt="Azure Fabric"
                  className="card-icon"
                />
                <span className="card-text">Azure Fabric</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/azure purview-Ysk-dzJY.png"
                  alt="Azure Purview"
                  className="card-icon"
                />
                <span className="card-text">Azure Purview</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/azure cosmos-DPVnOtN9.png"
                  alt="Azure Cosmos DB"
                  className="card-icon"
                />
                <span className="card-text">Azure Cosmos DB</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/azure stream analytics-DmRVKLU1.png"
                  alt="Azure Stream Analytics"
                  className="card-icon"
                />
                <span className="card-text">Azure Stream Analytics</span>
              </a>
            </div>
          </div>

          <div className="tech-block mt-5">
            <div className="tech-logo aws-logo-block">
              <img
                src="/assets/0179dSC1AqaTy8DbcTJMDYE-7.webp"
                alt="AWS Logo"
                className="brand-header-img aws-header"
              />
            </div>
            <div className="tech-grid">
              <a href="#" className="card-image-link card-active">
                <img
                  src="/assets/aws bedrock - llm base-Bov2_Lf5.png"
                  alt="AWS Bedrock"
                  className="card-icon"
                />
                <span className="card-text">AWS Bedrock</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/aws well architected-By_OPkV2.png"
                  alt="AWS Well-Architected"
                  className="card-icon"
                />
                <span className="card-text">AWS Well-Architected</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/aws redshift-DbWEXzts.png"
                  alt="AWS Redshift"
                  className="card-icon"
                />
                <span className="card-text">AWS Redshift</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/aws quicksite-DdR70wru.png"
                  alt="AWS QuickSight"
                  className="card-icon"
                />
                <span className="card-text">AWS QuickSight</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/aws athena-Cs_BJAC_.png"
                  alt="AWS Athena"
                  className="card-icon"
                />
                <span className="card-text">AWS Athena</span>
              </a>
              <a href="#" className="card-image-link">
                <img
                  src="/assets/aws dynamodb-DYNA-C0H.png"
                  alt="AWS DynamoDB"
                  className="card-icon"
                />
                <span className="card-text">AWS DynamoDB</span>
              </a>
            </div>
          </div>

          <div className="tech-footer-box">
            We specialize in building, deploying, and operating around this
            stack with DevOps, DevSecOps,
            <br />
            DevFinSecOps, and especially AI Ops.
          </div>
        </div>
      </section>


      {/* Customer Work Slider */}
      <section
        id="customer-work"
        className="customer-work section text-center"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="container">
          <h2 className="section-title center">Customer Work</h2>
          <div
            className="title-underline center"
            style={{ width: "240px" }}
          ></div>
          <div className="logo-slider">
            <div className="logo-track">
              {/* First Set */}
              <div className="logo-slide">
                <img src="/assets/Sasol.png" alt="Sasol" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 40.png" alt="Presspage" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 34.png" alt="Boomuitgevers" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 52.png" alt="Heineken" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 47.png" alt="ASML" />
              </div>
              <div className="logo-slide">
                <img src="/assets/0179dSC1AqaTy8DbcTJMDYE-7.webp" alt="AWS Logo" />
              </div>
              {/* Duplicate Set for Infinite Slide */}
              <div className="logo-slide">
                <img src="/assets/Sasol.png" alt="Sasol" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 40.png" alt="Presspage" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 34.png" alt="Boomuitgevers" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 52.png" alt="Heineken" />
              </div>
              <div className="logo-slide">
                <img src="/assets/Asset 47.png" alt="ASML" />
              </div>
              <div className="logo-slide">
                <img src="/assets/0179dSC1AqaTy8DbcTJMDYE-7.webp" alt="AWS Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="container text-center">
          <h2 className="section-title center">Projects</h2>
          <div
            className="title-underline center"
            style={{ width: "160px" }}
          ></div>
          <p className="subtitle mb-5">Projects We Brought to Life with AI</p>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-logo">
                <img src="/assets/Asset 52.png" alt="Heineken" />
              </div>
              <div className="project-details">
                <div className="pi-row">
                  <span className="pi-label">Project Title :</span>{" "}
                  <span className="pi-val">Heineken</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Summary :</span>{" "}
                  <span className="pi-val">
                    Digest incoming support emails and draft AI assisted
                    responses on Azure AI Foundry.
                  </span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Industry :</span>{" "}
                  <span className="pi-val">Food</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Outcome :</span>{" "}
                  <span className="pi-val">
                    Azure Foundry delivery with Python services and Terraform
                    foundation. 78% deflection, 25% faster response time, and EU
                    AI Act aligned controls.
                  </span>
                </div>
              </div>
              <a href="#contact" className="btn btn-teal btn-full">
                Schedule Call To View
              </a>
            </div>

            <div className="project-card">
              <div className="project-logo pb-logo">
                <img src="/assets/Asset 47.png" alt="ASML" />
              </div>
              <div className="project-details">
                <div className="pi-row">
                  <span className="pi-label">Project Title :</span>{" "}
                  <span className="pi-val">ASML</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Summary :</span>{" "}
                  <span className="pi-val">
                    Hybrid Azure AI Foundry platform for sensitive IP, with
                    semantic search and SharePoint connectors.
                  </span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Industry :</span>{" "}
                  <span className="pi-val">Electronics and Engineering</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Outcome :</span>{" "}
                  <span className="pi-val">
                    Hybrid deployment (Azure plus local data center), Python
                    services, and Terraform foundation. 20,000 users, 45% faster
                    discovery, and secure access controls.
                  </span>
                </div>
              </div>
              <a href="#contact" className="btn btn-teal btn-full">
                Schedule Call To View
              </a>
            </div>

            <div className="project-card">
              <div className="project-logo pb-logo">
                <img src="/assets/Asset 40.png" alt="Presspage" />
              </div>
              <div className="project-details">
                <div className="pi-row">
                  <span className="pi-label">Project Title :</span>{" "}
                  <span className="pi-val">Heineken</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Summary :</span>{" "}
                  <span className="pi-val">
                    Digest incoming support emails and draft AI assisted
                    responses on Azure AI Foundry.
                  </span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Industry :</span>{" "}
                  <span className="pi-val">Food</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Outcome :</span>{" "}
                  <span className="pi-val">
                    Azure Foundry delivery with Python services and Terraform
                    foundation. 78% deflection, 25% faster response time, and EU
                    AI Act aligned controls.
                  </span>
                </div>
              </div>
              <a href="#contact" className="btn btn-teal btn-full">
                Schedule Call To View
              </a>
            </div>

            <div className="project-card">
              <div className="project-logo pb-logo">
                <img src="/assets/Asset 34.png" alt="Boomuitgevers" />
              </div>
              <div className="project-details">
                <div className="pi-row">
                  <span className="pi-label">Project Title :</span>{" "}
                  <span className="pi-val">ASML</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Summary :</span>{" "}
                  <span className="pi-val">
                    Hybrid Azure AI Foundry platform for sensitive IP, with
                    semantic search and SharePoint connectors.
                  </span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Industry :</span>{" "}
                  <span className="pi-val">Electronics and Engineering</span>
                </div>
                <div className="pi-row">
                  <span className="pi-label">Outcome :</span>{" "}
                  <span className="pi-val">
                    Hybrid deployment (Azure plus local data center), Python
                    services, and Terraform foundation. 20,000 users, 45% faster
                    discovery, and secure access controls.
                  </span>
                </div>
              </div>
              <a href="#contact" className="btn btn-teal btn-full">
                Schedule Call To View
              </a>
            </div>
          </div>

          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gorebel-stats-wrapper">
        <div className="container">
          <div className="stats-main-grid">
            <div className="stats-row top-stats">
              <div className="stats-card">
                <div className="stats-icon-box">
                  <img src="/assets/Asset 32.png" alt="7+ Years" />
                </div>
                <h4>7+ Years</h4>
                <p>in AI Enablement</p>
              </div>
              <div className="stats-card">
                <div className="stats-icon-box">
                  <img src="/assets/Asset 27.png" alt="50+ AI Projects" />
                </div>
                <h4>50+ AI Projects</h4>
                <p>Delivered Successfully</p>
              </div>
              <div className="stats-card">
                <div className="stats-icon-box">
                  <img src="/assets/Asset 24.png" alt="Partners" />
                </div>
                <h4>Microsoft + AWS + Cloudflare</h4>
                <p>Solution Providers and Partners</p>
              </div>
            </div>
            
            <div className="stats-row bottom-stats">
              <div className="stats-card">
                <div className="stats-icon-box">
                  <img src="/assets/cloud_stats_icon.png" alt="12+ Years Cloud Icon" />
                </div>
                <h4>12+ Years</h4>
                <p>in AI Enablement</p>
              </div>
              <div className="stats-card">
                <div className="stats-icon-box">
                  <img src="/assets/team_stats_icon.png" alt="150+ Years Team Icon" />
                </div>
                <h4>150+ Years</h4>
                <p>Collective experience of our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="section container text-center">
        <h2 className="section-title center">Contact Us</h2>
        <div
          className="title-underline center"
          style={{ width: "190px" }}
        ></div>
        <p className="subtitle mb-4 fw-700">
          We'd like to hear from you! Please fill out the form and we'll get
          back to you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="First name"
              className="form-input"
            />
            <input
              type="text"
              placeholder="First name"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              placeholder="Email*"
              className="form-input full"
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-input full"
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Your Message"
              className="form-input full textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-teal submit-btn">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer-wrap">
        <div className="footer-wave">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--dark-navy)"
              d="M0,160 C80,60 160,60 240,160 C320,260 400,260 480,160 C560,60 640,60 720,160 C800,260 880,260 960,160 C1040,60 1120,60 1200,160 C1280,260 1360,260 1440,160 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
        <div className="footer">
          <div className="footer-main container">
            <div className="footer-col-1">
              <div className="footer-logo">
                <a href="#">
                  <img src="/assets/New-gorebel-logo.png" alt="GOREBEL" style={{ maxWidth: "220px" }} />
                </a>
              </div>
              <p className="footer-text mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam,
              </p>
              <div className="social-links mt-3">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="footer-col-2">
              <h4>Useful Links</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#gartner">Gartner</a></li>
                <li><a href="#customer-work">Customer Work</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about-us">About Us</a></li>
              </ul>
            </div>

            <div className="footer-col-3">
              <h4>Contact Us</h4>
              <p className="footer-text mt-3">927 Tait St, Marikana, North West, South Africa</p>
              <p className="footer-text mt-2">
                <a href="mailto:help@gorebelai.com" style={{ color: "white", textDecoration: "none" }}>help@gorebelai.com</a>
              </p>
              <p className="footer-text mt-2">
                <a href="tel:+2800857419095" style={{ color: "white", textDecoration: "none", fontWeight: '700' }}>
                  (+280)085 741 9095
                </a>
              </p>
            </div>
          </div>

          <div className="footer-newsletter-row container">
            <div className="newsletter-text">
              <h4 className="text-teal mb-1">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <p className="footer-text">Never Miss Anything From Gorebel By Signing Up To Our Newsletter</p>
            </div>
            <div className="newsletter-form">
              <div className="newsletter-input-group">
                <input type="email" placeholder="Enter Your Email" />
                <button className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom pb-4 text-center">
            <div className="container footer-bottom-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowCookieModal(true); }}>Cookie Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={() => setShowPrivacyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowPrivacyModal(false)}
            >
              ×
            </button>
            <h3>Privacy Policy</h3>
            
            <div className="modal-body-text">
              <div className="modal-section">
                GoRebel AI ("GoRebel", "we", "us") is committed to protecting your personal data. We only collect what we need to respond to enquiries, provide services, and improve our site.
              </div>
              
              <div className="modal-section">
                <strong>What we collect:</strong> name, email, phone and any message you provide. We also process technical analytics (see Cookie Policy).
              </div>
              
              <div className="modal-section">
                <strong>How we use it:</strong> to contact you, manage our relationship, and operate our services. We do not sell your data.
              </div>
              
              <div className="modal-section">
                <strong>Processors:</strong> we use trusted providers including HubSpot (CRM), Google Analytics (usage analytics) and Cloudflare (security and performance).
              </div>
              
              <div className="modal-section">
                <strong>Retention:</strong> we keep data only as long as needed for the purpose collected or to comply with legal obligations.
              </div>
              
              <div className="modal-section">
                <strong>Your rights:</strong> you may request access, correction, deletion or restriction of your personal data. Contact: <a href="mailto:service@gorebel.ai" className="modal-link">service@gorebel.ai</a>.
              </div>
              
              <div className="modal-section">
                <strong>Security:</strong> we apply reasonable technical and organisational measures to protect data.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {showCookieModal && (
        <div className="modal-overlay" onClick={() => setShowCookieModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowCookieModal(false)}
            >
              ×
            </button>
            <h3>Cookie Policy</h3>
            
            <div className="modal-body-text">
              <div className="modal-section">
                We use cookies and similar technologies to operate this site and understand usage.
              </div>
              
              <div className="modal-section">
                <strong>Analytics:</strong> Google Analytics helps us measure visits and improve the website. Data is aggregated and does not include direct identifiers.
              </div>
              
              <div className="modal-section">
                <strong>Performance/Security:</strong> Cloudflare may set cookies for bot mitigation, content delivery and reliability.
              </div>
              
              <div className="modal-section">
                <strong>Preferences:</strong> You can control cookies in your browser settings. Blocking some cookies may impact site functionality.
              </div>
              
              <div className="modal-section">
                For questions, contact <a href="mailto:service@gorebel.ai" className="modal-link">service@gorebel.ai</a>.
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Terms of Use Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowTermsModal(false)}
            >
              ×
            </button>
            <h3>Terms of Use</h3>
            
            <div className="modal-body-text">
              <div className="modal-section">
                By using this website, you agree to these terms.
              </div>
              
              <div className="modal-section">
                <strong>Partner with GoRebel:</strong> partnership content is informational and does not constitute a binding offer or commitment.
              </div>
              
              <div className="modal-section">
                <strong>Program availability:</strong> eligibility and benefit values depend on provider approval and current program terms.
              </div>
              
              <div className="modal-section">
                <strong>No warranty:</strong> the site and content are provided "as is" without warranties of any kind.
              </div>
              
              <div className="modal-section">
                <strong>Limitation of liability:</strong> to the maximum extent permitted by law, GoRebel is not liable for any indirect, incidental, special or consequential damages arising from your use of the site.
              </div>
              
              <div className="modal-section">
                <strong>Permitted use:</strong> do not misuse the site, attempt unauthorised access, or infringe intellectual property rights.
              </div>
              
              <div className="modal-section">
                <strong>Intellectual property:</strong> all trademarks, logos and content are the property of their respective owners.
              </div>
              
              <div className="modal-section">
                <strong>Changes:</strong> we may update these terms from time to time. Continued use indicates acceptance of changes.
              </div>
              
              <div className="modal-section">
                Contact: questions about these terms can be sent to <a href="mailto:service@gorebel.ai" className="modal-link">service@gorebel.ai</a>.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
