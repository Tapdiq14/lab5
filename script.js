let result = document.getElementById("result");

function appendValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function deleteLastEntry() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
const percentButton = document.getElementById("percent");
percentButton.addEventListener("click", handlePercentButton);

function handlePercentButton() {
    const currentValue = getCalculatorDisplayValue(); // Retrieve the current value from the display
    const percentValue = currentValue / 100; // Calculate the percentage
    appendValue(percentValue); // Update the display with the percentage value
}