import React from "react";

function Banner({ children, status }) {
  return (
    <div className={`banner ${status}`}>
      {children}
    </div>
  );
}

export default Banner;
