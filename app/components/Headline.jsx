import React from 'react'

const Headline = ({ title='no title' }) => 
  <div className='fl w-80 pa2'>
    <h1 className='f-headline light-red tl bb'>{title.toUpperCase()}</h1>
  </div>

export default Headline