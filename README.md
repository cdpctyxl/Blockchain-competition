<p align="center">
 河北石油职业技术大学参赛作品：NFT艺术家工作室 ArtistStudio
</p>

👋 Welcome! ArtistStudio是一个艺术家用来上传、买卖自己的书画作品的NFT工作室.

-ArtistStudio用flow链的合约语言 [Cadence](https://docs.onflow.org/cadence)开发
- 功能包括上传书画作品及其创作小传与授权文件，发行为NFT，在市场中拍卖、买卖

## 🎬 访问地址：

Check out the [live demo of Kitty Items](http://kitty-items-flow-testnet.herokuapp.com/),
deployed on the Flow Testnet.

## ✨ Getting Started

### 1. Install the Flow CLI

Before you start, install the [Flow command-line interface (CLI)](https://docs.onflow.org/flow-cli).

_⚠️ This project requires `flow-cli v0.15.0` or above._

### 2. Clone the project

```sh
git clone https://github.com/onflow/kitty-items.git
```

### 3. Create a Flow Testnet account

You'll need a Testnet account to work on this project. Here's how to make one:

#### Generate a key pair 

Generate a new key pair with the Flow CLI:

```sh
flow keys generate
```

_⚠️ Make sure to save these keys in a safe place, you'll need them later._

#### Create your account

Go to the [Flow Testnet Faucet](https://testnet-faucet-v2.onflow.org/) to create a new account. Use the **public key** from the previous step.

#### Save your keys

After your account has been created, save the address and private key to the following environment variables:

```sh
# Replace these values with your own!
export FLOW_ADDRESS=0xabcdef12345689
export FLOW_PRIVATE_KEY=xxxxxxxxxxxx
```

### 4. Deploy the contracts

```sh
flow project deploy --network=testnet
```

### 5. Run the API

After the contracts are deployed, follow the [Kitty Items API instructions](https://github.com/onflow/kitty-items/tree/master/api#readme)
to install and run the Kitty Items API. This backend service is responsible for initializing accounts, minting NFTs, and processing events.

### 6. Launch the web app

Lastly, follow the [Kitty Items Web instructions](https://github.com/onflow/kitty-items/tree/master/web#readme) to launch the Kitty Items front-end React app.

## Project Overview

![Project Overview](kitty-items-diagram.png)

## 🔎 Legend

Above is a basic diagram of the parts of this project contained in each folder, and how each part interacts with the others.

### 1. Web App (Static website) | [kitty-items/web](https://github.com/onflow/kitty-items/tree/master/web)

A true dapp, client-only web app. This is a complete web application built with React that demonstrates how to build a static website that can be deployed to an environment like IPFS and connects directly to the Flow blockchain using `@onflow/fcl`. No servers required. `@onflow/fcl` handles authentication and authorization of [Flow accounts](https://docs.onflow.org/concepts/accounts-and-keys/), [signing transactions](https://docs.onflow.org/concepts/transaction-signing/), and querying data using using Cadence scripts.

### 2. Look Ma, a Web Server! | [kitty-items/api](https://github.com/onflow/kitty-items/tree/master/api)

We love decentralization, but servers are still very useful, and this one's no exception. The code in this project demonstrates how to connect to Flow using [Flow JavaScript SDK](https://github.com/onflow/flow-js-sdk) from a Node JS backend. It's also chalk-full of handy patterns you'll probably want to use for more complex and feature-rich blockchain applications, like storing and querying events using a SQL database (Postgres). The API demonstrates how to send transactions to the Flow Blockchain, specifically for minting [Kibbles](https://github.com/onflow/kitty-items/blob/master/cadence/contracts/Kibble.cdc) (fungible tokens) and [Kitty Items](https://github.com/onflow/kitty-items/blob/master/cadence/contracts/KittyItems.cdc) (non-fungible tokens).

### 3. Cadence Code | [kitty-items/cadence](https://github.com/onflow/kitty-items/tree/master/cadence)

[Cadence](https://docs.onflow.org/cadence) smart contracts, scripts & transactions for your viewing pleasure. This folder contains all of the blockchain logic for the marketplace application. Here you will find examples of [fungible token](https://github.com/onflow/flow-ft) and [non-fungible token (NFT)](https://github.com/onflow/flow-nft) smart contract implementations, as well as the scripts and transactions that interact with them. It also contains examples of how to _test_ your Cadence code (tests written in Golang).

## 😺 What are Kitty Items?

Items are hats for your cats, but under the hood they're [non-fungible tokens (NFTs)](https://github.com/onflow/flow-nft) stored on the Flow blockchain.

Items can be purchased from the marketplace with fungible tokens.
In the future you'll be able to add them to [Ethereum CryptoKitties](https://www.cryptokitties.co/) with ownership validated by an oracle.

## ❓ More Questions?

- Chat with the team on the [Flow Discord server](https://discord.gg/xUdZxs82Rz)
- Ask questions on the [Flow community forum](https://forum.onflow.org/t/kitty-items-marketplace-demo-dapp/759/5)

---

🚀 Happy Hacking!
