import React, { useState } from 'react'
import '../Suggestions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function SuggestionProducts(props) 
{
    let [heartClicked , setHeart] = useState(true);
    // let [clickedImageAddress, setClickedImageAddress] = useState([]);

    const trueStyle = {
        color: 'coral'
    }
    const falseSyle = {
        color: 'black'
    }
    const addtowishlist = () =>
    {
        heartClicked ? setHeart(false) : setHeart(true);
        // heartClicked ? props.handleWishCount(e,heartClicked):'';
        // heartClicked ? setClickedImageAddress((prevValue)=>[...prevValue,props.image]) : '';
        // console.log("From Sub file \n"+heartClicked);
        // // heartClicked && console.log(props.image);
        // console.log(clickedImageAddress.length);
        // console.log(clickedImageAddress.map((e)=>{e}));
        // const isClicked = !heartClicked;
        // setHeart(isClicked);
        props.handleWishCount(  heartClicked);
    }
  return (
    <>
        <section className='sugPrdtSection'>
            <span className="imgSection">
                <FontAwesomeIcon icon={faHeart} id='heartIcon' onClick={()=>addtowishlist()} style={heartClicked ? falseSyle: trueStyle } />
                <img src={props.image} alt="" />
                <span className='hiddenSections'>
                <FontAwesomeIcon icon={faPlus} />
                <p>ADD TO CART</p> 
            </span>
            </span>
           
            <span className='prdtNamePriceSec'>
                <label>{props.name}</label>
                <br />
                <span className='priceSec'>
                    <label><del>{props.old}</del></label>
                    &nbsp;&nbsp;
                    <label>{props.new}</label>
                </span>
            </span>
        </section>
    </>
  )
}
