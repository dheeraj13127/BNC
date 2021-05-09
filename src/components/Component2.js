import React from 'react'
import '../App.css'

import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Component2Body from './Component2Body'
import Footer from './Footer'
function Component2() {
  return (
    <div >
    <Component2Body/>
    <Card1/>
    <Card2/>
    <Card3/>
    <Footer/>
    </div>
   
  )
}

export default Component2
