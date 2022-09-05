const { ethers } = require ("ethers");

const providerURL = process.env.ALCHEMY_GOERLI_API_KEY_URL

const provider = new ethers.providers.JsonRpcProvider(providerURL)

const tokenAccountOne = '0xAA5AC6134633183C81436499fb38748D128e039b'
const tokenAccountTwo = '0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6'
const privateKey = process.env.ACCOUNT_PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);


const main = async () => {
    const senderBalanceBefore = await provider.getBalance(tokenAccountOne);
    const receiverBalanceBefore = await provider.getBalance(tokenAccountTwo);

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(receiverBalanceBefore)}\n`)

    const transaction = await wallet.sendTransaction({
        to: tokenAccountTwo,
        value: ethers.utils.parseEther("0.01")
    })

    await transaction.wait()
    console.log(transaction)

    const senderBalanceAfter = await provider.getBalance(tokenAccountOne)
    const recieverBalanceAfter = await provider.getBalance(tokenAccountTwo)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)

    /*

    Sender balance before: 0.972669285481546758
reciever balance before: 0.243241617465784817

{
  type: 2,
  chainId: 5,
  nonce: 11,
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
  maxFeePerGas: BigNumber { _hex: '0x91807f02', _isBigNumber: true },
  gasPrice: null,
  gasLimit: BigNumber { _hex: '0x5208', _isBigNumber: true },
  to: '0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6',
  value: BigNumber { _hex: '0x2386f26fc10000', _isBigNumber: true },
  data: '0x',
  accessList: [],
  hash: '0x78f51ef046e4b5577fa8e7a87c14bf442bc0763a0df4fee8ae6a1e594840da88',
  v: 0,
  r: '0xcf61e310755f9f339a99512fb7d622c2203f76fb50e931cd42cb7b1b6f1087d1',
  s: '0x57fbac9d7784bb94bfe4638bc57de12570802176383d2e80c8475f205ae61a17',
  from: '0xAA5AC6134633183C81436499fb38748D128e039b',
  confirmations: 0,
  wait: [Function (anonymous)]
}

Sender balance after: 0.962627260547805758
reciever balance after: 0.253241617465784817


    */




}

main()