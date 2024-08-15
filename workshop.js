function convertToCelsius(fahrenheit) {
  return Math.round(fahrenheit - 32) * (5 / 9);
}

function createMessage(fahrenheit, convertToCelsius) {
  let message = "";
  const numFahrenheit = fahrenheit;
  if (numFahrenheit < 32) {
    message = "Very Cold!";
  } else if (numFahrenheit < 64) {
    message = "Cold!";
  } else if (numFahrenheit < 86) {
    message = "Hot!";
  } else if (numFahrenheit < 100) {
    message = "Very Hot";
  }

  return `${fahrenheit} Fahrenheit is ${convertToCelsius} Celsius. It is ${message}`;
}

function rand(limit) {
  return Math.round(Math.random() * limit);
}
let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
