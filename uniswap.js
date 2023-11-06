const ethers = require("ethers");
const url = "wss://eth-mainnet.g.alchemy.com/v2/_IvJAwz5918sXFFyUXLijVu-0MTVOQ_W";

const uniswapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

const ABI = [
  
    {
      inputs: [
        { internalType: "address", name: "_factory", type: "address" },
        { internalType: "address", name: "_WETH9", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "WETH9",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "bytes", name: "path", type: "bytes" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            {
              internalType: "uint256",
              name: "amountOutMinimum",
              type: "uint256",
            },
          ],
          internalType: "struct ISwapRouter.ExactInputParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "exactInput",
      outputs: [
        { internalType: "uint256", name: "amountOut", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "address", name: "tokenIn", type: "address" },
            { internalType: "address", name: "tokenOut", type: "address" },
            { internalType: "uint24", name: "fee", type: "uint24" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            {
              internalType: "uint256",
              name: "amountOutMinimum",
              type: "uint256",
            },
            {
              internalType: "uint160",
              name: "sqrtPriceLimitX96",
              type: "uint160",
            },
          ],
          internalType: "struct ISwapRouter.ExactInputSingleParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "exactInputSingle",
      outputs: [
        { internalType: "uint256", name: "amountOut", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "bytes", name: "path", type: "bytes" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            {
              internalType: "uint256",
              name: "amountInMaximum",
              type: "uint256",
            },
          ],
          internalType: "struct ISwapRouter.ExactOutputParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "exactOutput",
      outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "address", name: "tokenIn", type: "address" },
            { internalType: "address", name: "tokenOut", type: "address" },
            { internalType: "uint24", name: "fee", type: "uint24" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            {
              internalType: "uint256",
              name: "amountInMaximum",
              type: "uint256",
            },
            {
              internalType: "uint160",
              name: "sqrtPriceLimitX96",
              type: "uint160",
            },
          ],
          internalType: "struct ISwapRouter.ExactOutputSingleParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "exactOutputSingle",
      outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
      name: "multicall",
      outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "refundETH",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitAllowed",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitAllowedIfNecessary",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitIfNecessary",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "amountMinimum", type: "uint256" },
        { internalType: "address", name: "recipient", type: "address" },
      ],
      name: "sweepToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "amountMinimum", type: "uint256" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "feeBips", type: "uint256" },
        { internalType: "address", name: "feeRecipient", type: "address" },
      ],
      name: "sweepTokenWithFee",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "int256", name: "amount0Delta", type: "int256" },
        { internalType: "int256", name: "amount1Delta", type: "int256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "uniswapV3SwapCallback",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amountMinimum", type: "uint256" },
        { internalType: "address", name: "recipient", type: "address" },
      ],
      name: "unwrapWETH9",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amountMinimum", type: "uint256" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "feeBips", type: "uint256" },
        { internalType: "address", name: "feeRecipient", type: "address" },
      ],
      name: "unwrapWETH9WithFee",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  
];

const init = () => {
  const customWsProvider = new ethers.providers.WebSocketProvider(url);

  const iface = new ethers.utils.Interface(ABI);
  customWsProvider.on("pending", async (tx) => {
    try {
      const transaction = await customWsProvider.getTransaction(tx);

      if (transaction.to.toLowerCase() === uniswapRouterAddress.toLowerCase()) {
        const inputdata = transaction.data;
       
        let decodedData = iface.parseTransaction({ data: inputdata, value: transaction.value });
        
        if(decodedData.name=="exactInputSingle" || decodedData.name=="exactOutputSingle")
        {
            console.log(transaction);
            console.log("value===",Number(transaction.value._hex))
            console.log("function name===",decodedData.name);
            const params=decodedData.args.params;
            console.log("-------------Params-------------")
            console.log("TokenIn===",params.tokenIn)
            console.log("TokenOut===",params.tokenOut)
            console.log("Fee===",params.fee)
            console.log("Recipient===",params.recipient)
            console.log("Deadline===",Number(params.deadline._hex))
            console.log("AmountIn===",Number(params.amountIn._hex))
            console.log("AmountOutMinimum===",Number(params.amountOutMinimum._hex))
            console.log("SqrtPriceLimitX96===",Number(params.sqrtPriceLimitX96._hex))
            console.log("\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")


        }
   
        }
    } catch (error) {
    }
  });

  customWsProvider._websocket.on("error", () => {
    console.log("Unable to connect, retrying in 3s...");
    setTimeout(init, 3000);
  });

  customWsProvider._websocket.on("close", (code) => {
    console.log(
      `Connection lost with code ${code}! Attempting reconnect in 3s...`
    );
    customWsProvider._websocket.terminate();
    setTimeout(init, 3000);
  });
};

init();
