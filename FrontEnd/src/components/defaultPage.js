import React from "react";

const DefaultPage = (props) => {
  return (
    <div className="row">
      <div className="single-page">
        { props.children }
      </div>
    </div>
  );
};
export default DefaultPage;
