const { ethers } = require ("ethers");

const providerURL = process.env.ALCHEMY_MAINNET_API_KEY_URL;

const provider = new ethers.providers.JsonRpcProvider(providerURL)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)

    // ETH Balance of 0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e --> 1.177333404898927 ETH
}

main()

//import ethers from "ethers";
// const { ethers } = require("ethers")
// const abi =require('./abi.json')


// const providerUrl = 'https://mainnet.infura.io/v3/6f01a1a6792048e09192bcd4012d164d'
// const contractAddress='0xdAC17F958D2ee523a2206206994597C13D831ec7'


// const getSomething =()=>{
//     // declare provider
//     // connect provider
//     // send action
//     // get action

//     const provider = new ethers.providers.JsonRpcProvider(providerUrl)
//     const tokenContract = new ethers.Contract(contractAddress,abi, provider)
// loading = true
//     const tokenDecimal = tokenContract.name()
//     .then(data => data.toLowerCase())
//     .then((info)=> {
//         console.log(info)
//         return info;
//     })
//     .catch(e => console.log('error occurred', e))
//     .finally(()=> console.log("This is final!!"))

// }
// // console.log("I am running!!!", abi)


// getSomething();

