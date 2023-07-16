
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
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const id = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');

// let emailPass = false;
id.addEventListener('input',function(){
  if(emailReg(this.value)){
    this.classList.remove('is--invalid')
    // emailPass = true;
  }else{
    this.classList.add('is--invalid');
    // emailPass = false;
  }
})

pw.addEventListener('input',function(){
  if(pwReg(this.value)){
    this.classList.remove('is--invalid')
    // emailPass = true;
  }else{
    this.classList.add('is--invalid');
    // emailPass = false;
  }
})

button.addEventListener('click',function(){
  if(id.value === user.id || pw.value === user.pw){
    window.location.href = 'welcome.html'
  }else{
    alert(' 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.')
  }
})











