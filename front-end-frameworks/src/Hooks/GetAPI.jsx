import React, { useState, useEffect } from 'react';

const URL = 'https://v2.api.noroff.dev/online-shop'

const GetAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
        console.log(result.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(URL);
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAPI;