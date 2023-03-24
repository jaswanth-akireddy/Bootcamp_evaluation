import React from 'react'
import p1 from './image.svg'

type Proptype={
  url:string
}

function logo({url}:Proptype) {
  return (
    <div>
      <img src={url}/>
    </div>
  )
}

export default logo