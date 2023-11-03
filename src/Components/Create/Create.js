import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/firebaseContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

const Create = () => {
  const { db, storage } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const date = new Date();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `/images/${image.name}`);
    await uploadBytes(imageRef, image);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(imageRef);
    await addDoc(collection(db, 'products'), {
      name,
      category,
      price,
      imageUrl,
      userId: user.uid,
      createdAt: date.toDateString(),
    });

    navigate('/');
  };

  return (
    <Fragment>
      <Header />
      <div>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <br />
          <img alt="Posts" width="120px" height="120px" src={image ? URL.createObjectURL(image) : ""}></img>

          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
