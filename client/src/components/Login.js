import React from 'react'
import Nav from './Nav'
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";


const Login = async () => {
  const torus = new Torus({
    buttonPosition: "top-left" // default: bottom-left
  });
  await torus.init({
    buildEnv: "production", // default: production
    enableLogging: true, // default: false
    network: {
      host: "localhost", // default: mainnet
      chainId: 1,
      networkName: "localhost 8545" // default: Main Ethereum Network
    },
    showTorusButton: true // default: true
  });
  await torus.ethereum.enable(); // await torus.ethereum.enable()
  const web3 = new Web3(torus.provider);
  return (
    <div>
      <Nav />
      <h1>Login page</h1>
    </div>
  )
}

export default Login