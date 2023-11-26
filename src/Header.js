import React, { useEffect , useRef} from "react";

const Header = () => {
  useEffect(() => {
    const headerel = headerRef.current;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        headerel.classList.add("header_blur");
        console.log("hello");
      } else if (window.scrollY < 20) {
        headerel.classList.remove("header_blur");
      }
    });
  }, []);

  const headerRef = useRef(null);

  return (
    <div>
      <header ref={headerRef} className="header">
        <a href="#" className="logo">
          CryptoArtVerse
        </a>
        <nav className="navbar" style={{ marginLeft: "-160px" }}>
          <a href="#" >
            Home
          </a>
          <a href="#lineContainer">About</a>
          {/* <a href="#">Portfolio</a>
          <a href="#">Service</a>
          <a href="#">Contact</a> */}
        </nav>
        <nav className="join">
          <a href="#">Login</a>
          <a href="#">Sign in</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
