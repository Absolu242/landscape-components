import React from "react";
import { ContactContainer, ContactLeft, ContactRight } from "./contact1.styles";

export default function Contact1() {
  return (
    <ContactContainer>
      <ContactLeft
        style={{
          backgroundImage: `url(/images/LeftInfo.png)`,
        }}
      >
        <div className="logo">
          <img src="/LogoWhite.png" alt="logo" />
        </div>

        <div className="info">
          <p className="info-name">E-MAIL</p>
          <p className="info-value">info@rahanbouess.com</p>
        </div>

        <div className="info">
          <p className="info-name">PHONE</p>
          <p className="info-value">+30 226 4881 514</p>
        </div>

        <div className="info">
          <p className="info-name">ADDRESS</p>
          <p className="info-value">
            11301 West Olympic Boulevard Apt. 100 Los Angeles, CA 90064 USA
          </p>
        </div>

        <div className="info">
          <p className="info-name">SOCIAL</p>
          <div className="info-value">
            <img src="/Facebook.png" alt="facebook" />
            <img src="/Twitter.png" alt="twitter" />
            <img src="/Instagram.png" alt="instagram" />
          </div>
        </div>
      </ContactLeft>

      <ContactRight>
        <div className="heading">
          <h1>Contact Us</h1>
        </div>

        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem
          excepturi error veritatis rerum exercitationem doloremque voluptate
          asperiores sint labore.
        </p>

        <form className="form">
          <div className="form-wrapper">
            <div className="form-div">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-div">
              <label htmlFor="name">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="form-div">
            <label htmlFor="name">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Your message"
              rows="8"
            />
          </div>

          <div className="form-div terms">
            <input type="checkbox" name="terms" id="terms" />
            <p>
              I agree to the <a href="http://google.com">Terms of Use</a> and{" "}
              <a href="http://google.com">Conditions</a>{" "}
            </p>
          </div>

          <button className="form-btn">Send message</button>
        </form>
      </ContactRight>
    </ContactContainer>
  );
}
