import './Footer.scss'


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@cosmeticswebsite.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Cosmetics Website. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer