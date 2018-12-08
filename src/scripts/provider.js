var client = dApi.client;
client.registerClient({});

client.api.network.getNetwork().then(function(res) {
  console.log(res)
});
