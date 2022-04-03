const loginForm= document.getElementById("loginForm");
const pwViewBtn= document.getElementById("pwViewBtn");
const idDeletBtn= document.getElementById("idDeletBtn");
const pwDeletBtn= document.getElementById("pwDeletBtn");
const userId= document.getElementById("userId");
const userPw= document.getElementById("userPw");


// input 안에 글자 쓰면 지우는 버튼 나타나기
userId.addEventListener("keyup",inputKeyupHandler);
userPw.addEventListener("keyup",inputKeyupHandler);
function inputKeyupHandler(e) {
    e.target.nextElementSibling.classList.remove("hide-btn");
    if(e.target.value==="")e.target.nextElementSibling.classList.add("hide-btn");
}

idDeletBtn.addEventListener("click",deletBtnClickHandler);
pwDeletBtn.addEventListener("click",deletBtnClickHandler);
function deletBtnClickHandler(e) {
    e.target.parentElement.firstElementChild.value="";
    e.target.classList.add("hide-btn");
}

// 비밀번호 보이기 & 감추기
pwViewBtn.addEventListener("click",(e)=>{
    e.target.classList.toggle("pw-view-btn");
    (e.target.classList.contains("pw-view-btn"))?
        userPw.type="text"
        :userPw.type="password";
});

// form submit 막기
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
});