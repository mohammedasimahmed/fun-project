import React, { useRef, useEffect } from "react";
import "./App.css";
import bgVideo from "./videos/bgVideo4.mp4";
import avtar2 from "./videos/avtar2.mp4";
import v3 from "./videos/v3.mp4";
import avtar2_unscreen from "./videos/avtar2_unscreen.gif";
import { useAnimation, motion, useInView } from "framer-motion";

const App = () => {
  const headerRef = useRef(null);
  const textVideoRef = useRef(null);
  const lineAppearRef = useRef(null);
  const lineAppearBottomRef = useRef(null);
  const lineAppearMiddleRefs = useRef([]);
  const vdScrollRotateRef = useRef(null);
  const contentContainerRef = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  // const animationVariants = {
  //   initial: { opacity: 0, y: 50 },
  //   animate: { opacity: 1, y: 0 },
  // };

  useEffect(() => {
    const headerel = headerRef.current;
    const textVideo = textVideoRef.current;
    const lineAppear = lineAppearRef.current;
    const lineAppearBottom = lineAppearBottomRef.current;
    // const lineAppearMiddle = lineAppearMiddleRefs.current;
    const vdScrollRotate = vdScrollRotateRef.current;
    const contentContainer = contentContainerRef.current;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        headerel.classList.add("header_blur");
        console.log("hello");
      } else if (window.scrollY < 20) {
        headerel.classList.remove("header_blur");
      }
      if (window.scrollY > 500) {
        // textVideo.style.left = "0";
        // textVideo.style.opacity = "1";
        contentContainer.style.opacity = "1";
        contentContainer.style.left = "0";
      } else if (window.scrollY > 20 && window.scrollY < 500) {
        // textVideo.style.left = "-230px";
        // textVideo.style.opacity = "0";
        contentContainer.style.left = "500px";
        contentContainer.style.opacity = "0";
      }
      if (window.scrollY > 1150) {
        let lineAppear = document.querySelector(".lineAppear");
        lineAppear.style.width = "100%";
        lineAppearBottom.style.width = "100%";
        let lineAppearMiddle = document.querySelectorAll(".lineAppearMiddle");
        lineAppearMiddle.forEach((item) => {
          item.style.height = "85%";
        });
        // lineAppearMiddle.forEach((item) => {
        //   item.style.height = "85%";
        // });
      } else if (window.scrollY < 1150 && window.scrollY > 1000) {
        let lineAppear = document.querySelector(".lineAppear");
        lineAppear.style.width = "0";
        lineAppearBottom.style.width = "0";
        let lineAppearMiddle = document.querySelectorAll(".lineAppearMiddle");
        lineAppearMiddle.forEach((item) => {
          item.style.height = "0";
        });
      }
    });

    const content = document.querySelector(".content");
    content.style.opacity = "1";
    content.style.transform = "translateY(-70px)";
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <header ref={headerRef} className="header">
        <a href="#" className="logo">
          CryptoArtVerse
        </a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <nav className="join">
          <a href="#">Login</a>
          <a href="#">Sign in</a>
        </nav>
      </header>
      <video width="1320" height="1100" autoPlay muted loop className="bgVideo">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content" ref={contentContainerRef}>
        <h1 className="welcome">Welcome To The Digital Crypto Art</h1>
        <p className="text_content">
          Lorem ipsum dolor sit amet, an his etiam torquatos
          <br />
          <br />
          neglegentur. Cu mentitum maiestatis persequeris pro,
          <br />
          <br />
        </p>
        <button id="myBtn">EXPLORE NOW</button>
      </div>
      <div className="color">
        <div className="videoContainer">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
          >
            <div className="textVideo" ref={textVideoRef}>
              <h2 className="trade">Trade</h2>
              <h2 className="tradeAsset">
                The virtual destination for digital assets
              </h2>
              <p>
                Buy and sell LAND, Estates, Avatar wearables and names in the
                Decentraland Marketplace: stocking the very best digital goods
                and paraphernalia backed by the Ethereum blockchain.
              </p>
              <button className="browse">START BROWSING</button>
            </div>
          </motion.div>
          {/* <video width="720" height="440" autoPlay muted loop>
            <source src={avtar2} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src={avtar2_unscreen} />
        </div>
        <div className="scrollRotate">
          <div className="vdRotate">
            <div className="vdContainer" ref={vdScrollRotateRef}>
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                className="vdScrollRotate"
              >
                <source src={v3} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <div className="contentContainer" ref={contentContainerRef}>
            <h1 className="titleRotate">WORLD</h1>
            <p className="linePara">
              The XR Portal To The Open Metaverse Enabling You To Play, Learn,
              Socialize, Work And Travel To Different Worlds, Making VIVERSE
              Even More Immersive From The Second You Put On Your Headset.
            </p>
            <button className="lineBtn">Explore Now</button>
          </div>
        </div>
      </div>
      <div className="lineContainer" id="lineContainer">
        <div className="lineAppear" ref={lineAppearRef}></div>
        <div className="lineAppearBottom" ref={lineAppearBottomRef}></div>
        <div className="first a">
          <div className="lineAppearMiddle" ref={lineAppearMiddleRefs[0]}></div>
          <h1 className="line">WORLD</h1>
          <p className="linePara">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <button className="lineBtn">Explore Now</button>
        </div>
        <div className="second a">
          <div className="lineAppearMiddle" ref={lineAppearMiddleRefs[1]}></div>
          <h1 className="line">WORLD</h1>
          <p className="linePara">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <button className="lineBtn">Explore Now</button>
          <div className="lineAppearMiddle" ref={lineAppearMiddleRefs[2]}></div>
        </div>
        <div className="third a">
          <h1 className="line">WORLD</h1>
          <p className="linePara">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <button className="lineBtn">Explore Now</button>
        </div>
      </div>
      <div className="container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">Mohammed Asim Ahmed</div>

            <div className="flip-card-back">Mohammed Asim Ahmed</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">Mohammed Asim Ahmed</div>
            <div className="flip-card-back">Mohammed Asim Ahmed</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">Mohammed Asim Ahmed</div>
            <div className="flip-card-back">Mohammed Asim Ahmed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
