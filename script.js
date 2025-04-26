// Función para iniciar sesión
function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "admin" && clave === "1234") {
    // Cambiar a la página de saldo
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("saldoPage").style.display = "block";
  } else {
    alert("Usuario o clave incorrectos");
  }
}

// Función para registrarse (puedes ampliarla más adelante)
function register() {
  alert("Funcionalidad de registro próximamente disponible.");
}

// Función para ver más detalles
function verMas(cuenta) {
  if (cuenta === 'principal') {
    alert("Mostrar más detalles de la Cuenta Principal...");
  } else if (cuenta === 'ahorros') {
    alert("Mostrar más detalles de la Cuenta de Ahorros...");
  }
}

// Función para operaciones (puedes ampliarla más adelante)
function irOperaciones() {
  alert("Aquí irían las opciones de Operaciones");
}
