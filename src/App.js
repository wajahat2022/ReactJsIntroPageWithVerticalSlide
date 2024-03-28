import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <div className="section_auth">
          <div className="section_ultra-gradients is-full">
            <div className="ultra-gradient-wrapper">
              <div className="main-shapes-wrapper">
                <div className="shape-3" />
                <div className="shape-2" />
                <div className="shape-1" />
              </div>
              <div className="blending-group-wrapper">
                <div className="shape-8" />
                <div className="shape-9" />
                <div className="shape-4" />
                <div className="shape-5" />
                <div className="shape-7" />
                <div className="shape-6" />
              </div>
              <div className="background-noise" />
            </div>
          </div>
          <div className="container-medium is-relative">
            <div className="w-layout-grid split-grid">
              <div className="auth-form-block shadow w-form">
                <form
                  method="get"
                  data-ms-social-auth-allow-signup
                  data-ms-form="login"
                  name="wf-form-Form"
                  data-name="Form"
                  id="wf-form-Form"
                  className="form_form"
                  data-wf-page-id="6601490875d9e8aae84852a3"
                  data-wf-element-id="1b7700c7-781f-f39f-669f-29193f497df3"
                >
                  <h1 className="heading-style-h3">
                    Log in to your Jobbbs account
                  </h1>
                  <div className="spacer-xsmall" />
                  <p>
                    We're making a premium Job Board template - this is the
                    login screen from it!&nbsp;Stay tuned if you're working on
                    building a job board.
                  </p>
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="social_dropdown w-dropdown"
                  >
                    <div className="social_dropdown-toggle w-dropdown-toggle">
                      <div className="social-btn_spacer" />
                      <div>Continue with social</div>
                      <div className="dropdown-icon w-icon-dropdown-toggle" />
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      <a
                        href="#"
                        className="social-btn is-first w-inline-block"
                      >
                        <div className="social-content">
                          <img
                            src="images/google.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Google"
                            className="social-text"
                          >
                            Continue with Google
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/facebook.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Facebook"
                            className="social-text"
                          >
                            Continue with Facebook
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/spotify.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Spotify"
                            className="social-text"
                          >
                            Continue with Spotify
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/microsoft.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Microsoft"
                            className="social-text"
                          >
                            Continue with Microsoft
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/dribbble-svgrepo-com.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Dribbble"
                            className="social-text"
                          >
                            Continue with Dribbble
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/github.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect Github"
                            className="social-text"
                          >
                            Continue with Github
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                      <a href="#" className="social-btn w-inline-block">
                        <div className="social-content">
                          <img
                            src="images/linkedin.svg"
                            loading="lazy"
                            alt="Google Logo"
                            className="social-image"
                          />
                          <div
                            data-ms-auth-connected-text="Disconnect LinkedIn"
                            className="social-text"
                          >
                            Continue with LinkedIn
                          </div>
                          <div className="social-btn_spacer" />
                        </div>
                      </a>
                    </nav>
                  </div>
                  <div className="spacer-small" />
                  <div className="or-wrap">
                    <div className="or-wrap_line" />
                    <div>or</div>
                    <div className="or-wrap_line" />
                  </div>
                  <div className="spacer-small" />
                  <div className="form_field-wrapper">
                    <label htmlFor="Email" className="form_label">
                      Email <span className="red-text">*</span>
                    </label>
                    <input
                      className="form_input w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="john@doe.com"
                      type="email"
                      id="Email"
                      required
                    />
                  </div>
                  <div className="form_field-wrapper">
                    <label htmlFor="Password" className="form_label">
                      Password <span className="red-text">*</span>
                    </label>
                    <input
                      className="form_input w-input"
                      maxLength={256}
                      name="Password"
                      data-name="Password"
                      placeholder="**********"
                      type="password"
                      id="Password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button is-form-submit w-button"
                    defaultValue="Login"
                  />
                  <div className="bottom-form-links">
                    <a
                      data-ms-modal="forgot-password"
                      href="#"
                      className="text-style-link"
                    >
                      Forgot your password?
                    </a>
                    <a href="#" className="text-style-link">
                      Support
                    </a>
                  </div>
                </form>
                <div className="form_message-success w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="form_message-error w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <div className="output_image-wrapper">
                <div className="output-slider">
                  <div className="output-slider_track">
                    <div className="output-slider_list">
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="output-slider_list">
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                      <div className="output-slider_slide">
                        <div className="testimonial-wrap">
                          <div className="testimonial-top">
                            <img
                              src="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg"
                              loading="lazy"
                              sizes="(max-width: 991px) 100vw, 4vw"
                              srcSet="images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-500.jpg 500w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-800.jpg 800w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1080.jpg 1080w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-1600.jpg 1600w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia-p-2000.jpg 2000w, images/2022-02-11-Trinet-Geena-0319-OneDrive-SocialMedia.jpg 2048w"
                              alt="Google Logo"
                              className="testimonial-image"
                            />
                            <div className="heading-style-h4">Jennie Smith</div>
                          </div>
                          <div className="spacer-xsmall" />
                          <p className="text-size-medium">
                            "Thanks to Jobbbs,{" "}
                            <strong>
                              I got the job of my dreams in only 1 week!
                            </strong>
                            &nbsp;This awesome marquee was made by{" "}
                            <a
                              href="https://webflow.com/@ukasha"
                              target="_blank"
                              className="text-style-link"
                            >
                              Muhammad Ukasha
                            </a>
                            . Go check his profile for more cool stuff."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
