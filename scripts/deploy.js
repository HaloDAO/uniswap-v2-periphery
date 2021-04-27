async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    let weth;
    const FACTORY_ADDRESS = '0x648db609d49e9cc626ddba0e588445fd19d2dcc3';

    const WETH = await ethers.getContractFactory('WETH');
    const WETHContract = await WETH.deploy();
    weth = await WETHContract.deployed();

    const Router = await ethers.getContractFactory('UniswapV2Router02');
    await Router.deploy(FACTORY_ADDRESS, weth.address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});