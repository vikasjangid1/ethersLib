

const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/782aaaec5bca4e66a448c7dc6ca3fd3a") // storing the connection provider

const walletAddress = "0xd3B100A24732ec8E0dfAB97aDfA16c74dB472630";   // storing contract address

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

const contractInteraction = async() => {
    const walletContract = new ethers.Contract(walletAddress,walletAbi,provider);  //here we are storing contract address , abi and provider , now contract is stored in this variable
    console.log(walletContract.address)

    // const contractName = await walletContract.name();  // fetching the contract name thing from contract and public keyword already sets a getter function and then it can be executed by ()
    // console.log("Contract Name:", contractName);

    // const num = await walletContract.getValue(); 
    // console.log("Number Value:",String(num));  // explicit return 

    // const balEthNum = ethers.utils.formatEther(num);
    // console.log("Contract Balance in ether:",balEthNum);

    // const contractBalance = await walletContract.contractBalance();
    // console.log("Contract Balance:",contractBalance);
    
    // const balEthContract = ethers.utils.formatEther(contractBalance);
    // console.log("Contract Balance in ether:",balEthContract);

    // const userBalance = await walletContract.accountBalance("0x83B1b3f5269ef2A0198bB8de1D08a7969Bda00e3");  // for testnet deployment we are using our own contract address
    // console.log("User Balance:",userBalance);

    // const balEthUser = ethers.utils.formatEther(userBalance);
    // console.log("User Balance in Ether:",balEthUser);
};
contractInteraction();