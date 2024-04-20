// Import Web3 module
const Web3 = require('web3');

// Connect to an Ethereum node
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');

// Function to get the latest block number
async function getLatestBlockNumber() {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log('The latest block number is:', latestBlockNumber);
  } catch (error) {
    console.error('Error fetching the latest block number:', error);
  }
}

// Call the function
getLatestBlockNumber();
