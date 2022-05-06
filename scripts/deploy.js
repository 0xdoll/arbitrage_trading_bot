const hre = require("hardhat");
const config = require("../config.json")

async function main() {
  await hre.run('compile');

  const ArbitrageBot = await hre.ethers.getContractFactory("ArbitrageBot");
  const arbitrageBot = await ArbitrageBot.deploy();
  await arbitrageBot.deployed(config.SUSHISWAP.V2_ROUTER_02_ADDRESS, config.UNISWAP.V2_ROUTER_02_ADDRESS);

  console.log("arbitrageBot deployed to:", helloer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
