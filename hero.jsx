import cinnamoroll from '../assets/cinnamoroll.gif';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1>Hello, <span>Welcome</span></h1>
        <p>I am Louizza Pajarillon, specializing in designing page interfaces that leverage the productivity of multi-editing.</p>
        <div className="icons-view">
          <div className="social-icons">
            <a href="#contact" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#contact" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <a href="#projects" className="btn">View Projects</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-img-wrapper">
          <img src={cinnamoroll} alt="Louizza's profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
