require('dotenv').config()
async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    let weth, router;
    const FACTORY_ADDRESS = process.env.FACTORY_ADDRESS;

    const WETH = await ethers.getContractFactory('WETH');
    const WETHContract = await WETH.deploy();
    weth = await WETHContract.deployed();

    const Router = await ethers.getContractFactory('UniswapV2Router02');
    const RouterContract = await Router.deploy(FACTORY_ADDRESS, weth.address);
    router = await RouterContract.deployed();

    console.log('WETH Contract Address: ', weth.address);
    console.log('Router Contract Address: ', router.address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});