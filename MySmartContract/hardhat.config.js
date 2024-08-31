
require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.5.11",
  networks: {
    base: {
      url: 'https://base-rpc-url', // URL ของ Base Chain RPC
      accounts: [`ecf03318a10408e4f35a2f382b07813c0f7887f8ea7c85392a56ad107f3b8438`] // ใช้ private key ของคุณ
    },
    localhost: {
      url: 'http://127.0.0.1:8546' // URL ของ Hardhat Network
    }
  }
};
