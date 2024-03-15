    // Choice between all options that user can choose from
    document.getElementById("calculatorBtn").addEventListener("click", function() {
        toggleOptions("calculatorOptions");
    });

    document.getElementById("converterBtn").addEventListener("click", function() {
        toggleOptions("converterOptions");
    });
        
    document.getElementById("PasswordGeneratorBtn").addEventListener("click", function() {
        toggleOptions("passwordGenerator");
    });
    
    function toggleOptions(optionsId) {
        var optionsDiv = document.getElementById(optionsId);
        var allOptions = document.querySelectorAll(".options"); // Select all options divs
    
        // Hide all options divs except the one clicked
        for (var i = 0; i < allOptions.length; i++) {
            if (allOptions[i].id !== optionsId) {
                allOptions[i].style.display = "none";
            }
        }
    
        // Toggle the display of the clicked options div
        if (optionsDiv.style.display === "none") {
            optionsDiv.style.display = "block";
        } else {
            optionsDiv.style.display = "none";
        }
    }
    
    //Calculator function
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        var expression = document.getElementById('display').value;
        var result = eval(expression);
        document.getElementById('display').value = result;
    }
    
    // function for unit conversion
    function convert(option) {
        let inputValue;
        let result;
        let outputDiv = document.getElementById('output');
    
        // Hide all output divs initially
        document.getElementById('KG').style.display = 'none';
        document.getElementById('KM').style.display = 'none';
        document.getElementById('Celsius').style.display = 'none';
        document.getElementById('Dollar-Euro').style.display = 'none';
        document.getElementById('Euro-Dinar').style.display = 'none';
        document.getElementById('Dollar-Dinar').style.display = 'none';
    
        switch(option) {
            case 'kgToPounds':
                var div = document.getElementById('KG');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('kgInputKG').value);
                result = inputValue * 2.20462;
                outputDiv.innerHTML = `${inputValue} kilograms = ${result.toFixed(2)} pounds`;
                break;
            case 'kmToMiles':
                var div = document.getElementById('KM');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('kmInputKM').value);
                result = inputValue * 0.621371;
                outputDiv.innerHTML = `${inputValue} kilometers = ${result.toFixed(2)} miles`;
                break;
            case 'celsiusToFahrenheit':
                var div = document.getElementById('Celsius');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('celsiusInputCelsius').value);
                result = (inputValue * 9/5) + 32;
                outputDiv.innerHTML = `${inputValue} degrees Celsius = ${result.toFixed(2)} degrees Fahrenheit`;
                break;
            case 'DollarToEuro':
                var div = document.getElementById('Dollar-Euro');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('dollarInput').value);
                // Perform Dollar to Euro conversion (replace this logic with actual conversion)
                result = inputValue * 0.92; // Dummy conversion
                outputDiv.innerHTML = `${inputValue.toFixed(2)} dollars = ${result.toFixed(2)} euros`;
                break;
            case 'EuroToDinar':
                var div = document.getElementById('Euro-Dinar');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('euroInput').value);
                // Perform Euro to Dinar conversion (replace this logic with actual conversion)
                result = inputValue * 117.20; // Dummy conversion
                outputDiv.innerHTML = `${inputValue.toFixed(2)} euros = ${result.toFixed(2)} dinars`;
                break;
            case 'DollarToDinar':
                var div = document.getElementById('Dollar-Dinar');
                div.style.display = 'block';
                inputValue = parseFloat(document.getElementById('dollarInput2').value);
                // Perform Dollar to Dinar conversion (replace this logic with actual conversion)
                result = inputValue * 107.67; // Dummy conversion
                outputDiv.innerHTML = `${inputValue.toFixed(2)} dollars = ${result.toFixed(2)} dinars`;
                break;
            default:
                outputDiv.innerHTML = 'Invalid option.';
                break;
        }
    }
    
// Password Generator with characters and numbers
document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector("#passwordGenerator .btn-option");
    const generatedPasswordDisplay = document.getElementById("generatedPassword");

    generateButton.addEventListener("click", function() {
        const randomChars = generateRandomCharacters(8);
        const randomNumbers = generateRandomNumbers(2);
        const generatedPassword = randomChars + randomNumbers;
        generatedPasswordDisplay.textContent = generatedPassword;
    });

    function generateRandomCharacters(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateRandomNumbers(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }
});

