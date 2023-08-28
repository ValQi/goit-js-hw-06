const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, event => {
    nameOutput.textContent = event.target.value.trim();

if (event.target.value === ``) {
    nameOutput.textContent = `Anonymous`
}
});