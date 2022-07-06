require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploys the contract", async () => {
	await hre.run('compile'); 
  const FiredGuys = await hre.ethers.getContractFactory("PersonalToken"); 
  const firedguys = await FiredGuys.deploy(); 
  await firedguys.deployed(); 

  console.log("Deployed at: ", firedguys.address);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/348aec3e3c384e4ab93d9cc7f5694be3", // infura link
      accounts: ['87dc1fe90ba61b010973edec234105d8705742de95c84b8b054c16b6fe05c9b2'] //metamask private key
    }
  },
};
