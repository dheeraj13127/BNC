import React from 'react'

function Card1() {
  return (
    <div className="row" style={{marginTop:"150px"}}>
    <div className="col s12 l6 offset-l3">
      <div className="box">
        <div className="box1">
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>Total Income <br /><span style={{fontWeight:"bold",fontSize:"32px"}}>4000</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>Total Deposits <br /><span style={{fontWeight:"bold",fontSize:"32px"}}>20000</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold"}}>To Payout<br /><span style={{fontWeight:"bold",fontSize:"32px"}}>1.328</span></p>
        </div>
        <div className="box2">
         <h5 className="white-text " style={{letterSpacing:"2px",fontWeight:"500",marginLeft:"5px"}}>STATISTICS</h5>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>Referred By</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>Tnz7t..</h5>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>Days Running</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>35</h5>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>Total BinanceChain Members</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>78.19</h5>
         </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card1
