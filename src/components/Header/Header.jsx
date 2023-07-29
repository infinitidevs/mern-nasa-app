import "./Header.css";

const Header = ({ link, img, title, subtitle, handleChange }) => {
  return (
    <header>
      <a href={link.href} target={link.target} rel={link.rel}>
        <img className="ah-logo" src={img.src} alt={img.alt} />
      </a>
      <section className="ah-info">
        <h1>{title}</h1>
        <h2 className="ah-category">{subtitle}</h2>
      </section>
      <label className="ah-toggleBtn" htmlFor="toggleButton">
        <input id="toggleButton" type="checkbox" onChange={handleChange}/>
        <span className="ah-slider"/>
      </label>
    </header>
  );
};

export default Header;