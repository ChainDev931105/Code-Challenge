import Web3 from 'web3';
import { abi } from './abi';

async function getBalance(
  web3: Web3,
  tokenAddress: string,
  walletAddress: string,
) {
  const contract = new web3.eth.Contract(abi, tokenAddress);
  const result = await contract.methods.balanceOf(walletAddress).call();
  const decimals = await contract.methods.decimals().call();
  const format = result / Math.pow(10, decimals);
  return format.toString();
}

async function test() {
  const web3 = new Web3("https://bsc-dataseed1.binance.org:443");
  [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5"
  ].forEach(async address => {
    console.log(address, await getBalance(web3, "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c", address));
  });
}

test();
