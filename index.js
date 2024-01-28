const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-sepolia.g.alchemy.com/v2/Wv0dFwEX_xueX5Lj-Byexpdh-IEXWGKh";

let methodName = "eth_getBlockByNumber";
let params =  [
    "0xb443", // block 46147
    true  // retrieve the full transaction object in transactions array
];

methodName = "eth_getBalance";
params =  [
    "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8", // block 46147
    "latest"  // retrieve the full transaction object in transactions array
];
methodName = "eth_getTransactionCount";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: methodName,
  params: params
}).then((response) => {
  console.log(response.data);
});