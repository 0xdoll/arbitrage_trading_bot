const { artifacts, ethers } = require("hardhat");

(async () => {

    // npx hardhat run test/td.js --network <network>

    var signer = (await ethers.getSigners())[0]; // first signer.
    // signer.provider = new ethers.providers.JsonRpcProvider(); // for localhost node cli, remove if no need.
    const contract_addr = "";
    const tokenArtifact = await artifacts.readArtifact("ArbitrageBot");
    var contract = new ethers.Contract(contract_addr, tokenArtifact.abi, signer);

})();