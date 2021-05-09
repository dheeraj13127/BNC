import React from 'react'
import tele from './images/tele.png'
import mail from './images/mail.png'
import twitter from './images/twitter1.png'
import reddit from './images/reddit.png'
function Footer() {
  return (
    <div className="row" style={{marginTop:"135px"}}>
    <h4 className="center-align white-text" style={{fontWeight:"bolder"}}>CONTACT US</h4>
    <div style={{marginTop:"50px"}}>
    <div className="col s6 l3 center-align">
    <a> <img src={tele} alt="" style={{width:"100px",height:"100px",marginTop:"25px"}}/></a>
    </div>
    <div className="col s6 l3 center-align">
   <a> <img src={mail} alt="" style={{width:"100px",height:"100px",marginTop:"25px"}}/></a>
    </div>
    <div className="col s6 l3 center-align">
    <a><img src={twitter} alt="" style={{width:"100px",height:"100px",borderRadius:"50px",marginTop:"25px"}}/></a>
    </div>
    <div className="col s6 l3 center-align">
    <a><img src={reddit} alt="" style={{width:"100px",height:"100px",marginTop:"25px"}}/></a>
    </div>
    </div>
    
  </div>
  )
}

export default Footer
