const hre = require('hardhat');

async function deployContract() {
	await hre.run('compile');
	const FiredGuys = await hre.ethers.getContractFactory("PersonalToken");
	const firedguys = await FiredGuys.deploy();
	await firedguys.deployed();

	console.log("Deployed at: ", firedguys.address);
}

module.exports = deployContract;
