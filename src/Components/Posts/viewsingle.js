import React, { useEffect, useState } from 'react';

const SingleProductView = ({ match }) => {
  const productId = match.params.productId;
  // Fetch the product details using the productId and update the state

  // Example: Fetch product details from an API
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId
    // You can use your Firebase or any other API to get the details
    // Update the 'product' state with the fetched data
    // Example: fetchProductDetails(productId).then(data => setProduct(data));
  }, [productId]);

  if (!product) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      {/* Add other product details */}
    </div>
  );
};

export default SingleProductView;