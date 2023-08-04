import './Footer.css';

const Footer = ({ rs1, rs2, rs3 }) => {
  return (
    <footer>
      <section className="ah-footer__signature">
        <span>Produced By Andrés Higuita</span>
      </section>
      <section className="ah-footer__content">
        <a href={rs1.href} target={rs1.target} rel={rs1.rel}>
          <img src={rs1.src} alt={rs1.alt} />
        </a>
        <a href={rs2.href} target={rs2.target} rel={rs2.rel}>
          <img src={rs2.src} alt={rs2.alt} />
        </a>
        <a href={rs3.href} target={rs3.target} rel={rs3.rel}>
          <img src={rs3.src} alt={rs3.alt} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
