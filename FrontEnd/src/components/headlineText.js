/*
* Re-usabel component to render simple sub header titles.
* The size property determines the bottom margin and can be one of {small, medium, big }
*/
import React from "react";

const HeadlineText = (props) => {
  const {title, size } = props;
  return (
    <div className={`u-center-text u-margin-bottom-${size}`}>
      <h2 className="heading-secondary">
        {title.toUpperCase()}
      </h2>
    </div>
  );
};
// TODO: prop validation
export default HeadlineText;
