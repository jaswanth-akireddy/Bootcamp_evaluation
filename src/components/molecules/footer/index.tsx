import React from 'react'
import Logo from '../../atoms/logo'
import Type from '../../typography'

import v1 from '../../../assets/v1.svg'
import v2 from '../../../assets/v2.svg'
import v3 from '../../../assets/v3.svg'
import v4 from '../../../assets/v4.svg'
import im from '../../../assets/image.svg'

function Footer() {
  return (
    <div className='icons'>
        <Logo url={v1}/>
        <Logo url={v2}/>
        <Logo url={v3}/>
        <Logo url={v4}/>
        <div className="mins">
            <Type content='36 min ago' col='text.line4'/>
        </div>
    </div>
  )
}

export default Footer