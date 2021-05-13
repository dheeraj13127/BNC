import React, { useState,useEffect} from 'react'
import '../App.css'
import bsc from '@binance-chain/bsc-use-wallet'
import {UseWalletProvider } from 'use-wallet'
import {useHistory} from 'react-router-dom'



import Web3 from 'web3'
function Component1() {
  const [acc,setAcc]=useState('')
  const history=useHistory()

  

  useEffect(async ()=>{
    await loadWeb3()
    await loadBlockchinData()
  },[])
  const loadWeb3=async()=> {
    const M=window.M
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const connected=window.ethereum.isConnected()
      M.toast({html: 'Connected Successfully '})
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      this.setState({auth:true})
      M.toast({html: 'Connected Successfully '})
    
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  const loadBlockchinData=async()=>{
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    web3.eth.getBalance(accounts[0]).then(data=>console.log(data))
   setAcc(accounts[0])
  }

const onConnect=()=>{
  window.location.reload(false)
}
  const onEnter=()=>{
    const M=window.M
    if(acc){
      history.push('/deposit')
    }
    else{
      M.toast({html: 'Connect Your Wallet To Proceed'})
    }
  }
  return (
    <div className="component1Coloumn">
 <div className="row">
      <div className="col s12 l12 ">
  <nav className="transparent z-depth-0">
    <div className="nav-wrapper">
      <ul className="right">
        <button className="btn cyan lighten-2 waves-effect" style={{marginRight:"15px"}}>{acc?'WALLET:METAMASK':'WALLET'}</button>
        <button className="btn cyan lighten-2 waves-effect" style={{marginRight:"15px"}} onClick={onConnect}>{acc?'CONNECTED':'DISCONNECTED'}</button>

      </ul>
    </div>
  </nav>
 
      </div>
    </div>
    <div className="row" style={{marginTop:"430px"}}> 
      <div className="col s12 l12">
        <div className="center-align">
          <a onClick={onEnter} className="btn waves-effect cyan lighten-2" style={{padding:"0 75px",borderRadius:"18px",fontWeight:"400",fontSize:"20px",marginTop:"250px"}}>ENTER</a>
          <p className="center-align white-text" style={{fontSize:"15px",marginTop:"35px"}}>M A X I M I Z E &nbsp; P R O F I T A B I L I T Y</p>
          <h4 className="center-align white-text" style={{marginTop:"35px"}}>P O L Y C H A I N</h4>
        </div>
      </div>

    </div>
    <div style={{paddingTop:"35px"}}></div>
  
      </div>
     
  )
}

export default ()=>(
  (
    <UseWalletProvider connectors={{bsc}}>
      <Component1/>
    </UseWalletProvider>
  )
)
