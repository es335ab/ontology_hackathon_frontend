var client = dApi.client;
client.registerClient({});

client.api.asset.getAccount().then(sender => {
  var contract = 'e03d5351186fd7b73ee74e131c466b6b74cfd01e';
  var method = 'SendTokenAndMessage';
  var receiver = 'ASA4WmuuqFx63zmBsXiEF1N3pCz9cTCgsU';
  var parameters = [
    {type: 'ByteArray', value: client.api.utils.addressToHex(sender)},
    {type: 'ByteArray', value: client.api.utils.addressToHex(receiver)},
    {type: 'Integer', value: 1000},
    {type: 'String', value: "message!"}];
  var gasPrice = 500;
  var gasLimit = 30000;
  client.api.smartContract.invoke({
    contract: contract,
    method: method,
    parameters: parameters,
    gasPrice: gasPrice,
    gasLimit: gasLimit
  }).then(function (res) {
    console.log(res);
  });
});

var contract = 'e03d5351186fd7b73ee74e131c466b6b74cfd01e';
var method = 'ShowTransactions';
var childminder = 'ASA4WmuuqFx63zmBsXiEF1N3pCz9cTCgsU';
var parameters = [{type: 'ByteArray', value: client.api.utils.addressToHex(childminder)}];
client.api.smartContract.invokeRead({
  contract: contract,
  method: method,
  parameters: parameters,
}).then(function (res) {
  console.log(res);
});
