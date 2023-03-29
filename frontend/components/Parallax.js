import React, { useEffect, useState } from "react";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div
        className="parallax-content"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      >
        <h1>Programming Theme Picture Parallax Scrolling Animation</h1>
      </div>
      <style jsx>
        {`
            .parallax-bg{
            
                background:url('images/Frame21.jpg');
              }
        `}
      </style>
    </div>
  );
};

export default Parallax;