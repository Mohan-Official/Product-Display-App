import React from 'react'

export default function Description(props) {
  return (
    <>
        <p style={{padding: '4% 6.5%',textAlign:'justify',color:'black',fontSize:'1rem'}}>
            {props.content}
        </p>
    </>
  )
}
