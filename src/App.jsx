import React, { useEffect } from 'react';
import './index.css';
import heroImg from './assets/images/hero.png';
import steelDoorImg from './assets/images/steel-door.png';
import upvcWindowImg from './assets/images/upvc-window.png';
import installImg from './assets/images/installation.png';
import customImg from './assets/images/custom-design.png';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="container nav-content">
          <div className="logo-text">AMBATTU <span>DOOR CENTRE</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#products">Products</a>
              <ul className="dropdown-menu glass">
                <li><a href="#products">UPVC Solutions</a></li>
                <li><a href="#products">Steel Security</a></li>
                <li><a href="#products">FRP Designer</a></li>
                <li><a href="#products">Wooden Finish</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#services">Services</a>
              <ul className="dropdown-menu glass">
                <li><a href="#services">Professional Installation</a></li>
                <li><a href="#services">Custom Design</a></li>
                <li><a href="#services">After-Sales Support</a></li>
              </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="btn-primary">Get Quote</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})` }}>
        <div className="container hero-content fade-in">
          <h1>Premium Doors & Windows for <span>Modern Living</span></h1>
          <p>Exquisite UPVC, Steel, and FRP solutions crafted for durability and elegance.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Explore Collection</button>
            <button className="btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Our services</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Our Premium <span>Collection</span></h2>
          <div className="product-grid">
            <div className="product-card glass animate-on-scroll">
              <img src={upvcWindowImg} alt="UPVC Windows" />
              <h3>UPVC Solutions</h3>
              <p>Energy-efficient, soundproof, and stylish windows and doors.</p>
            </div>
            <div className="product-card glass animate-on-scroll">
              <img src={steelDoorImg} alt="Steel Doors" />
              <h3>Steel Security</h3>
              <p>Uncompromising strength with premium wood-grain finishes.</p>
            </div>
            <div className="product-card glass animate-on-scroll">
              <img src={heroImg} alt="FRP Doors" />
              <h3>FRP Designer</h3>
              <p>Waterproof and decorative doors for every interior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section glass">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Professional <span>Services</span></h2>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-img-wrap">
                <img src={installImg} alt="Installation" />
              </div>
              <div className="service-info">
                <h3>Expert Installation</h3>
                <p>Our certified technicians ensure every door and window is fitted with millimetric precision for maximum insulation and security.</p>
              </div>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-img-wrap">
                <img src={customImg} alt="Customization" />
              </div>
              <div className="service-info">
                <h3>Custom Design</h3>
                <p>We work with architects and homeowners to create bespoke solutions that perfectly match your home's unique aesthetic.</p>
              </div>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-img-wrap">
                <img src={steelDoorImg} alt="Support" />
              </div>
              <div className="service-info">
                <h3>After-Sales Support</h3>
                <p>Our commitment doesn't end at installation. We provide comprehensive maintenance and quick-response support for all our products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about glass">
        <div className="container about-flex">
          <div className="about-text animate-on-scroll">
            <h2>The Legacy of <span>Ambattu</span></h2>
            <p>Based in the heart of Muvattupuzha, Ambattu Door Centre has been the trusted name for homeowners seeking quality and reliability. We specialize in providing high-end door and window solutions that combine aesthetic appeal with long-lasting performance.</p>
            <div className="stats">
              <div className="stat-item">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>5000+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div className="contact-info animate-on-scroll">
            <h2>Let's <span>Connect</span></h2>
            <p>Visit our showroom in Muvattupuzha or reach out for a personalized quote.</p>
            <div className="info-item">
              <strong>Address:</strong> XHRG+4MP, Muvattupuzha, Kerala 686673
            </div>
            <div className="info-item">
              <strong>Phone:</strong> 080 6996 7431
            </div>
          </div>
          <form className="contact-form glass animate-on-scroll">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ambattu Door Centre. Crafted for Excellence.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
