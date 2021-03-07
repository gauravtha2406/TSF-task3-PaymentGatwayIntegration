import React, { useState } from "react";
import Img from "../Images/a.svg";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";
const PORT = process.env.PORT || 1337;

const Home = () => {
  const [name, setName] = useState("Gaurav Thakur");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(`http://localhost:${PORT}/razorpay`, {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_61DgSea4l7DbDm" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Gaurav Thakur Donation",
      description: "Thank you donating money to Bring Change",
      image: `http://localhost:${PORT}/a.svg`,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "gauravtha2406@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  let url = "https://rzp.io/l/VlsRZ0IwKF";
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center ">
                  <h1>
                    ANY AMOUNT YOU GIVE CAN
                    <strong className="strong"> BRING ABOUT CHANGE</strong>
                  </h1>
                  <h2 className="my-3">
                    A leading charity platform in India working with and for
                    disadvantaged elderly for more than 2 decades
                  </h2>

                  <div className="mt-3">
                    <a
                      href={url}
                      className="btn-donate-now"
                      onClick={displayRazorpay}
                    >
                      Donate
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={Img} className="animated" alt="Donate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div class="copyright text-center">
          <p class="text-center">
            Copyright@All rights reserved | Designed and Developed by Gaurav
            Thakur
          </p>
          <p className="text-center">SPARKS FOUNATION </p>
        </div>
      </section>
    </>
  );
};

export default Home;
