import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h2`
  color: "black";
  font-size: 50px;
`;

const Container = styled.div`
  padding: 10px;
  align-items: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 40%;
  height: auto;
`;

const ImageContainer = styled.div`
  border: 1px solid #ccc;
  border-color: "black";
  display: flex;
  flex: 1;
  align-items: center;
`;

const Reviews = styled.div`
  border: 1px solid;
  border-radius: 2px;
  padding: 20px;
  margin-top: 20px;
`;

const Review = styled.div``;

const AddBtn = styled.button`
  padding: 20px 40px;
  background-color: #6a4944;
  color: white;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #6a6300;
  }
`;

const Loading = styled.div`
  font-size: 200px;
  color: black;
`;

const Product = ({ addItem }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://v2.api.noroff.dev/online-shop/${productId}`
        );
        const productData = response.data.data;

        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleCart = () => {
    if (product) {
      addItem(product);
      console.log("added: ", product.id);
    }
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <Title>{product.title}</Title>
      <ImageContainer>
        <ProductImage src={product.image.url} alt={product.image.alt} />
        <ProductDetails>
          <p>{product.description}</p>
          <p style={{ fontSize: "30px" }}>{product.discountedPrice}$</p>
          {product.price !== product.discountedPrice && (
            <p style={{ fontSize: "30px" }}>
              <span style={{ textDecoration: "line-through" }}>
                {product.price}$
              </span>
              <p>
                {Math.round((product.price - product.discountedPrice) / 0.01) *
                  0.01}
                $ SAVED
              </p>
            </p>
          )}
          <AddBtn onClick={handleCart}>Add to Cart</AddBtn>
        </ProductDetails>
      </ImageContainer>
      <h3>Reviews</h3>
      <Reviews>
        {product.reviews.map((review) => (
          <Review>
            <p>{review.description}</p>
            <p style={{ fontSize: "30px", textAlign: "center" }}>
              {review.rating} Stars
            </p>
            <p style={{ textAlign: "right" }}>{review.username}</p>
          </Review>
        ))}
      </Reviews>
    </Container>
  );
};

export default Product;
