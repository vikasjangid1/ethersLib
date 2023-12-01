import "./App.css";
import { useEffect } from "react";
const { ethers } = require("ethers"); // library fetch of ethers library

function App() {
  const walletAddress = "0xd3B100A24732ec8E0dfAB97aDfA16c74dB472630";

  useEffect(() => {

    const walletAbi =[
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];

    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum) // connecting with metamask and behind the scenes multiple networks are connected with infura(etc mediater) rpc profile
      await provider.send("eth_requestAccounts",[]);  //metamask automatic calls it through this statement 
      const signer = provider.getSigner();  // for state management
      const contract = new ethers.Contract(walletAddress,walletAbi,signer); // fetching contract details
      // await contract.setValue(2);
      await contract.sendEthContract({value:ethers.utils.parseEther("0.1")})  // transferring the ether to contract address through metamask , whenever you want to transfer value in the contract then it is written in {}
      await contract.sendEthUser("0x95E109B4cf8ebd998a8965e5F5AF25fE4797E001",{
        value:ethers.utils.parseEther("0.1")
      });
    };
    writeContract();  
  },[]);
  return <div className="App"></div>;
}

export default App;