export function temperatureConversion(unit, temp) {
    
  function celsiusToFahrenheit() {
    return Math.round((temp * 9) / 5 + 32);
  }
  let temperature = temp;
  if (unit === "celsius") {
    return temperature;
  } else {
    temperature = celsiusToFahrenheit();
    return temperature;
  }
}