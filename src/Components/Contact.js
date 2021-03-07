import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-us" id="contact">
        <div className="container text-center">
          <h1>Contact-Us</h1>
          <p className="text-capitalize pt-1">
            We are always happy to answer to queries who might have!looking
            forword to hearing from you!
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-10 offset-sm-2 offset-1">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    required
                    autocomplete="off"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    autocomplete="off"
                    placeholder="Enter your email-id"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    required
                    autocomplete="off"
                    placeholder="Enter your mobile-no"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center contact-button">
                  <button type="submit" className="btn btn-primary my-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
