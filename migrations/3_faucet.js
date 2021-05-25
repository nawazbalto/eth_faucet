var Faucet = artifacts.require("Faucet");
var Arg = "Hello world";
// 0x7e3b3162eE71266E9e666B229F8B61308a488bA9
module.exports = deployer => {
    deployer.deploy(Faucet).then(() => console.log("NAWAZ: "+Faucet.address));
};