# Base Faucet

A decentralized faucet for distributing small amounts of Base tokens to users, allowing them to pay for gas fees and test dApps on the Base blockchain.

## Features

- Request a small amount of Base tokens once every 24 hours
- Prevents spamming by adding a cooldown period
- Simple web interface for users to request tokens with MetaMask
- Owner-controlled settings for token distribution

## Setup

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Truffle](https://www.trufflesuite.com/) (version 5 or higher)
- [Ganache](https://www.trufflesuite.com/ganache) (for local testing)
- A MetaMask wallet configured for the Base network

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/BaseFaucet.git
   cd BaseFaucet
   npm install
   truffle migrate --network development
   npm run test

