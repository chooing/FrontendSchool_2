const joinForm= document.getElementById("joinForm");

const pwViewBtn= document.getElementById("pwViewBtn");
const pwReViewBtn= document.getElementById("pwReViewBtn");

const idDeletBtn= document.getElementById("idDeletBtn");
const pwDeletBtn= document.getElementById("pwDeletBtn");
const pwReDeletBtn= document.getElementById("pwReDeletBtn");
const emailDeletBtn= document.getElementById("emailDeletBtn");

const joinId= document.getElementById("joinId");
const joinPw= document.getElementById("joinPw");
const joinPwRe= document.getElementById("joinPwRe");
const joinEmail= document.getElementById("joinEmail");


// input 안에 글자 쓰면 지우는 버튼 나타나기
joinId.addEventListener("keyup",inputKeyupHandler);
joinPw.addEventListener("keyup",inputKeyupHandler);
joinPwRe.addEventListener("keyup",inputKeyupHandler);
joinEmail.addEventListener("keyup",inputKeyupHandler);
function inputKeyupHandler(e) {
    e.target.nextElementSibling.classList.remove("hide-btn");
    if(e.target.value==="")e.target.nextElementSibling.classList.add("hide-btn");
}

//input 안에 전체 지우기 버튼
idDeletBtn.addEventListener("click",deletBtnClickHandler);
pwDeletBtn.addEventListener("click",deletBtnClickHandler);
pwReDeletBtn.addEventListener("click",deletBtnClickHandler);
emailDeletBtn.addEventListener("click",deletBtnClickHandler);
function deletBtnClickHandler(e) {
    e.target.parentElement.firstElementChild.value="";
    e.target.classList.add("hide-btn");
}

// 비밀번호 보이기 & 감추기
pwViewBtn.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pw-view-btn")){
        e.target.classList.remove("pw-view-btn");
        joinPw.type="password"
    }else{
        e.target.classList.add("pw-view-btn");
        joinPw.type="text";
    }
});

pwReViewBtn.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pw-view-btn")){
        e.target.classList.remove("pw-view-btn");
        joinPwRe.type="password"
    }else{
        e.target.classList.add("pw-view-btn");
        joinPwRe.type="text";
    }
});

// form submit 막기
joinForm.addEventListener("submit",(e)=>{
    e.preventDefault();
});
