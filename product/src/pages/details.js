import { Button, colors, Icon, Toast, Topbar } from "design-system";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const data = require("../data/data.js");
const items = data.products;

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    item && (
      <div>
        <StyledDiv1>
          <Topbar
            firstAction={
              <Link to="/">
                <Button isOutline>
                  <Icon name="arrowBack" />
                </Button>
              </Link>
            }
            title={item.name}
          />

          <StyledDiv4>
            <StyledDiv5>
              <StyledButton isOutline>
                <Icon name="heart" />
              </StyledButton>
              <StyledImg src={item.image} alt={item.name} />
            </StyledDiv5>
            <StyledP>{item.category}</StyledP>
            <Styledh1>{item.name}</Styledh1>
            <Styledh2>{item.price}</Styledh2>
            <Button as={Link} to={`/cart/${id}`} isStretched>
              Add to Cart
            </Button>
            <Toast as={`a`} to={`/checkout`} label={`Checkout`}>
              Added to your cart
            </Toast>
          </StyledDiv4>
        </StyledDiv1>
      </div>
    )
  );
};

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv5 = styled.div`
  border-radius: 32px;
  margin-bottom: 24px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display: block;
`;

const StyledP = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
`;
const Styledh1 = styled.h1`
  margin-bottom: 16px;
`;
const Styledh2 = styled.h2`
  color: ${colors.primary900};
  margin-bottom: 40px;
`;

export default Details;
