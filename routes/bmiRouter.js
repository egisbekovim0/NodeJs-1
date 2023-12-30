const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { age, gender, height, heightUnit, weight, weightUnit } = req.body;

    if (isNaN(age) || age < 2) {
        return res.status(400).json({ message: 'Invalid age.' });
    }
    
    if (!['male', 'female'].includes(gender)) {
        return res.status(400).json({ message: 'Invalid gender.' });
    }
    
    if (isNaN(height) || height <= 0) {
        return res.status(400).json({ message: 'Invalid height.' });
    }
    
    if (isNaN(weight) || weight <= 0) {
        return res.status(400).json({ message: 'Invalid weight.' });
    }

    const heightInCm = heightUnit === 'inches' ? height * 2.54 : height;
    const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;

    const bmi = weightInKg / Math.pow(heightInCm / 100, 2);

    let descriptionOfBMI;
    if (age >= 2 && age <= 13) {

        if (bmi < 17.5) {
            descriptionOfBMI = 'Underweight';
        } else if (bmi <= 23) {
            descriptionOfBMI = 'Normal weight';
        } else if (bmi <= 27) {
            descriptionOfBMI = 'Overweight';
        } else {
            descriptionOfBMI = 'Obese';
        }
    } else if (age >= 13 && age <= 19) {

        if (bmi < 17.5) {
            descriptionOfBMI = 'Underweight';
        } else if (bmi <= 23) {
            descriptionOfBMI = 'Normal weight';
        } else if (bmi <= 27) {
            descriptionOfBMI = 'Overweight';
        } else {
            descriptionOfBMI = 'Obese';
        }
    } else {

        if (bmi < 18.5) {
            descriptionOfBMI = 'Underweight';
        } else if (bmi <= 25) {
            descriptionOfBMI = 'Normal weight';
        } else if (bmi <= 30) {
            descriptionOfBMI = 'Overweight';
        } else {
            descriptionOfBMI = 'Obese';
        }
    }

    res.json({ bmiResult: bmi.toFixed(2), descriptionOfBMI });
});

module.exports = router;
