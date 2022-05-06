const Arbitrage = artifacts.require("Arbitrage")

const config = require("../config.json")

module.exports = async function (deployer) {
    await deployer.deploy(
        Arbitrage,
        config.SUSHISWAP.V2_ROUTER_02_ADDRESS,
        config.UNISWAP.V2_ROUTER_02_ADDRESS
    );
};