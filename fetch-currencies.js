async function fetchCurrencies () {
    try {
        const response = await fetch("https://api.fxratesapi.com/currencies");
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        const currencies = await response.json();
        const selectFrom = document.getElementById("select-from-menu");
        const selectTo = document.getElementById("select-to-menu");
        populateSelectMenu(selectFrom, currencies);
        populateSelectMenu(selectTo, currencies);
    } catch (error) {
        console.error("Failed to load currencies:", error);
    }
}

function populateSelectMenu (selectMenu, currencies) {
    for (const [code, data] of Object.entries(currencies)) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = `${code} - ${data.name}`;
        selectMenu.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", fetchCurrencies);