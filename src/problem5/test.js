const { ethers, BigNumber } = require("ethers");
const { abi } = require("./build/contracts/BalanceProvider.json");

const ADDR = "0xc9c94A47a1C5AE5B7De854B5fA27991AD837E59A";   // your contract address
const ABI = abi;    // your contract ABI

const ADDRESS = "0xdf4DedE67d9A086ad7EDeC69886101bE8D2CEa35"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0xf76d4a441e4ba86a923ce32b89aff89dbccaa075", // COMP
	"0x07865c6e87b9f70255377e024ace6630c1eaa37f", // USDC
  "0xad6d458402f60fd3bd25163575031acdce07538d" // DAI
];

const provider = ethers.getDefaultProvider('ropsten');

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances.map(balance => ({
    token: balance.token,
    balance: balance.balance.toString()
  }));
};

test().then(console.log);
