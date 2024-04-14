import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Product from "../Components/Product/Product";
import SearchBar from "../Components/Searchbar/Searchbar";

const API_URL = "https://v2.api.noroff.dev/online-shop";

const Container = styled.div`
  padding: 10px;
`;

const Loading = styled.div`
  font-size: 200px;
  color: black;
`;

const Search = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px));
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    height: 100%;
  }
  img:hover {
    opacity: 0.1;
  }
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(false);
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data.data);
      setSearchedProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (search) => {
    if (!search) {
      setSearchedProducts(products);
    } else {
      const resultSearch = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedProducts(resultSearch);
    }
  };

  return (
    <Container>
      <Search>
        <SearchBar products={products} search={handleSearch} />
      </Search>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ProductList>
          {searchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default Home;
