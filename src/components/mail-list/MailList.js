/** @format */

import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail-list">
      <h1 className="mail-list-title">Save time, save money!</h1>
      <span className="mail-list-description">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mail-list-input-container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
