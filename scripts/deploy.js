require('dotenv').config()
const hre = require('hardhat')

async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    let router;
    const FACTORY_ADDRESS = process.env.FACTORY_ADDRESS;
    const WETH_ADDRESS = process.env.WETH_ADDRESS;

    const Router = await ethers.getContractFactory('UniswapV2Router02');
    const RouterContract = await Router.deploy(FACTORY_ADDRESS, WETH_ADDRESS);
    router = await RouterContract.deployed();

    console.log('WETH Contract Address: ', WETH_ADDRESS);
    console.log('Router Contract Address: ', router.address);

    console.log('Verifying Factory Contract');
    await hre.run('verify:verify', {
      address: router.address,
      constructorArguments: [
        FACTORY_ADDRESS,
        WETH_ADDRESS
      ]
    })
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});