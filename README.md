# Setting Up an Ethereum Node and Extracting Data Using Web3.js


---

## Part 1: Running an Ethereum Node with Go-Ethereum (Geth)

**Step 1: Installation of Geth**
1. **Download Geth**: Visit the official Go-Ethereum GitHub repository (https://github.com/ethereum/go-ethereum) and download the latest stable release suitable for your operating system.
2. **Install Geth**: Follow the installation instructions provided on the download page.

**Step 2: Running Geth**
1. **Open Terminal or Command Prompt**.
2. **Run Geth**: Type `geth` and press Enter. This command initializes a Geth node with the default settings.
3. **Synchronization**: Your node will start synchronizing with the Ethereum blockchain. This process can take some time, depending on your internet speed and the chosen synchronization mode.

**Step 3: Choosing a Synchronization Mode**
- **Full Sync**: Downloads the entire blockchain and verifies all transactions. Requires significant disk space and time.
- **Fast Sync** (Recommended for beginners): Downloads block headers, block bodies, and validates transactions from the last checkpoint. 
- **Light Sync**: Downloads block headers and requests necessary data from full nodes. Suitable for low-resource systems.

To use a specific sync mode, run Geth with the mode as an argument, e.g., `geth --syncmode "light"`.

*When starting out for the first time, we recommend starting with Light Sync mode.*

--- 

## Part 2: Using Web3.js to Extract and Interpret Blockchain Data

First, make sure to check the latest documentation here: https://docs.web3js.org/

**Step 1: Setting Up Web3.js**
1. **Install Node.js**: Download and install Node.js (https://nodejs.org/) on your machine.
2. **Initialize a New Node.js Project**: 
   - Create a new folder for your project.
   - Open a terminal in this folder.
   - Run `npm init` and follow the prompts to create a `package.json` file.
3. **Install Web3.js**: Run `npm install web3`.

**Step 2: Connecting to the Ethereum Network**
- In your project folder, create a new JavaScript file (e.g., `index.js`).
- Write the following code to connect to your local Ethereum node:
  ```javascript
  const { Web3 } = require('web3');
  const web3 = new Web3('http://localhost:8545'); // Default HTTP port for local Geth node
  ```

**Step 3: Extracting Blockchain Data**
- **Get Latest Block Number**: 
  ```javascript
  web3.eth.getBlockNumber().then(console.log);
  ```
- **Fetch a Specific Block**:
  ```javascript
  web3.eth.getBlock('latest').then(console.log);
  ```
- **Get Transactions from a Block**:
  ```javascript
  web3.eth.getBlock('latest', true).then(block => {
    console.log(block.transactions);
  });
  ```

**Step 4: Making Sense of the Data**
- Each transaction object contains details like `from`, `to`, `value`, `gas`, etc.
- `value` is listed in Wei. Use `web3.utils.fromWei` to convert it to Ether.
- Analyze simple transaction patterns to understand network activity. You should test your knowledge by observing past data and ask simple questions; the total number of transactions in the last block, or the amount of gas spent in total during for transactions in the past 24 hrs. 

**Step 5: Continuously Monitor New Blocks**
- Use Web3.js subscriptions to listen for new blocks:
  ```javascript
  web3.eth.subscribe('newBlockHeaders', (error, result) => {
    if (!error) {
        console.log(result);
    }
  });
  ```

---
