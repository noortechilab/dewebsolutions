import React, { useState } from "react";
import "./css/Contact.scss";
const Contact = () => {
  return (
    <>
      <div class="container-4 ">
        <div class="contact-box shadow">
          <div class="left"></div>
          <div class="right">
            <h2>Contact Us</h2>
            <input type="text" class="field" placeholder="Your Name" />
            <input type="text" class="field" placeholder="Your Email" />
            <input type="text" class="field" placeholder="Phone" />
            <textarea placeholder="Message" class="field"></textarea>
            <button class="btn">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
