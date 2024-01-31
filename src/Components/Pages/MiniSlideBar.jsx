import React from 'react'
import { useState } from 'react';
export default function MiniSlideBar(props) {
  let [miniSlider, setMiniSlider] = useState(null);

  const handleImage = (e,val) =>
  {
    props.childClickValue(e.target.src,val);
    props.handleMiniSliderClick(val);
  }
  return (
    <>
        <section id='miniSlide'>
            <img src={props.imageAddress} className={props.miniSlideValue === props.value ? "miniBorderActive" : 'miniBorderRemove'} alt="" id='miniSlideImg' onClick={(e)=>{handleImage(e,props.value)}}/>
        </section>
    </>
  )
}