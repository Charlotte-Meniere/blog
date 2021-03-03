import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="frame">
        <h2>Keep in touch</h2>
      </div>
      <article className="formulaires">
        <div className="inputEvent">
          <label htmlFor="input">Laissez moi un message</label>
          <input type="text" id="input" />
          <div id="result"></div>
          <div className="response"></div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
