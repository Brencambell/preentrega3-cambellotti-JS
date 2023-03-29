const buttonSelect = document.querySelectorAll('.buttonPrincipal');

buttonSelect.forEach(button => {
  button.addEventListener('click', () => {
    const contenedorDados = document.querySelector('#diceSection');
    contenedorDados.style.display = 'block';
  });
});

const tirarDados = document.querySelector ('#tirarDados');

tirarDados.addEventListener ('click', () => {
  const vida = document.querySelector('#diceVida');
  const fuerza = document.querySelector('#diceFuerza');
  const defensa = document.querySelector('#diceDefensa');
  
  vida.textContent = 'Vida: ' + (Math.floor(Math.random() * 100) + 1);
  fuerza.textContent = 'Fuerza: ' + (Math.floor(Math.random() * 100) + 1);
  defensa.textContent = 'Defensa: ' + (Math.floor(Math.random() * 100) + 1);
});

const guardarValores = document.querySelector('#guardarValores');

guardarValores.addEventListener('click', () => {
  // Obtener los valores de los dados
  const vida = document.querySelector('#diceVida').textContent;
  const fuerza = document.querySelector('#diceFuerza').textContent;
  const defensa = document.querySelector('#diceDefensa').textContent;

   // Crear un objeto con los valores de vida, fuerza y defensa
   const valores = {
    vida: vida,
    fuerza: fuerza,
    defensa: defensa
  };

  // Convertir cada propiedad del objeto a una cadena de texto JSON
  const vidaJSON = JSON.stringify(valores.vida);
  const fuerzaJSON = JSON.stringify(valores.fuerza);
  const defensaJSON = JSON.stringify(valores.defensa);

  // Guardar cada cadena JSON en el localStorage con una clave única para cada propiedad
  localStorage.setItem('vidaPersonaje', vidaJSON);
  localStorage.setItem('fuerzaPersonaje', fuerzaJSON);
  localStorage.setItem('defensaPersonaje', defensaJSON);

  alert("Los valores de tu personaje fueron guardados en el Local Storage")
});

const mostrarValores = document.querySelector ('#mostrarValores');

mostrarValores.addEventListener('click', () => {
  // Obtener la cadena JSON de cada propiedad del objeto del Local Storage
  const vidaJSON = localStorage.getItem('vidaPersonaje');
  const fuerzaJSON = localStorage.getItem('fuerzaPersonaje');
  const defensaJSON = localStorage.getItem('defensaPersonaje');

  // Convertir cada cadena JSON en un objeto de JavaScript
  const vida = JSON.parse(vidaJSON);
  const fuerza = JSON.parse(fuerzaJSON);
  const defensa = JSON.parse(defensaJSON);

  // Mostrar los valores en la consola
  console.log(`Vida: ${vida}`);
  console.log(`Fuerza: ${fuerza}`);
  console.log(`Defensa: ${defensa}`);

  alert("Los valores se muestran en consola")
});
