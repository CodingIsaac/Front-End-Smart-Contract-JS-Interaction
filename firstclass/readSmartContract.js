const { ethers } = require ("ethers");

const providerURL = process.env.ALCHEMY_MAINNET_API_KEY_URL;

const provider = new ethers.providers.JsonRpcProvider(providerURL)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]
const address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' //USDC contract
const contract = new ethers.Contract(address, ERC20_ABI, provider )

const run = async () => {
    const tokenName = await contract.name();
    const tokenSymbol = await contract.symbol();
    const tokenTotalSupply = await contract.totalSupply();
    const tokenBalance = await contract.balanceOf('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')

    console.log(`\nReading from ${address}\n`);
    console.log(`Name of Token: ${tokenName}`);
    console.log(`Token Symbol: ${tokenSymbol}`);
    console.log(`Token Total Supply: ${tokenTotalSupply}`);
    console.log(`Token Balance: ${tokenBalance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(tokenBalance)}\n`)
}

run()

/*

Reading from 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48

Name of Token: USD Coin
Token Symbol: USDC
Token Total Supply: 43385954486129550
Token Balance: 0
Balance Formatted: 0.0

*/
