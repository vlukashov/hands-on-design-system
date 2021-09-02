import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { effect, spacing, sizes } from "../../tokens";

/* Toast
 *
 * TODO: add component description
 */

/* use "as" prop to pass Link component of React Router, when you implement this component into product */
const Toast = ({ as, to, label, content, children, props }) => {
  const component = as || "a";
  const link = to || "/";

  return (
    <StyledToast>
      <p>{content ? content : children}</p>
      <Button as={component} to={link} isBorderless>
        {label}
      </Button>
    </StyledToast>
  );
};

export const StyledToast = styled.div`
  display: flex;
  box-shadow: ${effect.shadowDefault0OffsetX} ${effect.shadowDefault0OffsetY} ${effect.shadowDefault0Radius} ${effect.shadowDefault0Spread} ${effect.shadowDefault0Color},
  ${effect.shadowDefault1OffsetX} ${effect.shadowDefault1OffsetY} ${effect.shadowDefault1Radius} ${effect.shadowDefault1Spread} ${effect.shadowDefault1Color};
  padding-top: ${spacing.spacexlTop};
  padding-right: ${spacing.space2xlRight};
  padding-bottom: ${spacing.spacexlBottom};
  padding-left: ${spacing.space2xlLeft};
  justify-content: space-between;
  border-radius: ${sizes.sizelg};
  margin-top: ${spacing.space2xlTop};
`;

export default Toast;
