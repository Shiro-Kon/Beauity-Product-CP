import { Link } from "react-router-dom";
import "./Footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a cosmetics store, producing quality and natural products We
            are a cosmetics store, producing quality and natural products{" "}
          </p>
        </div>
        <div className="footer-section ">
          <h3>Shortcut links</h3>
          <p className="text-footer">
            <Link className="text-footer" to={"/"}>
              Home
            </Link>
          </p>
          <p className="text-footer">
            <Link to={"/products"}>Products</Link>
          </p>
          <p className="text-footer">
            <Link to={"/blog"}>Blog</Link>
          </p>
          <p className="text-footer">
            <Link to={"/contacs"}>Contacts</Link>
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@cosmeticswebsite.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Envato</p>
          <p>Level 13, 2 Elizabeth</p>
          <p>Australia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Cosmetics Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
