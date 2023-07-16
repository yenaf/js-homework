
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return re.test(String(text).toLowerCase());
}

function $(node){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  return node;
}

const id = $('.user-email-input');
const pw = $('.user-password-input');
const button = $('.btn-login');

//상태변수
let checkUser = false;

//아이디 체크 함수
function handleEmailCheck(){
  if(emailReg(this.value) || this.value === ''){
    this.classList.remove('is--invalid');
    checkUser = true;
  }else{
    this.classList.add('is--invalid');
    checkUser = false;
  }
}

//비밀번호 체크 함수
function handlePwCheck(){
  if(pwReg(this.value) || this.value === ''){
    this.classList.remove('is--invalid');
    checkUser = true;
  }else{
    this.classList.add('is--invalid');
    checkUser = false;
  }
}

//버튼 클릭 체크 함수
function handleBtnCheck(e){
  e.preventDefault();
  if(checkUser){
    if(id.value === user.id && pw.value === user.pw){
      window.location.href = 'welcome.html'
    }else if(id.value === ''){
      alert('아이디를 입력해주세요.');
    }else if(pw.value === ''){
      alert('비밀번호를 입력해주세요.');
    }
    else{
      alert(' 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.')
    }
  }

}




id.addEventListener('input',handleEmailCheck);
pw.addEventListener('input',handlePwCheck)
button.addEventListener('click',handleBtnCheck);









