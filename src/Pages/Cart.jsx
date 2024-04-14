import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: "black";
`;

const ItemsList = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckoutBtn = styled.button`
  background-color: #6a4944;
  color: white;
  padding: 20px 40px;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #6a6300;
  }
`;

const Cart = ({ products }) => {
  const total = () => {
    let sum = 0;
    products.forEach((element) => {
      sum += element.discountedPrice;
    });
    return sum;
  };

  return (
    <Container>
      <Title>Checkout</Title>
      {products.length > 0 ? (
        <div>
          <ItemsList>
            <ul>
              {products.map((product) => (
                <li>
                  <Item>
                    <p>
                      {product.title} - {product.discountedPrice}$
                    </p>
                  </Item>
                </li>
              ))}
            </ul>
          </ItemsList>

          <p style={{ fontSize: "30px" }}>
            TOTAL: {Math.round(total() / 0.01) * 0.01}$
          </p>

          <Link to="/checkout">
            <CheckoutBtn>Checkout</CheckoutBtn>
          </Link>
        </div>
      ) : (
        <p></p>
      )}
    </Container>
  );
};

export default Cart;
