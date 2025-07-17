import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

export default function LandingPage() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Post Generation",
      desc: "Create LinkedIn posts that match your voice. No more generic AI fluff.",
    },
    {
      icon: "🗣️",
      title: "Tone Modeling Engine",
      desc: "We learn your writing style so every post sounds authentically like you.",
    },
    {
      icon: "📅",
      title: "Auto-Scheduling",
      desc: "Plan and automate your post schedule for consistent growth.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      desc: "Track what content works best and optimize your strategy.",
    },
  ];

  return (
    <>
      {/* Header */}
<header className="bg-white py-3 border-bottom sticky-top shadow-sm">
  <div className="container d-flex justify-content-between align-items-center">
    
    {/* Logo */}
    <a href="#" className="navbar-brand d-flex align-items-center">
      <img src="LinqAI_logo.png" alt="LinqAI Logo" width="32" className="me-2" />
      <span className="fw-bold fs-5 text-dark mb-0">LinqAI</span>
    </a>

    {/* Navigation Links */}
    <nav className="d-none d-md-flex align-items-center gap-4">
      <a href="#features" className="text-dark text-decoration-none">Features</a>
      <a href="#testimonials" className="text-dark text-decoration-none">Testimonials</a>
      <a href="#posts" className="text-dark text-decoration-none">Post Ideas</a>
      {/* <div className="dropdown">
        <a className="text-dark text-decoration-none dropdown-toggle" role="button" data-bs-toggle="dropdown">
          Resources
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Blog</a></li>
          <li><a className="dropdown-item" href="#">Help Center</a></li>
          <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
        </ul>
      </div> */}
    </nav>

    {/* Buttons triggering modal */}
    <div className="d-flex align-items-center gap-2">
      <button 
            className="btn btn-outline-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
            onClick={() => {
              setTimeout(() => {
                document.getElementById("login-tab").click();
              }, 200); // wait for modal to open
            }}
          >
            Login
          </button>
      <button 
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
            onClick={() => {
              setTimeout(() => {
                document.getElementById("signup-tab").click();
              }, 200); // wait for modal to open
            }}
          >
            Get Started
          </button>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-white" style={{ minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <h1 className="display-4 fw-bold mb-3">
                Your LinkedIn content assistant, powered <br />
                by AI.
              </h1>
              <p className="lead mb-4">
                LinqAI helps you write better, faster, and smarter — while <br />
                keeping your unique voice.
              </p>
              <button 
            className="btn btn-light btn-lg text-dark fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
            onClick={() => {
              setTimeout(() => {
                document.getElementById("signup-tab").click();
              }, 200); // wait for modal to open
            }}
          >
            Get Started for Free
          </button>

            </div>
    </div>
  </div>
</section>


      {/* Features */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What LinqAI Offers</h2>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h4 className="fw-semibold mb-2">
                    {feature.icon} {feature.title}
                  </h4>
                  <p className="text-muted mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
<section id="testimonials" className="bg-light py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">
      LinkedIn™ Top Voices trust LinqAI with their Content
    </h2>

    <div
  id="testimonialCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="3000"
>
      {/* Carousel Slides */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div
            className="card border-0 shadow-sm p-4 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <p className="mb-3 fs-5">
              <span className="bg-light px-1 fw-semibold">
                If you regularly create and publish content on LinkedIn, LinqAI is a gamechanger!
              </span>{" "}
              It makes content creation faster, smarter and totally in your voice.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="User 1"
                className="rounded-circle me-3"
                width="50"
              />
              <div className="text-start">
                <strong>Matt Thomas</strong>
                <div className="text-muted small">Owner at Perfect Prose</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div
            className="card border-0 shadow-sm p-4 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <p className="mb-3 fs-5">
              <span className="bg-light px-1 fw-semibold">
                All the content I create is done using LinqAI.
              </span>{" "}
              It helps me stay focused and consistent on LinkedIn.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
                className="rounded-circle me-3"
                width="50"
              />
              <div className="text-start">
                <strong>Ivysson Luz</strong>
                <div className="text-muted small">Project Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div
            className="card border-0 shadow-sm p-4 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <p className="mb-3 fs-5">
              <span className="bg-light px-1 fw-semibold">
                LinqAI doesn’t restrict scheduling or posting.
              </span>{" "}
              It’s great for creators looking for freedom.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User 3"
                className="rounded-circle me-3"
                width="50"
              />
              <div className="text-start">
                <strong>Thomas Allgeyer</strong>
                <div className="text-muted small">Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* CTA Section */}
      <section className="cta-section text-white text-center py-5" id="get-started">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to grow your LinkedIn presence?</h2>
          <p className="lead mb-4">Get started with LinqAI for free. No credit card required.</p>
          <button 
            className="btn btn-light btn-lg text-dark fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
            onClick={() => {
              setTimeout(() => {
                document.getElementById("signup-tab").click();
              }, 200); // wait for modal to open
            }}
          >
            Get Started for Free
          </button>

        </div>
      </section>




<section id="posts" className="py-5" style={{ backgroundColor: '#f4f7fd' }}>
  <div className="container">
    <h2 className="text-center fw-bold mb-4">Post Inspirations</h2>
    <p className="text-center text-muted mb-5">
      Use these high-performing posts as inspiration for your next content. 
      Our AI engine selected these for you.
    </p>
    <div className="row g-4 justify-content-center">
      {[
        {
          user: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Alex Morgan",
          content: "I grew my business and personal brand in record time. Here's how you can do the same...",
          likes: "1.6k",
          date: "2024/02/11"
        },
        {
          user: "https://randomuser.me/api/portraits/men/46.jpg",
          name: "Matt Thomas",
          content: "Comfort is killing your success — silently. Here's what you're losing: unrealized potential.",
          likes: "3k",
          date: "2024/02/12"
        },
        {
          user: "https://randomuser.me/api/portraits/men/72.jpg",
          name: "Chris Evans",
          content: "The best writers don’t just write. They organize ideas into a 3-step process.",
          likes: "538",
          date: "2024/02/13"
        }
      ].map((post, idx) => (
        <div key={idx} className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img src={post.user} className="rounded-circle me-3" width="50" alt="User" />
                <div>
                  <h6 className="mb-0 fw-bold">{post.name}</h6>
                  <small className="text-muted">{post.date}</small>
                </div>
              </div>
              <p className="card-text">{post.content}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button className="btn btn-outline-primary btn-sm">Edit & Post</button>
                <span className="text-muted"><i className="bi bi-hand-thumbs-up"></i> {post.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Footer Section */}
<footer className="bg-dark text-white pt-5 pb-4 mt-5">
  <div className="container text-md-start">
    <div className="row">

      {/* Company Info */}
      <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
        <h5 className="text-uppercase fw-bold">LinqAI</h5>
        <p>Your LinkedIn content assistant powered by AI. Automate, grow, and influence with ease.</p>
      </div>

      {/* Resources */}
      <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
        <h6 className="text-uppercase fw-bold mb-3">Resources</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
          <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
          <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
        <h6 className="text-uppercase fw-bold mb-3">Legal</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
          <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
        </ul>
      </div>

      {/* Contact / Social */}
      <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
        <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
        <p><i className="bi bi-envelope me-2"></i> support@linqai.ai</p>
        <div className="d-flex gap-3 mt-3">
          <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
          <a href="#" className="text-white"><i className="bi bi-twitter fs-5"></i></a>
          <a href="#" className="text-white"><i className="bi bi-github fs-5"></i></a>
        </div>
      </div>
    </div>

    <hr className="mb-3" />

    <div className="text-center">
      <p className="mb-0 small">&copy; {new Date().getFullYear()} LinqAI. All rights reserved.</p>
    </div>
  </div>
</footer>



{/* Login & Signup Modal */}
<div
  className="modal fade"
  id="authModal"
  tabIndex="-1"
  aria-labelledby="authModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content p-4">
      <div className="modal-header border-0">
        <h5 className="modal-title fw-bold" id="authModalLabel">Welcome to LinqAI</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <ul className="nav nav-tabs mb-3" id="authTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab">Login</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab">Sign Up</button>
          </li>
        </ul>

        <div className="tab-content" id="authTabContent">
          {/* Login Form */}
          <div className="tab-pane fade show active" id="login" role="tabpanel">
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="••••••••" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="tab-pane fade" id="signup" role="tabpanel">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="••••••••" />
              </div>
              <button type="submit" className="btn btn-success w-100">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      


    </>
  );
}
