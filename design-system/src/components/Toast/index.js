import React from "react";
import styled from "styled-components";
import Button from "../Button";

/* Toast
 *
 * TODO: add component description
 */

/* use "as" prop to pass Link component of React Router, when you implement this component into product */
const Toast = ({ as, props }) => {
  const component = as || "a";
  return (
    <StyledToast>
      <p>Added to your cart</p>
      <Button as={component} to="/checkout" isBorderless>
        Checkout
      </Button>
    </StyledToast>
  );
};

export const StyledToast = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  padding: 20px 24px;
  justify-content: space-between;
  border-radius: 16px;
  margin-top: 24px;
`;

export default Toast;
