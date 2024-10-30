import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Dummy data
data = {'temperature': np.random.rand(100) * 100, 
        'vibration': np.random.rand(100) * 50, 
        'pressure': np.random.rand(100) * 10,
        'failure': np.random.randint(0, 2, 100)}

df = pd.DataFrame(data)

# Features and target
X = df[['temperature', 'vibration', 'pressure']]
y = df['failure']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'model.pkl')
