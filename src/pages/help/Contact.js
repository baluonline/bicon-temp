import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./../..//App.css";

export default function Contact() {
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
        <div className="col-10 mx-auto">
          <div className="row m-2">
            <label className="col-6 me-5">
              <span className="col-8 me-5">Full Name:</span>
              <input
                className="col-6 ml-6"
                type="input"
                name="fullName"
                required
              />
            </label>
            <label className="col-5">
                <PhoneInput
                  country={"us"}
                  containerClass="col-4"
                  specialLabel="Custom Phone*"
                ></PhoneInput>
            </label>
          </div>
          <div className="row m-2">
            <span className="col-2">Your email:</span>
            <input className="col-8" type="email" name="email" required />
          </div>
          <div className="row m-2">
            <span className="col-2">Your message:</span>
            <textarea className="col-8" name="message" required></textarea>
          </div>
          <button className="col-3 mt-4 btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
