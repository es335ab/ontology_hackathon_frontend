var client = dApi.client;
client.registerClient({});

var contract = '39f3fb644842c808828817bd73da0946d99f237f';
var method = 'Hello';
var parameters = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];
var gasPrice = 500;
var gasLimit = 30000;

client.api.smartContract.invoke({
  contract: contract,
  method: method,
  parameters: parameters,
  gasPrice: gasPrice,
  gasLimit: gasLimit
}).then(function(res) {
  console.log(res);
  debugger;
});
