import "./Footer.css";

const Footer = ({ rs1, rs2, rs3, rs4 }) => {
  return (
    <footer>
      <section className="ah-footer__signature">
        <span>Produced By Andrés H.</span>
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
        <a href={rs4.href} target={rs4.target} rel={rs4.rel}>
          <img src={rs4.src} alt={rs4.alt} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
