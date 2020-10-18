const BASE_URI = "https://api.github.com/users/"

const $main = document.getElementById("main"); 
const $form = document.getElementById("form");
const $input = document.getElementById("input");

// user 이름
const getUser = async (userName) => {
    const response = await fetch(`${BASE_URI}${userName}`);
    const userData = await response.json();
    return userData;
}

const createUserCard = (user) => {
    const cardHTML =  `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
`;
    $main.innerHTML = cardHTML;
}

// 레포지토리
const getRepos = async (userName) => {
    const response = await fetch(`${BASE_URI}${userName}/repos`);
    const userRepos = await response.json();
    return userRepos;
};

  const addReposToCard = (userRepos) => {
    const $repos = document.getElementById("repos");
    userRepos.slice(0,10).forEach((repo) => {
        const $repo = document.createElement("a"); // <a></a>
        $repo.classList.add("repo"); // <a class="repo">
        $repo.href = repo.html_url; // <a href={repo.html_url}>
        $repo.target = "_blank"; // <a target="_blank"> ; 새탭 열기
        $repo.innerText = repo.name; // <a>repo.name</a>
        $repos.appendChild($repo); // <div id="repos"><a></a></div>
    });
}

const resetForm = () => $input.value = ''

const createInfoCard = async (user) => {
    const userData = await getUser(user);
    createUserCard(userData);
    const userRepos = await getRepos(user);
    addReposToCard(userRepos);
}

$form.addEventListener("submit", (e) =>{
    e.preventDefault(); // 새로고침 방지
    const user = $input.value;
    if(user) {
        createInfoCard(user);
        resetForm();
    }
})