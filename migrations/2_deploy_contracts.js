const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0x648db609d49e9cc626ddba0e588445fd19d2dcc3';

  if (network === 'mainnet') {
    weth = '';
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};