const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/bmicalculator', (req, res) => {
    const { age, gender, height, heightUnit, weight, weightUnit } = req.body;
  
    // Validate input
    if (
      isNaN(age) ||
      !['male', 'female'].includes(gender) ||
      isNaN(height) ||
      isNaN(weight) ||
      height <= 0 ||
      weight <= 0
    ) {
      return res.status(400).json({ message: 'Invalid input.' });
    }
  
    // Convert height and weight to a standard unit (e.g., cm and kg)
    const heightInCm = heightUnit === 'inches' ? height * 2.54 : height;
    const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
  
    // BMI calculation logic
    const bmi = weightInKg / Math.pow(heightInCm / 100, 2);
  
    // Interpretation
    let interpretation;
    if (bmi < 18.5) {
      interpretation = 'Underweight';
    } else if (bmi < 24.9) {
      interpretation = 'Normal weight';
    } else if (bmi < 29.9) {
      interpretation = 'Overweight';
    } else {
      interpretation = 'Obese';
    }
  
    // Return simplified JSON with BMI and interpretation
    res.json({ bmiResult: bmi.toFixed(2), interpretation });
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
