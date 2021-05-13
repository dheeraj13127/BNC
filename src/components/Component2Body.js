import React, { useEffect, useState } from 'react'
import '../App.css'
import Web3 from 'web3'
function Component2Body() {
  const [input,setInput]=useState('')
 
  const onInputDone=(e)=>{
    const M=window.M
    e.preventDefault()
    if(input!==''){
      M.toast({html: 'Deposited Successfully'})
    }
    else{
      M.toast({html: 'Please Enter Input Value'})
    }
  
    setInput('')
  } 
  return (
    <div className="component2Column">
    <div className="row ">
         <div className="col s12 l12">
           <a href="/" className="cyan lighten-2 btn waves-effect" style={{marginTop:"40px",borderRadius:"20px",padding:"0 30px"}}>HOME</a>
           {/* <p className="center-align white-text" style={{fontSize:"15px",marginTop:"30px",letterSpacing:"0.5rem"}}>M A X I M I Z E &nbsp; P R O F I T A B I L I T Y</p> */}
           <div className="center-align white-text" style={{fontSize:"16px",marginTop:"15px",fontWeight:"300"}}>
             <div style={{letterSpacing:"1rem",display:"inline-block"}} className="component2Header">MAXIMIZE</div>&nbsp;&nbsp;&nbsp; <div className="component2Header" style={{letterSpacing:"1rem",display:"inline-block"}}>PROFITABILITY</div></div>
           <p className="center-align white-text component2Sub" style={{marginTop:"35px",letterSpacing:"1rem"}}>P O L Y C H A I N</p>
           <p className="center-align white-text" style={{}}>C O N N E C T E D &nbsp; W A L L E T :</p>
           <p className="center-align blue-text lighten-3" style={{fontSize:"32px"}}>300% Profit</p>
          
         </div>
       </div>
       <div className="row">
         <div className="col s12 l4">
           <p className="white-text center-align" style={{fontSize:"43px"}}>1% Daily Profits <br/>On Your Deposit</p>
         </div>
         <div className="col s12 l4">
           <p className="center-align white-text" style={{fontSize:"43px"}}>Referral</p>
         </div>
         <div className="col s12 l4">
           <p className="center-align white-text" style={{fontSize:"43px"}}>Daily Matching<br/>Bonus</p>
         </div>
       </div>
       <div className="row">
         <div className="col s12 l6 center-align offset-l3">
           <form onSubmit={onInputDone}>
             <div className="row center-align">
               <div className="input-field col s12 center-align" style={{padding:"0px 80px"}}>
               <input id="last_name" type="text" placeholder="Input" className="white-text  grey darken-2 center-align component2Placeholder" style={{borderRadius:"32px",padding:"11px 0px"}} value={input} onChange={e=>setInput(e.target.value)}/>
               </div>
               <div className="center-align" style={{padding:"5px 0px"}}>
                 <button className="btn cyan lighten-2 waves-effect white-text btn-large" style={{padding:"3px 70px",borderRadius:"30px",fontSize:"33px",marginTop:"25px"}}>DEPOSIT</button>
               </div>
             </div>
           </form>
           
           
         </div>
         {/* <div style={{padding:"0 25px"}}>
           <div style={{borderBottom:"2px solid white"}}>{}</div>
           </div> */}
       </div>
       <div className="col s6 l12" style={{padding:"0px 155px"}}>
       <div style={{borderBottom:"0.5px solid white"}}>{}</div>
       </div>
       
       </div>
  )
}

export default Component2Body
