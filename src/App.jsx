import "./style.css";
import { useState } from "react";
import logo from "./images/logo-bookmark.svg";
import heroImg from "./images/illustration-hero.svg";
import featuresTab1 from "./images/illustration-features-tab-1.svg";
import featuresTab2 from "./images/illustration-features-tab-2.svg";
import featuresTab3 from "./images/illustration-features-tab-3.svg";
import chromeLogo from "./images/logo-chrome.svg";
import firefoxLogo from "./images/logo-firefox.svg";
import operaLogo from "./images/logo-opera.svg";
import bgDots from "./images/bg-dots.svg";
import arrowSvg from "./images/icon-arrow.svg";
import facebookLogo from "./images/icon-facebook.svg";
import twitterLogo from "./images/icon-twitter.svg";
import iconError from "./images/icon-error.svg";

export default function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMenuBtn() {
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleAnchorClick(e) {
    e.preventDefault(); // prevent default anchor behavior if it's a link
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100;
      const topPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    }
  }

  return (
    <nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu handleAnchorClick={handleAnchorClick} />}

      {/*Nav Container */}
      <div className="nav section-container mb-10 ">
        <img
          src={logo}
          alt="logo"
          className={`w-45 ${isMobileMenuOpen && "opacity-0"}`}
        />
        {/* Hamburger Menu Btn for mobile */}
        <div className="lg:hidden z-200">
          <button
            className={`z-40 block hamburger  ${
              isMobileMenuOpen ? "open" : ""
            }`}
            onClick={handleMenuBtn}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Navigation Links on large screens*/}
        <div className="nav__links">
          <a href="#features" className="nav__link ">
            Features
          </a>
          <a href="#faq" className="nav__link ">
            faq
          </a>
          <a href="#cta" className="nav__link ">
            contact
          </a>
          <div className="nav__btn group">
            <a
              href="#"
              className="nav__link text-white  group-hover:text-softRed "
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ handleAnchorClick }) {
  return (
    <div id="menu" className="section-container mobile__nav ">
      {/*Logo Container*/}
      <div className="flex relative items-center ">
        <img src={logo} alt="logo" className="scale-120" />
        <h3 className="logo-text--white ">BOOKMARK</h3>
      </div>

      {/* Navigation Links */}
      <div className="mobile__nav--items ">
        <div className="mobile__nav--item">
          <a
            href="#features"
            className=" mobile__nav--link"
            onClick={handleAnchorClick}
          >
            Features
          </a>
        </div>

        <div className="mobile__nav--item">
          <a
            href="#faq"
            className=" mobile__nav--link"
            onClick={handleAnchorClick}
          >
            faq
          </a>
        </div>

        <div className="mobile__nav--item border-b border-b-gray-50/10 mb-10">
          <a
            href="#cta"
            className="mobile__nav--link"
            onClick={handleAnchorClick}
          >
            contact
          </a>
        </div>

        {/* Download Button*/}
        <div className="mobile__nav--btn group">
          <a
            href="#"
            className="mobile__nav--link text-white  group-hover:text-softRed"
            onClick={handleAnchorClick}
          >
            Login
          </a>
        </div>
      </div>

      {/* Socials Container*/}
      <div className="socials">
        <img
          src={facebookLogo}
          alt="facebook logo"
          className="social-icon"
          tabIndex={0}
        />
        <img
          src={twitterLogo}
          alt="twitter logo"
          className="social-icon"
          tabIndex={0}
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="overflow-x-hidden">
      <div className="hero section-container">
        {/* Image Container */}
        <div className="hero__img--box ">
          <div className="img-bg"></div>
          <img
            src={heroImg}
            alt="hero"
            className="relative z-10 lg:top-24 xl:top-0  "
          />
        </div>
        {/* Content Container */}
        <div className="hero__content">
          <h1>A Simple Bookmark Manager</h1>
          <p className="mb-4">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          {/* Content Buttons*/}
          <div className="hero__btns ">
            <button className="hero__btn">Get it on Chrome</button>
            <button className="hero__btn text-grayishBlue border-gray-50 hover:border-grayishBlue hover:bg-white bg-gray-50 shadow-lg">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const [activeTab, setActiveTab] = useState("1");

  function handleTabClick(e) {
    setActiveTab(e.target.id);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabClick(e);
    }
  }

  return (
    <section id="features" className="overflow-x-hidden">
      <div className="space-y-10 section-container">
        {/*Section Header*/}
        <header className="flex flex-col items-center">
          <h3>Features</h3>
          <p className="lg:text-center lg:mx-auto lg:text-xl">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </header>

        {/*Content Tabs*/}
        <div className="features__tabs  ">
          {/*Content Tab-1*/}
          <div className="features__tab">
            <p
              id="1"
              className={`features__tab--text ${
                activeTab === "1" && "opacity-100"
              }`}
              tabIndex={0}
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
            >
              Simple Bookmarking
            </p>
            <div
              className={`features__tab--underline ${
                activeTab === "1" && "active-tab"
              }`}
            ></div>
          </div>

          {/*Content Tab-2*/}
          <div className="features__tab">
            <p
              id="2"
              className={`features__tab--text   ${
                activeTab === "2" && "opacity-100"
              }`}
              tabIndex={0}
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
            >
              Speedy Searching
            </p>
            <div
              className={`features__tab--underline ${
                activeTab === "2" && "active-tab"
              }`}
            ></div>
          </div>

          {/*Content Tab-1*/}
          <div className="features__tab  border-b-2 ">
            <p
              id="3"
              className={`features__tab--text   ${
                activeTab === "3" && "opacity-100"
              }`}
              tabIndex={0}
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
            >
              Easy Sharing
            </p>
            <div
              className={`features__tab--underline  ${
                activeTab === "3" && "active-tab"
              }`}
            ></div>
          </div>
        </div>

        {/*Section Tab Content*/}
        <div className="features__tab--content">
          {/* Image Container */}
          <div className="features__img--box">
            <div className="features__img--bg"></div>
            <img
              src={
                activeTab === "1"
                  ? featuresTab1
                  : activeTab === "2"
                  ? featuresTab2
                  : featuresTab3
              }
              alt="hero"
              className="relative z-10 lg:scale-110 lg:left-15"
            />
          </div>
          {/* Content Container*/}
          <FeaturesFooter
            heading={`${
              activeTab === "1"
                ? "Bookmark in one click"
                : activeTab === "2"
                ? "Intelligent search"
                : "Share your bookmarks"
            }`}
          >
            {`${
              activeTab === "1"
                ? ` Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.`
                : activeTab === "2"
                ? ` Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.`
                : `
  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`
            }`}
          </FeaturesFooter>
        </div>
      </div>
    </section>
  );
}

function FeaturesFooter({ children, heading }) {
  return (
    <div>
      <h3 className="lg:text-4xl lg:text-left ">{heading}</h3>
      <p className=" lg:mx-auto lg:text-xl mb-10 lg:max-w-lg">{children}</p>
      <button className="features__btn ">More Info</button>
    </div>
  );
}

function Download() {
  return (
    <section id="download">
      <div className="section-container space-y-10">
        {/*Section Header*/}
        <header>
          <h3>Download the extension</h3>
          <p className="lg:text-center lg:mx-auto lg:text-xl">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </header>

        {/*Container for all extension cards*/}
        <div className="download__cards">
          {/*Chrome Card*/}
          <div className="download__card">
            <img src={chromeLogo} alt="chromeLogo" className="mt-5" />
            <div className="space-y-2">
              <h4>Add to Chrome</h4>
              <p>Minimum version 62</p>
            </div>
            <img src={bgDots} alt="dots" className="w-full" />
            <button className="download__btn">Add & Install Extension</button>
          </div>

          {/*Firefox Card*/}
          <div className="download__card lg:translate-y-10">
            <img src={firefoxLogo} alt="firefox logo" className="mt-5" />
            <div className="space-y-2">
              <h4>Add to Firefox</h4>
              <p>Minimum version 55</p>
            </div>
            <img src={bgDots} alt="dots" className="w-full" />
            <button className="download__btn">Add & Install Extension</button>
          </div>

          {/*Opera Card*/}
          <div className="download__card lg:translate-y-20">
            <img src={operaLogo} alt="opera logo" className="mt-5" />
            <div className="space-y-2">
              <h4>Add to Opera</h4>
              <p>Minimum version 46</p>
            </div>
            <img src={bgDots} alt="dots" className="w-full" />
            <button className="download__btn">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [activeTab, setActiveTab] = useState("");

  function handleTabClick(e) {
    const tabId = e.target.closest(".faq__tab--question").id;
    if (activeTab === tabId) {
      setActiveTab("");
    } else {
      setActiveTab(tabId);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabClick(e);
    }
  }
  return (
    <section id="faq">
      <div className="section-container space-y-10">
        {/*Section Header*/}
        <header>
          <h3>Frequently Asked Questions</h3>
          <p className="lg:text-center lg:mx-auto lg:text-xl">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </header>

        {/*FAQ Tabs*/}
        <div className="faq__tabs lg:border-t-2  lg:border-t-gray-200">
          {/*FAQ Tab-1*/}
          <div className="faq__tab ">
            {/*FAQ Question*/}
            <div
              id="1"
              className="faq__tab--question group"
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <p className={`faq__tab--text `}>What is Bookmark?</p>
              <img
                src={arrowSvg}
                alt="arrow down"
                className={`mt-1 cursor-pointer duration-200 ${
                  activeTab === "1" && "rotate-180 faq__active--arrow"
                }`}
              />
            </div>
            {/*FAQ Answer*/}

            {activeTab === "1" && (
              <p className="text-left mt-5 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            )}
          </div>

          {/*FAQ Tab-2*/}
          <div className="faq__tab ">
            <div
              id="2"
              className="faq__tab--question group"
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <p className={`faq__tab--text `} onClick={handleTabClick}>
                How can I request a new browser?
              </p>
              <img
                src={arrowSvg}
                alt=""
                className={`mt-1 cursor-pointer duration-200 ${
                  activeTab === "2" && "rotate-180 faq__active--arrow"
                }`}
              />
            </div>
            {/*FAQ Answer*/}

            {activeTab === "2" && (
              <p className="text-left mt-5  lg:text-lg ">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </p>
            )}
          </div>

          {/*FAQ Tab-3*/}
          <div className="faq__tab  ">
            <div
              id="3"
              className="faq__tab--question group"
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <p className={`faq__tab--text  `} onClick={handleTabClick}>
                Is there a mobile app?
              </p>
              <img
                src={arrowSvg}
                alt=""
                className={`mt-1 cursor-pointer duration-200 ${
                  activeTab === "3" && "rotate-180 faq__active--arrow"
                }`}
              />
            </div>
            {/*FAQ Answer*/}

            {activeTab === "3" && (
              <p className="text-left mt-5  lg:text-lg">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            )}
          </div>

          {/*FAQ Tab-4*/}
          <div className="faq__tab ">
            <div
              className="faq__tab--question group"
              onClick={handleTabClick}
              onKeyDown={handleKeyDown}
              id="4"
              tabIndex={0}
            >
              <p className={`faq__tab--text `} onClick={handleTabClick}>
                What about other Chromium browsers?
              </p>
              <img
                src={arrowSvg}
                alt=""
                className={`mt-1 cursor-pointer duration-200 ${
                  activeTab === "4" && "rotate-180 faq__active--arrow"
                }`}
              />
            </div>
            {/*FAQ Answer*/}

            {activeTab === "4" && (
              <p className="text-left mt-5  lg:text-lg">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </p>
            )}
          </div>
        </div>
        <button className="features__btn block  mx-auto">More Info</button>
      </div>
    </section>
  );
}

function CTA() {
  const [input, setInput] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function isValidEmail(email) {
    const pattern = new RegExp(
      "^[a-zA-Z0-9._%+-]+@" + "[a-zA-Z0-9.-]+\\." + "[a-zA-Z]{2,}$"
    );
    return pattern.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let urlInput = input;
    if (urlInput === "") {
      setErrorMessage("Please enter something!");
      setIsInvalidInput(true);
    } else if (!isValidEmail(urlInput)) {
      setErrorMessage("Whoops, make sure it`s an email");
      setIsInvalidInput(true);
    } else {
      setInput("");
      setIsInvalidInput(false);
      alert("Success");
    }
  }

  return (
    <section id="cta" className="bg-softBlue">
      <div className="section-container mb-0 space-y-10 lg:py-20">
        {/*Section Header */}
        <header className="cta__header ">
          <span className="text-white tracking-widest font-medium uppercase text-shadow-lg">
            35,500 + already joined
          </span>
          <h3 className="text-white text-shadow-lg">
            Stay up-to-date with that we're doing
          </h3>
        </header>

        {/*Section CTA */}
        <form className="cta__form " onSubmit={handleSubmit}>
          <div className="relative flex-1 ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your  email adress"
              className={`cta__form--input ${
                isInvalidInput && "border-softRed"
              }`}
            />
            {/* Error Message*/}
            {isInvalidInput && (
              <div className="cta__form--error">
                {errorMessage}
                <img
                  src={iconError}
                  alt="iconError"
                  className="absolute -top-10 right-2 lg:-top-8"
                />
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button className="cta__form--btn">Contact Us</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-veryDarkBlue">
      {/* Footer Container */}
      <div className="section-container py-10 mb-0">
        {/*Items Container */}
        <div className="footer__items">
          {/*Logo Container */}
          <div className="flex relative items-center ">
            <img src={logo} alt="logo" className="scale-120" />
            <h3 className=" logo-text--white">BOOKMARK</h3>
          </div>

          {/*Link Container */}
          <div className="footer__links">
            <a href="#" className="footer__link ">
              Features
            </a>
            <a href="#" className="footer__link">
              pricing
            </a>
            <a href="#" className="footer__link">
              contact
            </a>
          </div>

          {/*Socials */}
          <div className="socials lg:ml-auto">
            <img
              src={facebookLogo}
              alt="facebook logo"
              className="social-icon"
              tabIndex={0}
            />
            <img
              src={twitterLogo}
              alt="twitter logo"
              className="social-icon"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
