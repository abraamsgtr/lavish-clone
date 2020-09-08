import React from "react";
import styled from "styled-components";

export const PricingHover = (props) => {
  const HoverEffect = styled.h3`
    transform: (-50%, -50%);
    color: #fff;
    :before {
      content: "${props.text}";
      width: 0;
      position: absolute;
      overflow: hidden;
      transition: 0.9s;
      color: gold;
    }
    :hover:before {
      width: 100%;
    }
  `;
  return (
    <>
      <HoverEffect>{props.text}</HoverEffect>
    </>
  );
};
