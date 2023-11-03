import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'; // Assuming you have the styles defined in Post.css
import Heart from '../../assets/Heart';
import { PostContext } from '../../store/postContext';

function SinglePost(props) {
  // Assuming your product object has an 'id' property
  const productId = props.product.id;
  const navigate = useNavigate()
  const {setPostDetails} = useContext(PostContext)

  const handleClick = () => {
    navigate('/details')
    setPostDetails(props.product)
    
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="favorite">
        <Heart></Heart>
      </div>
      <div className="image">
        <img src={props.product.imageUrl} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {props.product.price}</p>
        <span className="kilometer">{props.product.category}</span>
        <p className="name">{props.product.name}</p>
      </div>
    </div>
  );
}

export default SinglePost;
