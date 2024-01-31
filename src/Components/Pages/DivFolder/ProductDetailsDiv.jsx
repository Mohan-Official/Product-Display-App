import React from 'react';
import productDetails from '../ThingsDetails';

export default function ProductDetailsDiv(props) {
  return (
    <>
        <section className='ProductDetailsDiv'>
            <label>Reference <span style={{fontSize:'1rem',fontWeight:'500',marginLeft:'2.5%'}}>{productDetails[0].Reference}</span> </label>
            <label style={{marginTop:'0.5%'}}>In stock <span style={{fontSize:'1rem',fontWeight:'500',marginLeft:'4%'}}> {props.itemsAvailable}&nbsp;items</span></label>
        
            <label style={{marginTop:'3%'}}>Data sheet</label>
            <section className='productClassification'>
                <div className='prdtClassOne'>
                    <button>Composition</button>
                    <button>Property</button>
                </div>
                <div className='prdtClassTwo'>
                    <button>Cotton</button>
                    <button>Short sleeves</button>
                </div>
            </section>
        </section>

    </>
  )
}
