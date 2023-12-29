document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultContainer = document.getElementById('result-container');
    const bmiResultElement = document.getElementById('bmi-result');
    const interpretationElement = document.getElementById('interpretation');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        // Make a POST request to the server with form data
        const response = await fetch('/bmicalculator', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
  
        // Display the BMI result and interpretation
        bmiResultElement.textContent = `BMI: ${result.bmiResult}`;
        interpretationElement.textContent = `Interpretation: ${result.interpretation}`;
        resultContainer.style.display = 'block'; // Show the result container
      } catch (error) {
        console.error('Error:', error.message);
      }
    });
  });
  