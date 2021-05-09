import React from 'react'

function Card3() {
  return (
    <div className="row" style={{marginTop:"150px"}}>
    <div className="col s12 l6 offset-l3">
      <div className="box">
        <div className="box1">
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>Contract Balance <br /><span style={{fontWeight:"bold",fontSize:"32px"}}>8000</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>Total Dividends Paid <br /><span style={{fontWeight:"bold",fontSize:"32px"}}>4000</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>Contract Interactions<br /><span style={{fontWeight:"bold",fontSize:"32px"}}>23495</span></p>
        </div>
        <div className="box2">
         <h5 className="white-text " style={{letterSpacing:"2px",fontWeight:"500",marginLeft:"5px"}}>SMART CONTRACT INFO</h5>
         <div className="row">
         <div className="col s12 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>Contract Address</p>
         </div>
         <div className="col s12 l6">
           <h6 className="white-text center-align flow-text" style={{fontWeight:"bold",fontSize:"15px",marginTop:"18px"}}>373GDHE38ED8364HXJDE</h6>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>FIRST AUDIT</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>"INSERT AUDIT"</h5>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>SECOND AUDIT</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>"INSERT AUDIT"</h5>
         </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card3
