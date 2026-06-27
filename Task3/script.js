function convertTemperature() {

    const temp = parseFloat(document.getElementById("temperature").value);

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    const output = document.getElementById("output");

    if (isNaN(temp)) {

        output.innerHTML = "Please enter a valid number.";

        output.style.color = "red";

        return;

    }

    if (from === to) {

        output.innerHTML = temp + " " + getUnit(from);

        output.style.color = "#2563eb";

        return;

    }

    let celsius;

    if (from === "celsius") {

        celsius = temp;

    }

    else if (from === "fahrenheit") {

        celsius = (temp - 32) * 5 / 9;

    }

    else {

        celsius = temp - 273.15;

    }

    let result;

    if (to === "celsius") {

        result = celsius;

    }

    else if (to === "fahrenheit") {

        result = (celsius * 9 / 5) + 32;

    }

    else {

        result = celsius + 273.15;

    }

    output.innerHTML =

        result.toFixed(2) + " " + getUnit(to);

    output.style.color = "#2563eb";

}

function getUnit(unit) {

    if (unit === "celsius") return "°C";

    if (unit === "fahrenheit") return "°F";

    return "K";

}

function resetFields() {

    document.getElementById("temperature").value = "";

    document.getElementById("from").selectedIndex = 0;

    document.getElementById("to").selectedIndex = 0;

    document.getElementById("output").innerHTML =

        "Result will appear here";

    document.getElementById("output").style.color = "#2563eb";

}