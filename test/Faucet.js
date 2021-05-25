var Faucet = artifacts.require("Faucet");

module.exports = function(deployer) {
  deployer.deploy(Faucet)

    // Option 2) Console log the address:
    .then(() => console.log(Faucet.address))

    // Option 3) Retrieve the contract instance and get the address from that:
    .then(() => Faucet.deployed())
    .then(_instance => console.log(_instance.address));
};