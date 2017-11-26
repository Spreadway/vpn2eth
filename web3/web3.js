
var blockNumber;
var endpoint = process.argv.slice(2)[1];

// http://192.168.42.1:8545
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(endpoint));


console.log(process.argv.slice(2))

web3.eth.getBlock(process.argv.slice(2)[0], (error, result) => {
  console.log('error:', error);
  console.log('results', result);
});
