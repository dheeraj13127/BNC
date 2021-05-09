import React, { useEffect, useState } from 'react'
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
           <a href="/" className="cyan lighten-2 btn waves-effect" style={{marginTop:"20px",borderRadius:"20px",padding:"0 30px"}}>HOME</a>
           <p className="center-align white-text" style={{fontSize:"15px",marginTop:"30px"}}>M A X I M I Z E &nbsp; P R O F I T A B I L I T Y</p>
           <p className="center-align white-text" style={{fontSize:"40px",marginTop:"35px"}}>B I N A N C E C H A I N</p>
           <p className="center-align white-text" style={{}}>C O N N E C T E D &nbsp; W A L L E T :</p>
           <p className="center-align blue-text lighten-3" style={{fontSize:"29px"}}>300% Profit</p>
          
         </div>
       </div>
       <div className="row">
         <div className="col s12 l4">
           <p className="white-text center-align" style={{fontSize:"34px"}}>1% Daily Profits <br/>On Your Deposit</p>
         </div>
         <div className="col s12 l4">
           <p className="center-align white-text" style={{fontSize:"34px"}}>Referral</p>
         </div>
         <div className="col s12 l4">
           <p className="center-align white-text" style={{fontSize:"34px"}}>Daily Matching<br/>Bonus</p>
         </div>
       </div>
       <div className="row">
         <div className="col s12 l12 center-align">
           <form onSubmit={onInputDone}>
             <div className="row center-align">
               <div className="input-field col s12 center-align" style={{padding:"0 80px"}}>
               <input id="last_name" type="text" placeholder="Input" className="white-text grey center-align component2Placeholder" style={{borderRadius:"20px"}} value={input} onChange={e=>setInput(e.target.value)}/>
               </div>
               <div className="center-align">
                 <button className="btn cyan lighten-2 waves-effect white-text btn-large" style={{padding:"0 55px",borderRadius:"30px",fontSize:"25px"}}>DEPOSIT</button>
               </div>
             </div>
           </form>
           <div style={{padding:"0 25px",marginTop:"75px"}}>
           <div style={{borderBottom:"2px solid white"}}>{}</div>
           </div>
           
         </div>
       </div>
       </div>
  )
}

export default Component2Body
