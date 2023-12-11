import React from 'react'
import MEL from "../../../assets/MEL.pdf"

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={MEL} download className='btn'>Download MEL.pdf</a>
      <a href="#mel" className='btn btn-primary'>MEL Reference</a>
    </div>
  )
}

export default CTA