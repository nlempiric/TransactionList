const axios = require('axios');

// const avalancheExplorerApi = 'https://api.avax-test.network/ext/bc/C/rpc';
const avalancheExplorerApi = 'https://api.avax.network/ext/bc/C/rpc';
const address = "0x7049577ABAea053257Bf235bFDCa57036Aed6AdD";
const pangolinrouteraddress = "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106";

async function getAllTransactions() {
  try {
    // Get the latest block number
    const latestBlockResponse = await axios.post(avalancheExplorerApi, {
      jsonrpc: '2.0',
      method: 'eth_blockNumber',
      params: [],
      id: 1,
    });
    
    const latestBlockNumber = parseInt(latestBlockResponse.data.result, 16);

    // Specify the start block number for recent transactions (adjust as needed)
    const startBlockNumber = Math.max(1, latestBlockNumber - 80000000); // Fetch transactions from the last 1000 blocks

    // Loop through each block to fetch recent transactions
    for (let blockNumber = latestBlockNumber; blockNumber >= startBlockNumber; blockNumber--) {
      const blockResponse = await axios.post(avalancheExplorerApi, {
        jsonrpc: '2.0',
        method: 'eth_getBlockByNumber',
        params: [`0x${blockNumber.toString(16)}`, true],
        id: 1,
      });

      const transactions = blockResponse.data.result.transactions;

      // Filter transactions related to your address
      const relevantTransactions = transactions.filter((tx) => {
        // console.log("transaction ---",tx)
        // console.log("transaction hash---",tx.hash)
        const a=address.toLowerCase()
        // if(tx.from.toLowerCase() === a)
        // {

        //     console.log("-------------------------------found transaction------------------------")
        //     console.log("transaction:--",tx)
        // }
        if(tx.to!=null && tx.to.toLowerCase() === pangolinrouteraddress.toLowerCase())
          {
            console.log("-------------------------------found transaction------------------------")
            console.log("transaction:--",tx)
          }
      
      });
0
      // Do something with relevant transactions
      console.log(`Block ${blockNumber} Transactions:`, relevantTransactions);
    }
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
  }
}

getAllTransactions();
