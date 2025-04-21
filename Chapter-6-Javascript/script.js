// Get references to the necessary elements
const petrolPriceInput = document.getElementById('petrol-price');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate-btn');
const totalCostDisplay = document.getElementById('total-cost');

// Function to calculate and display the total cost
function calculateTotalCost() {
    // Get values from the inputs
    const petrolPrice = parseFloat(petrolPriceInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate the total cost
    const totalCost = petrolPrice * liters;

    // Display the result
    totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
}

// Add event listener to the button
calculateButton.addEventListener('click', calculateTotalCost);
