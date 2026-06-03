const convertButton = document.getElementById("convert-button");

async function fetchConversionResult () {
    const amount = document.getElementById("amount-input").value;
    const fromCode = document.getElementById("select-from-menu").value;
    const toCode = document.getElementById("select-to-menu").value;

    try {
        const response = await fetch(`https://api.fxratesapi.com/convert?from=${fromCode}&to=${toCode}&amount=${amount}`);
        if (!response.ok) {
            throw new Error(`API Request failed with status: ${response.status}`);
        }
        const conversionResult = await response.json();
        const convertedAmount = conversionResult.result;
        const displayArea = document.getElementById("result-display-area");
        const resultText = document.querySelector('#result-display-area .result-text');
        resultText.textContent = `${amount} ${fromCode} is ${convertedAmount} ${toCode}`;
        displayArea.removeAttribute('hidden');
    } catch (error) {
        console.error("Failed to fetch conversion result:", error);
    }

}

convertButton.addEventListener("click", fetchConversionResult);