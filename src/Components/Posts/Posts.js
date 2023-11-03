// olx-react-clone/src/components/posts/Posts.js

import React, { useEffect, useContext, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/firebaseContext';
import SinglePost from './singlePost';


function Posts() {
  const { db } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const allProducts = querySnapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <SinglePost key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          
          {/* Existing hard-coded card */}
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
