import React, { useState } from 'react'
import productDetails from './ThingsDetails';
import Description from './DivFolder/Description'
import ProductDetailsDiv from './DivFolder/ProductDetailsDiv';
import CustomTab1 from './DivFolder/CustomTab1';
import CustomTab2 from './DivFolder/CustomTab2';

export default function DivNavigation(props) {
    let [callDiv, setDiv] = useState('firstDiv')
    
  return (
    <>
        <nav className='navTagsSections'>
            <button className={callDiv  === 'firstDiv' ? 'styleNav' : 'normalNav'} onClick={()=>{setDiv('firstDiv')}} style={{marginLeft:'0%',paddingLeft:'0rem'}}>Description</button>
            <button className={callDiv  === 'secondDiv' ? 'styleNav' : 'normalNav'} onClick={()=>{setDiv('secondDiv')}}>Product Details</button>
            <button className={callDiv  === 'thirdDiv' ? 'styleNav' : 'normalNav'} onClick={()=>{setDiv('thirdDiv')}}>Reviews</button>
            <button className={callDiv  === 'fourthDiv' ? 'styleNav' : 'normalNav'} onClick={()=>{setDiv('fourthDiv')}}>Custom Tab 01</button>
            <button className={callDiv  === 'fifthDiv' ? 'styleNav' : 'normalNav'} onClick={()=>{setDiv('fifthDiv')}}>Custom Tab 02</button>
        </nav>

        {callDiv === "firstDiv" && <Description content={productDetails[0].About} />}
        {callDiv === "secondDiv" && <ProductDetailsDiv itemsAvailable={props.items} />}
        {callDiv === "fourthDiv" && <CustomTab1 content1={productDetails[0].CustomeTabSub01} content2={productDetails[0].CustomeTabSub02} />}
        {callDiv === "fifthDiv" && <CustomTab2 content={productDetails[0].CustomeTab02} />}
        {/* <Description /> */}
    </>
  )
}
