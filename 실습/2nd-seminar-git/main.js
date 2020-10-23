const $basic = document.getElementById("basic");
const $main = document.getElementById("main");

const createBasicDOM = () => {
    const BasicHTML = `
    <label class="switch">
        <input id="toggleBtn" type="checkbox" checked>
        <span class="slider round"></span>
    </label>
    <form id="form">
        <input type="text" id="input" placeholder="&#128269; 아이디를 입력하세요">
    </form>`
    $basic.innerHTML = BasicHTML
}

// 컬러 모드
const setColorType = (colors) =>{
    for (const [key, value] of Object.entries(colors)){
        document.documentElement.style.setProperty(`--${key}`, `${value}`);
    }
}

const addEventListenerToToggle = ($toggleBtn) => {
    $toggleBtn.addEventListener("click", (e) => {
        const isDarkMode = e.target.checked
        isDarkMode ? setColorType(darkColors) : setColorType(whiteColors)
    })
}

// 검색
const resetForm = ($input) => $input.value = ''

const addEventListenerToForm = ($form, $input) => {
    $form.addEventListener("submit", (e) => {
        e.preventDefault(); // 새로고침 방지
        const user = $input.value;
        if (user) {
            createInfoCard(user);
            resetForm($input);
        }
    })
}

const basicInit = (() => {
    createBasicDOM()
    const $form = document.getElementById("form");
    const $input = document.getElementById("input");
    const $toggleBtn = document.getElementById("toggleBtn");
    addEventListenerToToggle($toggleBtn)
    addEventListenerToForm($form, $input)
})()

