/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.6.6",
  networks: {
    kovan: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};


