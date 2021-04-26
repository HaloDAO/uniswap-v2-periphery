const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0xffe1655451791088e1debbbef16de683fd60f4a1';

  if (network === 'mainnet') {
    weth = '';
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};