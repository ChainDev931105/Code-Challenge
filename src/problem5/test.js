import { ethers } from "ethers";
import { abi } from "./build/contracts/BalanceProvider.json";

const ADDR = "0x2f0716f39cB22eCc8ad596F6bDC7B3fF3680971C";   // your contract address
const ABI = abi.abi;    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);