/**
 * @type {HTMLFormElement}
 */
const formCursos = document.querySelector("form#formcursos");

/**
 * @type {HTMLInputElement}
 */
const nameInput = formCursos.querySelector("input[name='nombre']");
/**
 * @type {HTMLInputElement}
 */
const precioInput = formCursos.querySelector("input[name='precio']");
/**
 * @type {HTMLInputElement}
 */
const duracionInput = formCursos.querySelector("input[name='duracion']");
/**
 * @type {HTMLTextAreaElement}
 */
const descripcionTextarea = formCursos.querySelector(
  "textarea[name='descripcion']"
);

descripcionTextarea.onkeyup = validarTexto;

nameInput.onkeyup = validarTexto;
function validarTexto({ target }) {
  if (target.value.search(/[a-z]/) >= 0) {
    this.nextElementSibling.textContent = "";
    return;
  }
  this.nextElementSibling.textContent = `El campo ${this.name} debe contener letras`;
}
