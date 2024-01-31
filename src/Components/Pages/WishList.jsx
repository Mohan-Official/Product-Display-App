
import React from 'react';

export default function WishList(props) {
  let ImageArray = props.arrayImage;
  return (
    <>
      <h1>Wish List</h1>
      {props.arrayImage}
    </>
  );
}
