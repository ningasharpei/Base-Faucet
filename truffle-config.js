module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    base: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://mainnet.base.org`
      ),
      network_id: 8453, // Base Mainnet ID
      gas: 6000000, // Gas limit
      gasPrice: 10000000000, // 10 gwei (can be adjusted based on Base network conditions)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Use specific Solidity compiler version
      settings: {
        optimizer: {
          enabled: true, // Optimizing bytecode for reduced gas cost
          runs: 200,
        },
      },
    },
  },
};
