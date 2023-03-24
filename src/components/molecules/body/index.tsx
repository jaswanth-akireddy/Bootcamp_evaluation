import React from 'react'
import Type from '../../typography'
import Logo from '../../atoms/logo'
import p1 from './image.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Body() {
  return (
      <div className=''>
          <Logo url={p1}/>
          <Type content='User Experience Designer' col='text.line1'/>
          <Type content='Myntra' col='text.line2'/>
          <Type content='Hitech City,Hyderabad-500072' col='text.line3'/>
          <MoreHorizIcon/>
      </div>
  )
}

export default Body