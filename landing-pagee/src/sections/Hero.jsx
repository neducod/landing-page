import "../styles/hero.css";

export default function Hero() {
    return (
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Hi, I’m <span>Josephine Chinedu Jerome</span></h1>
            <h2>Frontend Developer & Email Designer</h2>
            <p>
              I build responsive, modern, and engaging web experiences that bring ideas to life.
            </p>
  
            <div className="hero-buttons">
              <a href="#work" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Let’s Work Together</a>
            </div>
          </motion.div>
  
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/hero-image.png" alt="Josephine Jerome" />
          </motion.div>
        </div>
      </section>
    );
}