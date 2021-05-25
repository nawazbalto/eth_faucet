const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
const MNEMONIC = 'echo tower recall evoke road olive cloud lecture chunk orphan hamster spirit';

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: 1 // Any network (default: none)
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/ed1a61b6983b4d28ba9a7797992ebb9b")
            },
            network_id: "*",
            gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
        },
        mainnet: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/ed1a61b6983b4d28ba9a7797992ebb9b")
            },
            network_id: 3,
            gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
        }
    },
    compilers: {
        solc: {
            version: "0.7.0"
        }
    }
};
