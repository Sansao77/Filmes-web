import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Meu Site</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">Gabriel P.Santos</a>
            </li>
            <li>
              <a href="/sobre">Giselle Jacinto</a>
            </li>
            <li>
              <a href="/contato">Mariene Cruz</a>
            </li>
            <li>
              <a href="/contato">Thallysson Silva</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
