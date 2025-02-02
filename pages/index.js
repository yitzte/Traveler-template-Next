import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Feature from '../components/feature'
import Offer from '../components/offer'
import Location from '../components/location'
import Guide from '../components/guide'
import Article from '../components/article'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Traveler template</title>
          <meta property="og:title" content="Traveler template" />
        </Head>
        <section className="home-hero">
          <div className="home-main1">
            <div className="home-video1">
              <video
                src
                poster="/Videos/hero-cover1-1500h.png"
                className="home-video2"
              ></video>
              <div className="home-tint1"></div>
            </div>
            <div className="home-content10">
              <header className="home-header10">
                <header data-thq="thq-navbar" className="home-navbar">
                  <img alt="logo" src="/logo.svg" className="home-logo1" />
                  <div data-thq="thq-burger-menu" className="home-menu">
                    <div className="home-links1">
                      <a href="#features" className="home-link10 link">
                        Features
                      </a>
                      <span className="link">How it works</span>
                      <span className="link">Prices</span>
                      <a href="#find" className="home-link11 link">
                        Contact
                      </a>
                    </div>
                    <button className="home-hamburger button">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </button>
                  </div>
                  <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                    <div
                      data-thq="thq-mobile-menu-nav"
                      data-role="Nav"
                      className="home-nav1"
                    >
                      <div className="home-container2">
                        <img
                          alt="logo"
                          src="/logo.svg"
                          className="home-logo2"
                        />
                        <div
                          data-thq="thq-close-menu"
                          className="home-menu-close"
                        >
                          <svg viewBox="0 0 1024 1024" className="home-icon12">
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <nav
                        data-thq="thq-mobile-menu-nav-links"
                        data-role="Nav"
                        className="home-nav2"
                      >
                        <span className="home-text12">About</span>
                        <span className="home-text13">Features</span>
                        <span className="home-text14">Pricing</span>
                        <span className="home-text15">Team</span>
                        <span className="home-text16">Blog</span>
                      </nav>
                      <div className="home-container3">
                        <button className="home-login button">Login</button>
                        <button className="button">Register</button>
                      </div>
                    </div>
                    <div className="home-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon14"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon16"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon18"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </header>
              </header>
              <div className="home-center">
                <div className="home-heading10">
                  <h1 className="home-header11">See the world like a local</h1>
                  <p className="home-caption10">
                    Find a local guide consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="home-border">
                  <div className="home-filter">
                    <img
                      alt="image"
                      src="/Icons/location.svg"
                      className="home-image1"
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="home-textinput1 input"
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="home-textinput2 input"
                    />
                    <input
                      type="number"
                      placeholder="Group size"
                      className="home-textinput3 input"
                    />
                    <div className="home-search">
                      <img
                        alt="image"
                        src="/Icons/search.svg"
                        className="home-icon20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="features" className="home-feaures">
            <div className="home-content11">
              <Feature></Feature>
              <Feature
                icon="/Icons/headset.svg"
                header="24/7 Support"
              ></Feature>
              <Feature
                icon="/Icons/person.svg"
                header="Private Tours"
              ></Feature>
            </div>
          </div>
        </section>
        <section id="tours" className="home-quick-view">
          <div className="home-main2">
            <div className="home-heading11">
              <h2 className="home-header12">See the world like a local</h2>
              <p className="home-caption11">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-sorting">
              <button className="home-option-primary button">All</button>
              <button className="button-option button">Popular</button>
              <button className="button-option button">Featured</button>
              <button className="button-option button">Trending</button>
            </div>
          </div>
          <div className="home-offers">
            <Link href="/">
              <a>
                <div className="home-offer-container1">
                  <Offer image="/Offers/offers-11-1500w.png"></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container2">
                  <Offer
                    image="/Offers/offers-21-1500w.png"
                    guides="54 Local guides"
                    location="Barcelona, Spain"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container3">
                  <Offer
                    image="/Offers/offers-31-1500w.png"
                    guides="34 Local Guides"
                    location="Machu Picchu, Peru"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container4">
                  <Offer
                    image="/Offers/offers-41-1500w.png"
                    guides="1 Local guide"
                    location="Doha, Quatar"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container5">
                  <Offer
                    image="/Offers/offers-51-1500w.png"
                    guides="6 Local guides"
                    location="Rhodes, Greece"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container6">
                  <Offer
                    image="/Offers/offers-61-1500w.png"
                    guides="132 Local guides"
                    location="New York, USA"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container7">
                  <Offer
                    image="/Offers/offers-71-1500w.png"
                    guides="1 Local guide"
                    location="Doha, Quatar"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container8">
                  <Offer
                    image="/Offers/offers-81-1500w.png"
                    guides="6 Local guides"
                    location="Rhodes, Greece"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container9">
                  <Offer
                    image="/Offers/offers-91-1500w.png"
                    guides="132 Local guides"
                    location="New York, USA"
                  ></Offer>
                </div>
              </a>
            </Link>
          </div>
          <div className="home-pagination">
            <button className="home-previous1 button-option button">
              <svg viewBox="0 0 1024 1024" className="home-icon21">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
              <span className="home-text17">Previous</span>
            </button>
            <div className="home-pages">
              <div className="home-primary">
                <div className="home-number-current page-current page">
                  <span className="home-text18">1</span>
                </div>
                <div className="page">
                  <span className="home-text19">2</span>
                </div>
                <div className="page home-number2">
                  <span className="home-text20">3</span>
                </div>
              </div>
              <img alt="image" src="/Icons/more.svg" className="home-more" />
              <div className="page">
                <span className="home-text21">12</span>
              </div>
            </div>
            <button className="home-next1 button-option button">
              <span className="home-text22">Next</span>
              <svg viewBox="0 0 1024 1024" className="home-icon23">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </button>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-content12">
            <div className="home-heading12">
              <span className="home-title">Customer testimonial</span>
              <p className="home-quote">
                “We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.”
              </p>
            </div>
            <div className="home-details">
              <div className="home-author">
                <img
                  alt="image"
                  src="/Avatar/quote-200h.png"
                  className="home-avatar"
                />
                <span className="home-name">Michael McDonald</span>
              </div>
              <div className="home-controls">
                <div className="page">
                  <span className="home-text23">&lt;</span>
                </div>
                <div className="home-next2 page">
                  <span className="home-text24">&lt;</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="home-highlights">
          <div className="home-highlight1">
            <div className="home-content13">
              <div className="home-heading13">
                <h2 className="home-header13">
                  Excepteur sint occaecat cupidatat non proident
                </h2>
                <p className="home-caption12">
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button-arrow button">
                <span className="home-text25">Read more</span>
                <span className="home-text26">&gt;</span>
              </button>
            </div>
            <div className="home-image2">
              <img
                alt="image"
                src="/Highlights/highlight-1-1500w.png"
                className="home-image3"
              />
              <div className="home-rectangle"></div>
            </div>
          </div>
          <div className="home-highlight2">
            <div className="home-image4">
              <img
                alt="image"
                src="/Highlights/highlight-2-1500w.png"
                className="home-image5"
              />
            </div>
            <div className="home-content14">
              <div className="home-heading14">
                <h2 className="home-header14">
                  Excepteur sint occaecat cupidatat non proident
                </h2>
                <p className="home-caption13">
                  <span>
                    Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                  <br></br>
                </p>
              </div>
              <button className="home-find1 button">Find a local guide</button>
            </div>
          </div>
        </section>
        <section id="destinations" className="home-destinations">
          <div className="home-video-details">
            <div className="home-heading15">
              <h2 className="home-header15">Spotlight destinations</h2>
              <p className="home-caption14">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-video-wrapper">
              <div className="home-tint2">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-image6"
                />
              </div>
              <video
                src
                poster="/Videos/spotlight-cover1-1500w.png"
                className="home-video3"
              ></video>
            </div>
          </div>
          <p className="home-caption15">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <div className="home-list1">
            <Link href="/">
              <a className="home-link21">
                <div className="home-location-wrapper1">
                  <Location></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link22">
                <div className="home-location-wrapper2">
                  <Location
                    location="Paris, France"
                    background="/Destinations/destination-2-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link23">
                <div className="home-location-wrapper3">
                  <Location
                    location="Bruges, Belgium"
                    background="/Destinations/destination-3-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link24">
                <div className="home-location-wrapper4">
                  <Location
                    location="London, UK"
                    background="/Destinations/destination-4-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
          </div>
          <button className="home-find2 button">Find a local guide</button>
        </section>
        <section id="guides" className="home-guides">
          <div className="home-heading16">
            <h2 className="home-header16">Meet our guides</h2>
            <p className="home-caption16">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-list2">
            <Link href="/">
              <a>
                <div className="home-guide-wrapper1">
                  <Guide></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper2">
                  <Guide
                    location="Paris, France"
                    portrait="/Guides/guide-2.png"
                    rootClassName="guideroot-class-name2"
                  ></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper3">
                  <Guide
                    location="Bruges, Belgium"
                    portrait="/Guides/guide-3.png"
                    rootClassName="guideroot-class-name"
                  ></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper4">
                  <Guide
                    location="London, UK "
                    portrait="/Guides/guide-4.png"
                    rootClassName="guideroot-class-name1"
                  ></Guide>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="home-articles">
          <div id="articles" className="home-content15">
            <div className="home-heading17">
              <h2 className="home-header17">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption17">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-list3">
              <div className="home-row1">
                <Article
                  image="/Articles/articles-11-1500w.png"
                  rootClassName="articleroot-class-name1"
                ></Article>
                <Article
                  image="/Articles/articles-21-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  rootClassName="articleroot-class-name"
                ></Article>
              </div>
              <div className="home-row2">
                <Article
                  image="/Articles/articles-31-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  rootClassName="articleroot-class-name2"
                ></Article>
                <Article
                  image="/Articles/articles-41-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  rootClassName="articleroot-class-name3"
                ></Article>
              </div>
              <div className="home-row3">
                <button className="home-read-all button-option button">
                  Read all articles
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div id="faqs" className="home-content16">
            <div className="home-heading18">
              <h2 className="home-header18">Frequently asked questions</h2>
              <p className="home-caption18">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-accordion1">
              <div
                data-role="accordion-container"
                className="accordion home-element1"
              >
                <div className="home-content17">
                  <span className="home-header19">
                    Lorem ipsum dolor sit ametetur elit?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description1"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container1">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon25"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon27"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element2 accordion"
              >
                <div className="home-content18">
                  <span className="home-header20">
                    Excepteur sint occaecat cupidatat non sunt in culpa qui
                    officia deserunt mollit anim id est laborum?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description2"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container2">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon29"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon31"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element3 accordion"
              >
                <div className="home-content19">
                  <span className="home-header21">
                    Tempor incididunt ut labore et dolore magna aliquat enim ad
                    minim?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description3"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container3">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon33"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon35"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element4 accordion"
              >
                <div className="home-content20">
                  <span className="home-header22">
                    Lorem ipsum dolor sit ametetur elit?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description4"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container4">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon37"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon39"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element5 accordion"
              >
                <div className="home-content21">
                  <span className="home-header23">
                    Incididunt ut labore et dolore?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description5"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container5">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon41"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon43"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="find" className="home-find3">
          <div className="home-heading19">
            <h2 className="home-header24">Find a local guide now</h2>
            <p className="home-caption19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <button className="home-find4 button">Find a local guide</button>
        </section>
        <section className="home-footer">
          <div className="home-content22">
            <div className="home-main3">
              <div className="home-branding">
                <div className="home-heading20">
                  <img alt="image" src="/logo.svg" className="home-image7" />
                  <p className="home-caption20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="home-links2">
                <div className="home-items1">
                  <button className="home-link29 button button-clean">
                    Find a guide
                  </button>
                  <a
                    href="#destinations"
                    className="home-link30 button button-clean"
                  >
                    Find a tour
                  </a>
                  <a
                    href="#destinations"
                    className="home-link31 button button-clean"
                  >
                    Visit a city
                  </a>
                  <a
                    href="#destinations"
                    className="home-link32 button button-clean"
                  >
                    Visit a country
                  </a>
                </div>
                <div className="home-items2">
                  <a
                    href="#how-it-works"
                    className="home-link33 button button-clean"
                  >
                    How it works
                  </a>
                  <button className="home-link34 button button-clean">
                    Cancelation policy
                  </button>
                  <button className="home-link35 button button-clean">
                    Local guides
                  </button>
                  <button className="home-link36 button button-clean">
                    Affiliate
                  </button>
                </div>
                <div className="home-items3">
                  <button className="home-link37 button button-clean">
                    About us
                  </button>
                  <button className="home-link38 button button-clean">
                    Blog
                  </button>
                  <button className="home-link39 button button-clean">
                    Partners
                  </button>
                  <button className="home-link40 button button-clean">
                    Faqs
                  </button>
                  <button className="home-link41 button button-clean">
                    Careers
                  </button>
                </div>
              </div>
            </div>
            <span className="home-copyright">
              © 2022 Character. All Rights Reserved.
            </span>
          </div>
        </section>
        <div>
          <div className="home-container5">
            <Script
              html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-main1 {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-video1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video2 {
            height: 100%;
          }
          .home-tint1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .home-content10 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header10 {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            height: 33px;
          }
          .home-menu {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link10 {
            text-decoration: none;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-hamburger {
            cursor: pointer;
            display: none;
            padding: var(--dl-space-space-unit);
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .home-icon10 {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo2 {
            height: 33px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-center {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading10 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 90px;
          }
          .home-caption10 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-border {
            width: 100%;
            display: flex;
            max-width: 700px;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.3);
            border-width: 4px;
            border-radius: 50px;
            flex-direction: column;
            justify-content: center;
          }
          .home-filter {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 500px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-image1 {
            height: 22px;
            object-fit: cover;
          }
          .home-textinput1 {
            width: 100%;
            padding: 0px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            border-right-width: 1px;
          }
          .home-textinput2 {
            width: 50%;
            padding: 0px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            border-right-width: 1px;
          }
          .home-textinput3 {
            width: 50%;
            padding: 4px;
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
          }
          .home-search {
            cursor: pointer;
            display: flex;
            padding: 12px;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #fad87a;
          }
          .home-search:hover {
            opacity: 0.5;
          }
          .home-icon20 {
            width: 18px;
            object-fit: cover;
          }
          .home-feaures {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #397b53;
          }
          .home-content11 {
            gap: 140px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-quick-view {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-main2 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header12 {
            color: #352b2a;
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption11 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-sorting {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-option-primary {
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            background-color: rgb(250, 216, 122);
          }
          .home-option-primary:hover {
            opacity: 0.5;
          }
          .home-offers {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .home-offer-container1 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container2 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container3 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container4 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container5 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container6 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container7 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container8 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container9 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-pagination {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
          }
          .home-previous1 {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon21 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .home-pages {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-primary {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-number-current {
            border-color: rgba(0, 0, 0, 0);
          }
          .home-text18 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text19 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text20 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-more {
            width: 17px;
            object-fit: cover;
          }
          .home-text21 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-next1 {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon23 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #f8f0e9;
          }
          .home-content12 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading12 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            color: #352b2a;
            font-size: 18px;
            line-height: 27px;
          }
          .home-quote {
            color: #352b2a;
            font-size: 40px;
            font-style: italic;
            font-family: Cormorant Infant;
            font-weight: 600;
            line-height: 48px;
          }
          .home-details {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-author {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-name {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-controls {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text23 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-next2 {
            transform: rotate(180deg);
          }
          .home-text24 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-highlights {
            gap: 220px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 170px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-highlight1 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content13 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading13 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header13 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption12 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-text25 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text26 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image2 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image3 {
            object-fit: cover;
          }
          .home-rectangle {
            right: -215px;
            width: 315px;
            bottom: -95px;
            height: 410px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #397b53;
          }
          .home-highlight2 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image4 {
            height: 530px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content14 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading14 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header14 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption13 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-find1 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find1:hover {
            opacity: 0.5;
          }
          .home-destinations {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-video-details {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading15 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header15 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption14 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-video-wrapper {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .home-video-wrapper:hover {
            opacity: 0.75;
          }
          .home-tint2 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            pointer-events: none;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .home-image6 {
            width: 115px;
            object-fit: cover;
          }
          .home-video3 {
            width: 100%;
          }
          .home-caption15 {
            font-size: 24px;
            max-width: 900px;
            text-align: center;
            line-height: 36px;
          }
          .home-list1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link21 {
            display: contents;
          }
          .home-location-wrapper1 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link22 {
            display: contents;
          }
          .home-location-wrapper2 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link23 {
            display: contents;
          }
          .home-location-wrapper3 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link24 {
            display: contents;
          }
          .home-location-wrapper4 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-find2 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find2:hover {
            opacity: 0.5;
          }
          .home-guides {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-heading16 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header16 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption16 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-list2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          }
          .home-guide-wrapper1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-articles {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #f8f0e9;
          }
          .home-content15 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header17 {
            color: rgb(53, 43, 42);
            width: 100%;
            font-size: 60px;
            max-width: 800px;
            font-style: normal;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption17 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 800px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-list3 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row2 {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-read-all {
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #e8ded5;
          }
          .home-content16 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading18 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption18 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-accordion1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-content17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header19 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description1 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon25 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon27 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header20 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon29 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon31 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header21 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon33 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon35 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header22 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description4 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon37 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon39 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element5 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header23 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description5 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container5 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon41 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon43 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-find3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #477e5d;
          }
          .home-heading19 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header24 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption19 {
            color: #ffffff;
            font-size: 18px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-find4 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find4:hover {
            opacity: 0.5;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #352b2a;
          }
          .home-content22 {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image7 {
            height: 33px;
            object-fit: cover;
          }
          .home-caption20 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-links2 {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-items1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link29 {
            color: rgb(255, 255, 255);
          }
          .home-link30 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link31 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link32 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-items2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link33 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link34 {
            color: rgb(255, 255, 255);
          }
          .home-link35 {
            color: rgb(255, 255, 255);
          }
          .home-link36 {
            color: rgb(255, 255, 255);
          }
          .home-items3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link37 {
            color: rgb(255, 255, 255);
          }
          .home-link38 {
            color: rgb(255, 255, 255);
          }
          .home-link39 {
            color: rgb(255, 255, 255);
          }
          .home-link40 {
            color: rgb(255, 255, 255);
          }
          .home-link41 {
            color: rgb(255, 255, 255);
          }
          .home-copyright {
            color: #766968;
            font-size: 12px;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-links1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content11 {
              gap: var(--dl-space-space-fourunits);
            }
            .home-quick-view {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-offers {
              grid-template-columns: auto auto;
            }
            .home-testimonials {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlights {
              gap: 135px;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlight1 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-highlight2 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-find2 {
              width: 50%;
              text-align: center;
            }
            .home-list2 {
              grid-template-columns: auto auto;
            }
            .home-list3 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-row2 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-element1 {
              border-top-width: 1px;
            }
            .home-content17 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header19 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content18 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header20 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content19 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header21 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content20 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header22 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content21 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header23 {
              font-size: 16px;
            }
            .home-description5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content22 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main3 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-branding {
              max-width: 80%;
            }
            .home-heading20 {
              gap: var(--dl-space-space-unit);
            }
            .home-links2 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-main1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-menu {
              display: flex;
            }
            .home-links1 {
              display: none;
            }
            .home-hamburger {
              display: flex;
            }
            .home-mobile-menu {
              background-color: #397b53;
            }
            .home-icon12 {
              fill: #fff;
            }
            .home-text12 {
              color: #fff;
            }
            .home-text13 {
              color: #fff;
            }
            .home-text14 {
              color: #fff;
            }
            .home-text15 {
              color: #fff;
            }
            .home-text16 {
              color: #fff;
            }
            .home-center {
              padding-bottom: 100px;
            }
            .home-heading10 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header11 {
              font-size: 40px;
              line-height: 40px;
            }
            .home-caption10 {
              font-size: 16px;
              max-width: 80%;
              line-height: 24px;
            }
            .home-feaures {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content11 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-quick-view {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-offers {
              grid-template-columns: auto;
            }
            .home-pagination {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-testimonials {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content12 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading12 {
              gap: var(--dl-space-space-unit);
              width: 80%;
              align-items: center;
            }
            .home-title {
              font-size: 12px;
              text-align: center;
              line-height: 18px;
            }
            .home-quote {
              font-size: 24px;
              text-align: center;
              line-height: 28px;
            }
            .home-details {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: center;
            }
            .home-author {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-avatar {
              width: 60px;
            }
            .home-name {
              font-size: 14px;
            }
            .home-highlights {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content13 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading13 {
              gap: var(--dl-space-space-unit);
            }
            .home-header13 {
              font-size: 32px;
              line-height: 30px;
            }
            .home-caption12 {
              font-size: 16px;
            }
            .home-image4 {
              width: 100%;
              height: auto;
            }
            .home-content14 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading14 {
              gap: var(--dl-space-space-unit);
            }
            .home-header14 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption13 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-destinations {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading15 {
              gap: var(--dl-space-space-unit);
            }
            .home-header15 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption14 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption15 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-location-wrapper1 {
              width: 100%;
            }
            .home-location-wrapper2 {
              width: 100%;
            }
            .home-location-wrapper3 {
              width: 100%;
            }
            .home-location-wrapper4 {
              width: 100%;
            }
            .home-guides {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading16 {
              gap: var(--dl-space-space-unit);
            }
            .home-header16 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-list2 {
              grid-template-columns: auto;
            }
            .home-articles {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content15 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
            }
            .home-heading17 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-header17 {
              font-size: 32px;
              max-width: 75%;
              text-align: center;
              line-height: 31px;
            }
            .home-caption17 {
              font-size: 16px;
              max-width: 60%;
              text-align: center;
              line-height: 24px;
            }
            .home-list3 {
              gap: var(--dl-space-space-twounits);
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-row2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-faq {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content16 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading18 {
              gap: var(--dl-space-space-unit);
            }
            .home-header18 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption18 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element2 {
              align-items: flex-start;
            }
            .home-element3 {
              align-items: flex-start;
            }
            .home-element4 {
              align-items: flex-start;
            }
            .home-element5 {
              align-items: flex-start;
            }
            .home-find3 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading19 {
              gap: var(--dl-space-space-unit);
            }
            .home-header24 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption19 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content22 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-branding {
              max-width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-sorting {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-pagination {
              gap: var(--dl-space-space-halfunit);
            }
            .home-previous1 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-icon21 {
              display: flex;
            }
            .home-text17 {
              display: none;
            }
            .home-number2 {
              display: none;
            }
            .home-next1 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text22 {
              display: none;
            }
            .home-icon23 {
              display: flex;
            }
            .home-image3 {
              width: 100%;
            }
            .home-rectangle {
              right: -120px;
              width: 200px;
              bottom: -110px;
            }
            .home-header19 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header20 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header21 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header22 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header23 {
              font-size: 16px;
            }
            .home-description5 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
