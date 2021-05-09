import React from 'react'

function Card2() {
  return (
    <div className="row" style={{marginTop:"155px"}}>
    <div className="col s12 l6 offset-l3">
      <div className="box">
        <div className="box1">
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold",marginTop:"35px"}}>Next Income <br /><span style={{fontWeight:"bold",fontSize:"26px"}}>00:00:00</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold",marginTop:"35px"}}>Income Reached <br /><span style={{fontWeight:"bold",fontSize:"32px"}}>230%</span></p>
        <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold",marginTop:"35px"}}>Income Remainder<br /><span style={{fontWeight:"bold",fontSize:"32px"}}>70%</span></p>
        </div>
        <div className="box2">
         <h5 className="white-text " style={{letterSpacing:"2px",fontWeight:"500",marginLeft:"5px"}}>PERSONAL STATISTICS</h5>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"13px",marginLeft:"5px"}}>Daily 1% Income</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>0.3 BNB</h5>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"13px",marginLeft:"5px"}}>Direct Referral Income</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>1 BNB</h5>
         </div>
         </div>
         <div className="row">
         <div className="col s6 l6">
           <p className="white-text" style={{fontSize:"12px",fontWeight:"bold",marginTop:"13px",marginLeft:"5px"}}>Matching Bonus</p>
         </div>
         <div className="col s6 l6">
           <h5 className="white-text center-align" style={{fontWeight:"bold"}}>0.7 BNB</h5>
         </div>
         </div>
         <div className="row">
           <div className="col s12 l4">
           <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold",marginTop:"13px",marginLeft:"5px"}}>Withdrawable Balance</p>
           <div className="center-align">
           <button className="btn waves-effect white cyan-text lighten-2" style={{borderRadius:"20px",fontWeight:"bolder",padding:"0 20px",fontSize:"25px"}}>2 BNB</button>
           </div>
           </div>
           <div className="col s12 l4">
             <div className="center-align">
               <button className="btn waves-effect cyan lighten-2 btn-large" style={{fontWeight:"bolder",borderRadius:"30px",marginTop:"30px"}}>WITHDRAW</button>
             </div>
           </div>
           <div className="col s12 l4">
           <p className="white-text center-align" style={{fontSize:"12px",fontWeight:"bold",marginTop:"18px",marginLeft:"5px"}}>Withdrawn to Wallet</p>
           <div className="center-align">
           <button className="btn waves-effect white cyan-text lighten-2" style={{borderRadius:"20px",fontWeight:"bolder",padding:"0 20px",fontSize:"25px"}}>4 BNB</button>
           </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card2
