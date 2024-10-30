from flask import Flask, request, jsonify
import numpy as np
import joblib

from flask_cors import CORS
app = Flask(__name__)
CORS(app,origins=["http://localhost:3000"])

# app = Flask(__name__)

# Load model
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([data['temperature'], data['vibration'], data['pressure']]).reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'failure': bool(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
