const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0xf43b13e1ad3629b69d1e8987231db473ef9a0fe4';

  if (network === 'mainnet') {
    weth = '';
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};