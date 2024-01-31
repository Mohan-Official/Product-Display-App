import React, { useState } from 'react'
import Products from './Pages/Products'
import MiniSlideBar from './Pages/MiniSlideBar'
import images from './Pages/ImageData'
import cupDetails from './Pages/ThingsDetails'
import OfferTime from './Pages/OfferTime'
import QuantityAdd from './Pages/QuantityAdd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTruck, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faPinterestP} from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

import DivNavigation from './Pages/DivNavigation'

export default function Container() {
    let [availability, setAvailability] = useState(10);
    let [availabilityPresence, setPresence] = useState(true);
    const [activeButton, setActiveButton] = useState('button1');
    const [activeColor, setActiveColor] = useState('whiteColor');
    const [wishList, setWish] = useState(false);
    let [imageValue, setImage] = useState(images[0]);
    let [miniSlider, setMiniSlider] = useState(0);

    const selectSize = (btn) =>
    {
        setActiveButton(btn);
    }
    const selectColor = (clrBtn) =>
    {
        setActiveColor(clrBtn);
    }
    const handleAvailability = (avai)=>
    {
        
        if(availability>=avai)
        {
            setPresence(true);
            const newAvailabilit = availability - avai;
            setAvailability(newAvailabilit);
        }
        else if(avai>availability && availability!=0)
        {
            alert("Please select the available number of products")
        }
        else
        {
            setPresence(false);
        }
    }
    const addWish = () =>
    {
        if(wishList === true)
        {
            setWish(false);
        }
        else
        {
            setWish(true);
        }
    }
    const handleImageClick = (e) =>
    {
        setImage(e);
    }
    const handleMiniSliderClick = (val)=>
    {
        setMiniSlider(val);
        console.log(miniSlider);
    }
  return (
    <>
        <section id='container'>

            <div id='sectionOne'>
                <div className='subSecOne'>
                    <Products imageValue = {imageValue}/>
                </div>
                <div className='subSecTwo'>
                    {images.map((element, index) => (
                        <MiniSlideBar key={index} value={index}  imageAddress={element} childClickValue={handleImageClick} handleMiniSliderClick={handleMiniSliderClick} miniSlideValue = {miniSlider}/>
                    ))}
                </div>
            </div>

            <div id='sectionTwo'>
                <span className='availability'>
                    {availabilityPresence ?<label className='togg'>In stock</label>:<label className='togg outStock'>Out of Stock</label>}
                    <label className='stock'>{availability} Items</label>
                </span>
                <h1 className='prdtName'>{cupDetails[0].Name}</h1>
                <span className='priceDetails'>
                    <del><label>{cupDetails[0].OldPrice}</label></del>
                    <label className='newPrice'>{cupDetails[0].NewPrice}</label>
                    <label className='offer'>{cupDetails[0].Savings}</label>
                </span>
                <OfferTime />
                <p className='productDesign' style={{color:'#999999'}}>{cupDetails[0].Design}</p>
                <p className='productAbout'>{cupDetails[0].About}</p>

                <button className='sizeGuide'>Size Guide</button>
                <span className='sizeSection'>
                    <label style={{color:'#999999',fontSize:'0.8rem'}}>SIZE</label>
                    <span className='sizeBtn'>
                        <button onClick={() => selectSize('button1')} className={activeButton === 'button1' ? 'sizeActive' : 'sizeRemove'}>S</button>
                        <button onClick={() => selectSize('button2')} className={activeButton === 'button2' ? 'sizeActive' : 'sizeRemove'}>M</button>
                        <button onClick={() => selectSize('button3')} className={activeButton === 'button3' ? 'sizeActive' : 'sizeRemove'}>L</button>
                        <button onClick={() => selectSize('button4')} className={activeButton === 'button4' ? 'sizeActive' : 'sizeRemove'}>XL</button>
                    </span>
                </span>

                <span className='colorSection'>
                    <label>COLOR</label>
                    <button onClick={() => selectColor('whiteColor')} className={activeColor  === 'whiteColor' ? 'activeColor' : ''}></button>
                    <button id='sizeBtnTwo' onClick={() => selectColor('blackColor')} className={activeColor  === 'blackColor' ? 'activeColor' : ''}></button>    
                </span>

                <span className="quantitySection">
                    <label>QUANTITY</label>
                    <span className="btnQuantity">
                        {availabilityPresence? <><QuantityAdd handleQuantity = {handleAvailability} button={'able'} imageValue={imageValue} /></>  : <><QuantityAdd handleQuantity = {handleAvailability} button={'disable'} /></>}     
                    </span>
                </span>

                <span className='wishSection' onClick={addWish}>
                    <FontAwesomeIcon icon={faHeart}  style={{color:wishList ? 'orangered':'#9999'}} /> 
                    <label>ADD TO WISHLIST</label>
                </span>
                <span style={{color:'black',fontWeight:'800',marginBottom:'2%'}}>
                    {availabilityPresence?<><label>Items in stock</label></>:<label>There are not enough products in stock</label>}
                </span>
                
                <span className='brandSection'>
                    <section className='brandTitle'>
                        <li>Brand:</li>
                        <li>Categories:</li>
                    </section>
                    <section className='brandAnswers'>
                        <li><a href="">{cupDetails[0].Brand}</a></li>
                        <li><a href="">{cupDetails[0].Categories}</a></li>
                    </section>
                </span>
                <span className='shareiconSection' >
                    <label>Share</label>
                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href=""><FontAwesomeIcon icon={faPinterestP} /></a>
                </span>
                <span className='policiesSection'>
                    <span className='fontPolicies'>
                        <FontAwesomeIcon icon={faThumbsUp} className='policyIcon' />
                        <span>
                            <label>Security policy</label>
                            <p>
                                (edit with the Customer Reassurance module)
                            </p>
                        </span>
                    </span>
                    <span className='fontPolicies'>
                        <FontAwesomeIcon icon={faTruck} className='policyIcon' />
                        <span>
                            <label> Delivery policy</label>
                            <p>
                                (edit with the Customer Reassurance module)
                            </p>
                        </span>
                    </span>
                    <span className='fontPolicies'>
                        <FontAwesomeIcon icon={faHandHoldingHeart} className='policyIcon' />
                        <span>
                            <label> Return policy</label>
                            <p>
                                (edit with the Customer Reassurance module)
                            </p>
                        </span>
                    </span>
                </span>
            </div>
        </section>
        <DivNavigation  items={availability}/>
    </>
  )
}
