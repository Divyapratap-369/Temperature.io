let celsius = document.getElementById('celsius');
let fahrenite = document.getElementById('fahrenite');

celsius.oninput = () =>{
  let output = parseFloat(celsius.value * 9) /5 + 32;
  fahrenite.value = parseFloat(output.toFixed(2));
};
fahrenite.oninput = () =>{
  let output = (parseFloat(fahrenite.value) - 32) * 5/9;
  celsius.value = parseFloat(output.toFixed(2));
};
