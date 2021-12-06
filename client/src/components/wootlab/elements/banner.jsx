import React from "react";

function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h4> {title} </h4>
      <p> {subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;