import { useState } from "react";
import validator from "validator";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./../..//App.css";

export default function Contact() {
  const [fullName, setfullName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(fullName);
    console.log(phoneNum);
    console.log(email);
    console.log(yourMessage);
  }
  const handlefullName = (e) => {
    setfullName(e.target.value);
  };
  const changePhoneNumber = (e) => {
    console.log(e);
  };

  const setvalidateEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;
    
    if (validator.isEmail(email)) {
      setEmail(email);
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div className="contact">
      <div className="row pa-10 mt-10">
        <h1 className="mx-auto col-10 text-center">Contact Us</h1>
        <p className="col-8 mx-auto mt-10">
          We are always looking for new ideas and new partnerships. Whether you
          are interested in hearing from us about our offerings, partnering with
          us, joining us or doing business with us - contact us to see how we
          can help you.
        </p>
      </div>
      <div className="row d-block mt-5">
        <form onSubmit={handleSubmit} className="col-10 mx-auto">
          <div className="row m-2">
            <label className="col-5 d-flex">
              <span className="me-5">Full Name:</span>
              <input
                className="col-7 ml-6"
                type="input"
                name="fullName"
                value={fullName}
                onChange={handlefullName}
                required
              />
            </label>
            <div className="col-6 d-flex">
              <label className="">Ph No:</label>
              <PhoneInput
                country={"us"}
                value={phoneNum}
                onChange={(e) => setPhoneNum(e)}
                containerClass="col-4"
              ></PhoneInput>
            </div>
          </div>
          <div className="row m-2">
            <span className="col-2">Your email:</span>
            <input
              className="col-8"
              type="text"
              name="email"
              onChange={(e) => setvalidateEmail(e)}
              required
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {emailError}
            </span>
          </div>
          <div className="row m-2">
            <span className="col-2">Your message:</span>
            <textarea
              className="col-8"
              name="message"
              value={yourMessage}
              onChange={(e) => setYourMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="row mt-5">
            <div className="col-8"></div>
            <button
              className="col-2 me-4 btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
