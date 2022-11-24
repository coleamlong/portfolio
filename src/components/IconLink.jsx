import React from "react";

const IconLink = (props) => {
  const { icon, link } = props;
  return (
    <a href={link}>
      <i className={icon + " text-muted fs-2"} />
    </a>
  );
};
export default IconLink;
