import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { web3, initContract } from './web3Setup';  // Adjust the path if needed

const Prediction = () => {
  // State for sensor data
  const [sensorData, setSensorData] = useState({ temperature: '', vibration: '', pressure: '' });
  const [apiPrediction, setApiPrediction] = useState(null);
  const [contractPrediction, setContractPrediction] = useState(null);
  const [loadingContractPrediction, setLoadingContractPrediction] = useState(true);

  // Handle API prediction request
  const handlePredict = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', sensorData);  // Make sure the API URL is correct
      setApiPrediction(response.data.failure ? 'Maintenance Needed' : 'No Issues');
    } catch (error) {
      console.error('Error making API request:', error);
      setApiPrediction('Error predicting from API');
    }
  };

  // Initialize smart contract and get prediction from blockchain
  useEffect(() => {
    const getContractPrediction = async () => {
      try {
        const contract = await initContract();  // Initialize the contract
        const accounts = await web3.eth.getAccounts();  // Get user's Ethereum account
        const result = await contract.methods.getMaintenanceLogs().call({ from: accounts[0] });  // Call smart contract method
        setContractPrediction(result);
      } catch (error) {
        console.error('Error connecting to the smart contract:', error);
        setContractPrediction('Error predicting from smart contract');
      } finally {
        setLoadingContractPrediction(false);
      }
    };

    getContractPrediction();
  }, []);

  return (
    <div className="container">
      <h2>Predict Machine Failure</h2>

      {/* Input fields for sensor data */}
      <input 
        type="number" 
        placeholder="Temperature" 
        value={sensorData.temperature} 
        onChange={e => setSensorData({ ...sensorData, temperature: e.target.value })} 
      />
      <input 
        type="number" 
        placeholder="Vibration" 
        value={sensorData.vibration} 
        onChange={e => setSensorData({ ...sensorData, vibration: e.target.value })} 
      />
      <input 
        type="number" 
        placeholder="Pressure" 
        value={sensorData.pressure} 
        onChange={e => setSensorData({ ...sensorData, pressure: e.target.value })} 
      />

      {/* Button to trigger API prediction */}
      <button onClick={handlePredict}>Predict</button>

      {/* Display API prediction result */}
      <div>
        <h3>API Prediction</h3>
        {apiPrediction ? (
          <p>API Prediction: {apiPrediction}</p>
        ) : (
          <p>No API prediction available yet.</p>
        )}
      </div>

      {/* Display smart contract prediction result */}
      <div>
        <h3>Smart Contract Prediction</h3>
        {loadingContractPrediction ? (
          <p>Loading contract prediction...</p>
        ) : contractPrediction ? (
          <p>Contract Prediction: {contractPrediction}</p>
        ) : (
          <p>No contract prediction available.</p>
        )}
      </div>
    </div>
  );
};

export default Prediction;