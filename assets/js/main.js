const $txtNome = document.getElementById("txtName");
const $txtEmail = document.getElementById("txtEmail");
const $txtLevel = document.getElementById("txtLevel");
const $txtCharacter = document.getElementById("txtCharacter");
const $btn = document.getElementById("btnSubscribe");

$btn.addEventListener('click', () => {
    const formulario = {
        name: $txtNome.value,
        email: $txtEmail.value,
        level: $txtLevel.value,
        character: $txtCharacter.value
    }
    console.log(formulario);
});

function enviarFormulario() {

    
}
console.log($btn);