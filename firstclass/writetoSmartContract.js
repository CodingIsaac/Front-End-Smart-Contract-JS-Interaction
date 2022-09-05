const { ethers } = require ("ethers");

const providerURL = process.env.ALCHEMY_GOERLI_API_KEY_URL

const provider = new ethers.providers.JsonRpcProvider(providerURL);

const tokenAccountOne = '0xAA5AC6134633183C81436499fb38748D128e039b'
const tokenAccountTwo = '0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6'
const privateKey = process.env.ACCOUNT_PRIVATE_KEY
const wallet = new ethers.Wallet(privateKey, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
const contract = new ethers.Contract( address , ERC20_ABI, provider )



const main = async () => {
    const balance = await contract.balanceOf(tokenAccountOne)

    console.log(`\nReading from ${address}\n`)
    console.log(`\nBalance of Sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const transactionReceipt = await contractWithWallet.transfer(tokenAccountTwo, balance)
    await transactionReceipt.wait()

    console.log(transactionReceipt)

    const balanceOfSender = await contract.balanceOf(tokenAccountOne)
    const balanceOfReciever = await contract.balanceOf(tokenAccountTwo)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)



    }

    main()

    /*

    Reading from 0x326C977E6efc84E512bB9C30f76E30c160eD06FB


Balance of Sender: 40000000000000000000

{
  type: 2,
  chainId: 5,
  nonce: 13,
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x59682f16', _isBigNumber: true },
  gasPrice: null,
  gasLimit: BigNumber { _hex: '0xca6a', _isBigNumber: true },
  to: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0xa9059cbb00000000000000000000000032c8328f9407a1df4de8d655a4c83b022d44a2f60000000000000000000000000000000000000000000000022b1c8c1227a00000',
  accessList: [],
  hash: '0x9bca1687b8d13a5bdffe05de3e4abede16264b2f76fd4eb62fd38c738c7c37a2',
  v: 1,
  r: '0x5cc8ecdec7b8b94dd0cc8faaaf95cb7259ee71d4035ceea865cf6cb8c5369369',
  s: '0x2cf2332995c67459550f3da39dd46775b671ac275949c9e074229f3fa2f50b66',
  from: '0xAA5AC6134633183C81436499fb38748D128e039b',
  confirmations: 0,
  wait: [Function (anonymous)]
}

Balance of sender: 0
Balance of reciever: 40000000000000000000

    */