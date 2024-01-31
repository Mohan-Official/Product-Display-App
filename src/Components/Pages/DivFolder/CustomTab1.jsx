import React from 'react'

export default function CustomTab1(props) {
  return (
    <>
        <section className="customTabSectionTwo">
            <div className="cusSubSecOne">
                <p>
                {props.content1}
                <br />
                {props.content2}
                </p>
            </div>
            <div className="cusSubSecTwo">
                <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_decor_custom-tab-1.jpg?v=1685496521" alt="" />
            </div>
        </section>
    </>
  )
}
