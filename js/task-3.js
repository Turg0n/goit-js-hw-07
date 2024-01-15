const userName = document.querySelector('#name-input')
const userSpan = document.querySelector(`#name-output`)
userName.addEventListener('input', () => {
let name = userName.value.trim();
    if (name !== ``) {
userSpan.textContent = name;
}
else
userSpan.textContent = `Anonymous`
});
