import styles from "./page.module.css";

const basePath = process.env.NODE_ENV === 'production' ? '/traica-solutions-page' : '';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img 
              src={`${basePath}/logo.png`}
              alt="Trica Solutions Logo" 
              className={styles.logoImage}
            />
          </div>
          <h2 className={styles.heroTitle}>
            <span className={styles.highlight}>The Logical Path to Solutions</span>
          </h2>
          <p className={styles.heroSubtitle}>
            Empowering innovation through Logic AI training, IT development, and intelligent test automation
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className={styles.primaryBtn}>Get Started</a>
            <a href="#services" className={styles.secondaryBtn}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>Comprehensive solutions to drive your digital transformation</p>
          
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🤖</div>
              <h3>Logic AI Training</h3>
              <p>
                Empower your team with advanced AI training programs. We teach practical 
                applications of artificial intelligence, machine learning, and logical reasoning 
                to solve real-world problems.
              </p>
              <ul className={styles.serviceList}>
                <li>AI Fundamentals & Best Practices</li>
                <li>Machine Learning Implementation</li>
                <li>Custom AI Model Development</li>
                <li>Hands-on Project Training</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>IT Development</h3>
              <p>
                Small-scale, high-impact IT solutions tailored to your business needs. 
                From web applications to custom software, we deliver quality solutions efficiently.
              </p>
              <ul className={styles.serviceList}>
                <li>Web & Mobile Development</li>
                <li>Custom Software Solutions</li>
                <li>API Development & Integration</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔄</div>
              <h3>Testing & Automation</h3>
              <p>
                Streamline your workflows with intelligent test automation. We implement 
                robust testing frameworks that save time and ensure quality.
              </p>
              <ul className={styles.serviceList}>
                <li>Automated Testing Solutions</li>
                <li>CI/CD Pipeline Setup</li>
                <li>Quality Assurance Consulting</li>
                <li>Process Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3>Innovating at the Intersection of AI and Automation</h3>
              <p>
                We are a forward-thinking startup dedicated to democratizing AI education 
                and delivering practical automation solutions. Our mission is to help 
                businesses and individuals harness the power of artificial intelligence 
                through comprehensive training and intelligent development practices.
              </p>
              <p>
                Whether you're looking to upskill your team in AI technologies or need 
                reliable IT development and testing support, we provide scalable solutions 
                that drive real results.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.sectionSubtitle}>
            Ready to transform your business with AI and automation?
          </p>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@tricasolutions.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Bengaluru, India</p>
                  <p className={styles.subText}>Remote & On-site Services Available</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🔗</span>
                <div>
                  <h4>Connect With Us</h4>
                  <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/company/trica-solutions" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                    <a href="https://twitter.com/tricasolutions" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
                    <a href="https://github.com/trica-solutions" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={styles.input}
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className={styles.input}
                  required 
                />
                <select className={styles.input}>
                  <option>Select Service Interest</option>
                  <option>AI Training</option>
                  <option>IT Development</option>
                  <option>Testing & Automation</option>
                  <option>All Services</option>
                </select>
                <textarea 
                  placeholder="Tell us about your project..." 
                  className={styles.textarea}
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>&copy; 2025 Trica Solutions. All rights reserved. The Logical Path to Solutions.</p>
            <div className={styles.footerLinks}>
              <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
              <span className={styles.footerDivider}>•</span>
              <a href="#terms" className={styles.footerLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
