import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const DiscountBadge = styled.div`
  top: 10px;
  background-color: green;
  color: white;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: contain;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 50px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;


const Product = ({ product }) => {
  const percentageDiscount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

  return (
    <ProductCard>
      {product.price !== product.discountedPrice && (
        <DiscountBadge>{percentageDiscount}% OFF</DiscountBadge>
      )}
      <ImageContainer>
        <Link to={`/product/${product.id}`}>
        <ProductImage  src={product.image.url} alt={product.image.alt} />
        </Link>
      </ImageContainer>
      <ProductDetails>
        <div>
          <Title>{product.title}</Title>
          
        </div>
      </ProductDetails>
    </ProductCard>
  );
};



export default Product;
