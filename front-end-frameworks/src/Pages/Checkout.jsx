import React, { useEffect } from "react";
import styled from "styled-components";

const Checkout = ({ checkout }) => {
  useEffect(() => {
    checkout();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Container = styled.div`
    text-align: center;
  `;

  return (
    <Container>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase.</p>
    </Container>
  );
};

export default Checkout;
