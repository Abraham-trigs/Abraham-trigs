import React from 'react'
import Logo from '@/assets/images/Logo.png'

const logo = () => {
  return (
    <div className='flex-row'>
      <img
      src= {Logo}
      alt="Personal Logo"
      className= "w-16 h-auto flex "/>

    </div>
)
}

export default logo;
