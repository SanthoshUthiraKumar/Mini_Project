// web3Setup.js
import Web3 from 'web3';
import MaintenanceLog from './MaintenanceLog.json'; // Adjust the path if needed

let web3;
let contract;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("User denied account access", error);
  }
} else if (window.web3) {
  // Legacy dApp browsers
  web3 = new Web3(window.web3.currentProvider);
} else {
  // If no web3 instance is detected, fall back to Ganache or other provider
  const provider = new Web3.providers.HttpProvider('http://localhost:7545'); // Ganache default port
  web3 = new Web3(provider);
}

const initContract = async () => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = MaintenanceLog.networks[networkId];
  contract = new web3.eth.Contract(
    MaintenanceLog.abi,
    deployedNetwork && deployedNetwork.address,
  );
  return contract;
};

export { web3, initContract };
