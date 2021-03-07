import React from "react";

const Donate = () => {
  let url = "https://rzp.io/l/VlsRZ0IwKF";
  return (
    <>
      <section className="donate-section">
        <div className="container">
          <div className="row">
            <div className="col-10 ml-auto my-5">
              <h2 className="first-heading">
                Your donation will further our vision of ensuring a happy and
                healthy life of Senior Citizen
                <strong> Donate to make a change</strong>
              </h2>
              <div className="donate-btn mt-4">
                <a href={url} className="btn-donate-now">
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
