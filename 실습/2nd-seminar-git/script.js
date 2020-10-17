const BASE_URI = "https://api.github.com/users/"

const $main = document.getElementById("main"); 
const $form = document.getElementById("form");
const $input = document.getElementById("input");

const getUser = async (userName) => {
    const response = await fetch(`${BASE_URI}${userName}`);
    const userData = await response.json();
    createUserCard(userData);
}

const createUserCard = (userData) => {
    const cardHTML =  `<h2>${userData.name}</h2>`;
    $main.innerHTML = cardHTML;
}

$form.addEventListener("submit", (e) =>{
    e.preventDefault(); // 새로고침 방지
    const user = $input.value;
    if(user) {
        getUser(user);
        resetForm()
    }


})

const resetForm = () => $input.value = ''