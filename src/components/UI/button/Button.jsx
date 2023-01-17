import React from "react";
import styled from "styled-components";

const Button = ({ bgcolor, color, children, ...props }) => {
  const styles = {
    backgroundColor: bgcolor,
    color: color,
    padding: "7px",
    borderRadius: "7px",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
  };

  return (
    <>
      <Btn {...props} style={styles}>
        {children}
      </Btn>
    </>
  );
};

export default Button;

const Btn = styled.button``;
