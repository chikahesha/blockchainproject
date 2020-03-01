import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className='App'>
        <center>
     <table>
       
       <tr>
         <td><img className='logo' src={logo}></img></td>
         <td><h1>Cheque 2 Chain</h1></td><br></br>
       </tr>
       <tr>
         <td ><Link to='/blocks'>View Cheque History</Link></td>
         <td ><Link to='/conduct-transaction'> Clear Cheque</Link></td>
         <td ><Link to='/transaction-pool' >Transaction Pool</Link></td>
       </tr>
       
     </table>
     <br>
     </br>
               <div className='WalletInfo'>
               <div>Address: {address}</div>
               <div>Balance: {balance}</div>
             </div>
             </center>
             </div> 
   
      
    );
  }
}

export default App;