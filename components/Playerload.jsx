import React from "react";
import ContentLoader from "react-content-loader";

export const Playerload = (props) => {
  return (
    <ContentLoader 
      speed={1}
      width={1800}
      height={124}
      viewBox="0 0 1600 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#2e2e2e"
      {...props}
    >
      <rect x="176" y="27" rx="3" ry="3" width="144" height="10" /> 
      <rect x="176" y="56" rx="3" ry="3" width="86" height="10" /> 
      <rect x="781" y="29" rx="3" ry="3" width="533" height="8" /> 
      <rect x="90" y="17" rx="0" ry="0" width="74" height="56" /> 
      <circle cx="464" cy="37" r="27" /> 
      <rect x="386" y="20" rx="0" ry="0" width="40" height="35" /> 
      <rect x="503" y="20" rx="0" ry="0" width="40" height="35" />
    </ContentLoader>
  );
};

export const Playerloadsm = (props) => {
  return (
    <ContentLoader 
      speed={1}
      width={800}
      height={124}
      viewBox="0 0 800 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#2e2e2e"
      {...props}
    >
      <rect x="221" y="28" rx="3" ry="3" width="144" height="10" /> 
      <rect x="220" y="56" rx="3" ry="3" width="86" height="8" /> 
      <rect x="77" y="108" rx="3" ry="3" width="533" height="8" /> 
      <rect x="133" y="18" rx="0" ry="0" width="74" height="56" /> 
      <circle cx="692" cy="42" r="27" /> 
      <rect x="615" y="27" rx="0" ry="0" width="36" height="33" /> 
      <rect x="733" y="25" rx="0" ry="0" width="39" height="31" />
    </ContentLoader>
  );
};
