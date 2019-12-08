import Web3 from "web3";
// import Torus from "@toruslabs/torus-embed";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export default getWeb3;

// async function getWeb3 () {
//   new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     window.addEventListener("load", async () => {
//       const web3Obj = {
//         web3: new Web3(),
//         setweb3: function(provider) {
//           const web3Inst = new Web3(provider)
//           web3Obj.web3 = web3Inst
//           sessionStorage.setItem('pageUsingTorus', true)
//         },
//         initialize: async function() {
//           const torus = new Torus()
//           await torus.init({
//             network: {
//               host: 'HTTP://127.0.0.1:7545',
//               networkName: 'dev'
//             },
//             enableLogging: false
//           })
//           await torus.login()
//           web3Obj.setweb3(torus.provider)
//         }
//       }
//   });

// export default getWeb3;
