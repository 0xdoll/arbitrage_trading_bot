require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config(); // parse .env file

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      forking: { // mainnet fork
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALECHEMY_MAINNET}`,
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFRA_KEY}`,
      accounts: [process.env.ETH_ACCOUNT_PK,],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFRA_KEY}`,
      accounts: [process.env.ETH_ACCOUNT_PK,],
    }
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.ETH_APIKEY,
      mainnet: process.env.ETH_APIKEY
    },
  }
};
