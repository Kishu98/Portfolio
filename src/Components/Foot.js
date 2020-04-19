import React from "react";
import "../css/Foot.css";

const Foot = () => (
  <div className="wrap">
    <div className="contact">
      <div className="mail con">
        <h2>E-mail</h2>
        <h3>
          <a
            href="mailto:kishujain.1998@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            kishujain.1998@gmail.com
          </a>
        </h3>
      </div>
      <div className="num con">
        <h2>Phone</h2>
        <h3>+91 9831299540</h3>
      </div>
      <div className="social con">
        <h2>Social</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Foot;
