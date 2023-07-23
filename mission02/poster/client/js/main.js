
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { getNode, attr, setImage, setBgColor, setNameText } from "../lib/dom/index.js";

function poster(){

  const nav = getNode('.nav');
  const ul = getNode('.nav ul');
  const visualImg = getNode('.visual img');
  const nickName = getNode('h1');
  const body = getNode('body');
  
  function handleSlider(e){
    e.preventDefault();
    const li = e.target.closest('li');
    if(!li) return;
  
    const list = [...ul.children];
    //li를 반복돌리면서 is-active클래스 다 떼주기
    list.forEach((li)=>{
      li.classList.remove('is-active');
    })
    li.classList.add('is-active');
  
    //인덱스번호 추출하기
    const index = li.dataset.index;
  
    //배경색 변경하기
    const colorA = data[index-1].color[0];
    const colorB = data[index-1].color[1];
    setBgColor(body,colorA,colorB);
    
    //썸네일클릭시 비주얼이미지 변경하기
    const thumbNailSrc = `./assets/${data[index-1].name}.jpeg`;
    setImage(visualImg,thumbNailSrc);
    
    //상단이름 변경하기
    const thumbNailName = data[index-1].name;
    setNameText(nickName,thumbNailName);
  
    //이미지 alt 변경하기
    const thumbNailAlt = `${data[index-1].alt}`;
    attr(visualImg,'alt',thumbNailAlt);
    
  }
  nav.addEventListener('click',handleSlider);

}
poster();




















































