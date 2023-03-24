import React from 'react'
import Body from '../../molecules/body'
import  P1 from './Frame.svg'
import Logo from '../../atoms/logo'
import Footer from '../../molecules/footer'

function frame() {
  return (
    <div className='internal-frame'>
      <Body/>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default frame