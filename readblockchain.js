const {ethers} = require("ethers"); // library fetch of ethers library
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/782aaaec5bca4e66a448c7dc6ca3fd3a`); // and here mentioning with provider(infura) to read data on blockchain 


// reading the data from blockchain
const querryBlockchain = async() => {
    const block = await provider.getBlockNumber(); //it will get the current block number
    console.log("Current Block Number:",block);

    const balance = await provider.getBalance("0x23f4569002a5A07f0Ecf688142eEB6bcD883eeF8") // we are getting the account balance of particular address and we have to convert the given output of bignumber
    console.log("Account Balance in BN:",balance);

    const balanceEther = ethers.utils.formatEther(balance);  // it will convert the big number to in ether 
    console.log("Account Balance in Ether:",balanceEther);

    const balanceWei = ethers.utils.parseEther(balanceEther);
    console.log(balanceWei);

    // ether.js allows us to perform actions on bignumber object such as addition, substraction...
}

querryBlockchain();


// connecting to smart contract 