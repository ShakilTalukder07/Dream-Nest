import "../styles/Footer.scss"
import { LocalPhone, Email } from "@mui/icons-material"
import { FaPlaneDeparture } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        {/* <FaPlaneDeparture /> */}
        <a href="/"><img src="/assets/plane.jpg" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+880**********</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>abc@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer