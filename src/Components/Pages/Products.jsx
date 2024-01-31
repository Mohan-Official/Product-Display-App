import React, { useState } from 'react'
import images from './ImageData'
export default function Products(props) {
  let [bigBanner, setBanner] = useState(images[3])
  return (
    <>
        <img src={props.imageValue} alt="" className='bigImage'/>
    </>
  )
}
