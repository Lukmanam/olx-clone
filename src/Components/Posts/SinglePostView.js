import React, { useContext } from 'react'
import { PostContext } from '../../store/postContext'

const SinglePostView = () => {
     const {postDetails} =  useContext(PostContext)
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl ? postDetails.imageUrl : ''}
          alt="product image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">

        </div>
      </div>
    </div>
  )
}

export default SinglePostView
