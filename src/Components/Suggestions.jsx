import React, { useState } from 'react';
import "./Suggestions.css";
import SuggestionProducts from './Pages/SuggestionProducts';
import productsYouLike from '../Components/Pages/SuggestionProductsData';
import WishList from '../Components/Pages/WishList';
import { createContext } from 'react';

const AppContext = createContext(null);

export default function Suggestions() {
  // let [countWishList, setCountWish] = useState(0);
  let [selectedImage, setSelectedImage] = useState('');
  let [clickedImageAddress, setClickedImageAddress] = useState([]);
  let bool = true;
  const handleWishCount = (e) => {
    setSelectedImage(e.ProductImage);
    console.log(e.ProductImage);
    setClickedImageAddress((prevValue)=>[...prevValue,e.ProductImage]);
  };

  return (
    <>
      <section className='suggestionSection'>
        <h1>You might also like</h1>
        <section className='prdtSuggest'>
          {productsYouLike.map((e, index) => (
            <SuggestionProducts key={index} image={e.ProductImage} name={e.ProductName} new={e.ProductOfferPrice} old={e.ProductOldRate} handleWishCount={() => handleWishCount(e)} />
          ))}
        </section>
      </section>
      {bool && <WishList arrayImage = {clickedImageAddress}/>}
    </>
  );
}