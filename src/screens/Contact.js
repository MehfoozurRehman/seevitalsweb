import React from "react";
import main__background__img from "../assets/main__background__img.png";

export default function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__container__jumbotron">
        <img
          src={main__background__img}
          alt=""
          className="contact__container__jumbotron__img"
        />
        <div className="contact__container__jumbotron__content">
          <div className="contact__container__jumbotron__content__heading">
            Let's talk <span>to us</span>
          </div>
          <div className="contact__container__jumbotron__content__sub__heading">
            Feel free to contact us
          </div>
        </div>
      </div>
      <div className="contact__container__form__wrapper">
        <div className="contact__container__form">
          <div
            className="contact__container__form__header"
            style={{ padding: 0, background: "transparent" }}
          >
            <div className="contact__container__form__header contact__container__form__header__right">
              Get in Touch
            </div>
            <div
              className="contact__container__form__header "
              style={{ marginLeft: 20 }}
            >
              Contact info
            </div>
          </div>
          <form action="" className="contact__container__form__content">
            <div className="contact__container__form__content__left">
              <input
                type="text"
                placeholder="Name"
                className="contact__container__form__content__left__input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact__container__form__content__left__input"
              />
              <input
                type="text"
                placeholder="Subject"
                className="contact__container__form__content__left__input"
              />
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Description"
                className="contact__container__form__content__left__textarea"
              />
              <button
                type="submit"
                className="contact__container__form__content__left__button"
              >
                Submit
              </button>
            </div>
            <div className="contact__container__form__content__right">
              <div className="contact__container__form__content__right__data">
                <div className="contact__container__form__content__right__heading">
                  Email
                </div>
                <a
                  href="mailto:info@SeeVitals.com"
                  className="contact__container__form__content__right__entry"
                >
                  info@SeeVitals.com
                </a>
              </div>
              <div className="contact__container__form__content__right__data">
                <div className="contact__container__form__content__right__heading">
                  Visit us
                </div>
                <div className="contact__container__form__content__right__entry">
                  33-Z, 1st Floor Commercial Plaza, DHA Phase III
                </div>
                <div className="contact__container__form__content__right__entry">
                  Lahore, Punjab, Pakistan
                </div>
              </div>
              <div className="contact__container__form__content__right__data">
                <div className="contact__container__form__content__right__heading">
                  Phone
                </div>
                <a
                  href="tel:+923451591251"
                  className="contact__container__form__content__right__entry"
                >
                  +92-345-1591251
                </a>
                <a
                  href="tel:+923219652222"
                  className="contact__container__form__content__right__entry"
                >
                  +92-321-9652222
                </a>
                <a
                  href="tel:+923224850116"
                  className="contact__container__form__content__right__entry"
                >
                  +92-322-4850116
                </a>
              </div>
              <div className="contact__container__form__content__right__links">
                <a
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/SeeVitals-109009611658345/",
                      "_blank"
                    )
                  }
                  className="contact__container__form__content__right__links__link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.636"
                    height="25.46"
                    viewBox="0 0 13.636 25.46"
                  >
                    <path
                      id="Icon_awesome-facebook-f"
                      data-name="Icon awesome-facebook-f"
                      d="M14.352,14.322l.707-4.608H10.638V6.724a2.3,2.3,0,0,1,2.6-2.489h2.01V.311A24.511,24.511,0,0,0,11.678,0C8.037,0,5.657,2.207,5.657,6.2V9.714H1.609v4.608H5.657V25.46h4.981V14.322Z"
                      transform="translate(-1.609)"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/SeeVitals",
                      "_blank"
                    )
                  }
                  className="contact__container__form__content__right__links__link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.16"
                    height="21.159"
                    viewBox="0 0 21.16 21.159"
                  >
                    <path
                      id="Icon_awesome-linkedin-in"
                      data-name="Icon awesome-linkedin-in"
                      d="M4.736,21.16H.35V7.033H4.736ZM2.541,5.106A2.553,2.553,0,1,1,5.081,2.541,2.562,2.562,0,0,1,2.541,5.106ZM21.155,21.16H16.778V14.283c0-1.639-.033-3.741-2.281-3.741-2.281,0-2.63,1.781-2.63,3.623v7H7.484V7.033h4.207V8.96h.061A4.61,4.61,0,0,1,15.9,6.679c4.44,0,5.256,2.924,5.256,6.721v7.76Z"
                      transform="translate(0 -0.001)"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/see_vitals/",
                      "_blank"
                    )
                  }
                  className="contact__container__form__content__right__links__link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.183"
                    height="24.183"
                    viewBox="0 0 24.183 24.183"
                  >
                    <path
                      id="Icon_simple-instagram"
                      data-name="Icon simple-instagram"
                      d="M12.091,0C8.807,0,8.4.015,7.107.073A8.916,8.916,0,0,0,4.172.635,5.921,5.921,0,0,0,2.029,2.029,5.9,5.9,0,0,0,.635,4.172,8.89,8.89,0,0,0,.073,7.107C.012,8.4,0,8.807,0,12.091s.015,3.695.073,4.985a8.922,8.922,0,0,0,.562,2.935,5.93,5.93,0,0,0,1.395,2.142,5.913,5.913,0,0,0,2.142,1.395,8.927,8.927,0,0,0,2.935.562c1.29.06,1.7.073,4.985.073s3.695-.015,4.985-.073a8.948,8.948,0,0,0,2.935-.562,6.179,6.179,0,0,0,3.537-3.537,8.921,8.921,0,0,0,.562-2.935c.06-1.29.073-1.7.073-4.985S24.168,8.4,24.11,7.107a8.942,8.942,0,0,0-.562-2.935,5.934,5.934,0,0,0-1.395-2.142A5.891,5.891,0,0,0,20.011.635,8.9,8.9,0,0,0,17.076.073C15.786.012,15.376,0,12.091,0Zm0,2.176c3.227,0,3.612.016,4.887.072a6.662,6.662,0,0,1,2.244.418,3.979,3.979,0,0,1,2.3,2.294A6.676,6.676,0,0,1,21.934,7.2C21.991,8.48,22,8.863,22,12.091s-.015,3.612-.075,4.887a6.8,6.8,0,0,1-.424,2.244,3.839,3.839,0,0,1-.906,1.393,3.772,3.772,0,0,1-1.391.9,6.725,6.725,0,0,1-2.252.416c-1.284.057-1.662.071-4.9.071s-3.613-.015-4.9-.075a6.856,6.856,0,0,1-2.253-.424A3.744,3.744,0,0,1,3.523,20.6a3.671,3.671,0,0,1-.907-1.391,6.862,6.862,0,0,1-.423-2.252c-.045-1.27-.061-1.662-.061-4.881s.016-3.613.061-4.9a6.854,6.854,0,0,1,.423-2.251,3.584,3.584,0,0,1,.907-1.392,3.576,3.576,0,0,1,1.389-.9A6.692,6.692,0,0,1,7.15,2.207c1.285-.045,1.663-.06,4.9-.06l.045.03Zm0,3.706A6.209,6.209,0,1,0,18.3,12.091,6.208,6.208,0,0,0,12.091,5.882Zm0,10.239a4.03,4.03,0,1,1,4.03-4.03A4.029,4.029,0,0,1,12.091,16.122ZM20,5.638a1.451,1.451,0,1,1-1.451-1.45A1.452,1.452,0,0,1,20,5.638Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8063797301484!2d74.37747681513622!3d31.47451195655429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a286809427%3A0x66f8b31237e79ada!2sDSME%20Global%20Links!5e0!3m2!1sen!2s!4v1641231619165!5m2!1sen!2s"
        style={{
          border: "none",
          width: "100%",
          maxWidth: 1440,
          height: 500,
          margin: "0em auto",
          borderRadius: 10,
        }}
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
}
