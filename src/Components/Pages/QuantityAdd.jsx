import React, { useState } from 'react'
import CartReminder from '../CartReminder';


export default function QuantityAdd(props) {
    let [productCount, setCount] = useState(1);
    let [cartAdd, setCartAdd] = useState(false);
    let [images, setImages] = useState(props.imageValue);

    const increment=()=>
    {
        productCount = productCount + 1;
        setCount(productCount);
    }
    const decrement=()=>
    {
        productCount = productCount > 1 ? productCount - 1 : 1;
        setCount(productCount);
    }
    const addToCart = () =>
    {
        props.handleQuantity(productCount);
        setCount(1);
        setCartAdd(true);
    }
    const changeCartAdder = (addVal) =>
    {
        setCartAdd(addVal);
        console.log(cartAdd);
    }
  return (
    <>
        <section className='counterSection'>
            <input type="number" value={productCount} onChange={(e)=>{e.target.value}} />
            <span className='countBtn'>
                <button onClick={increment} className='incre btnIncrOne'>+</button>
                <button onClick={decrement} className='incre btnDecrOne'>-</button>
            </span>

            {props.button === "able" ? <><button className='addCartBtn' onClick={addToCart}>Add to cart</button></>:<><button className='addCartBtnDisble' onClick={addToCart} disabled>Add to cart</button></>}
        </section>
        {cartAdd ? <><div className='hidderSectionCart'><CartReminder changeCartAdder={(addVal) =>{changeCartAdder(addVal)}} passImage={images} /></div></>:''}
    </>
  )
}
