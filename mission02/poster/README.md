#mission 02
---
## 엘리멘탈 포스터 UI 

> 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

---
## 결과

![Elemental-Movie-Poster-Chrome-2023-07-23-21-17-05](https://github.com/yenaf/js-homework/assets/115360074/8261b66b-fc47-44ac-9ec1-3f73f33544bb)

---
### 요구 사항

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

---

#### [1단계] 요구사항 1~4번
```js
const nav = document.querySelector('.nav');
const ul = document.querySelector('.nav ul');
const visualImg = document.querySelector('.visual img');
const nickName = document.querySelector('h1');
const body = document.querySelector('body');


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


  //썸네일클릭시 비주얼이미지 변경하기
  visualImg.setAttribute('src',`./assets/${data[index-1].name}.jpeg`);
  //이미지 alt 변경하기
  visualImg.setAttribute('alt',`${data[index-1].alt}`)

  //상단이름 변경하기
  nickName.textContent = data[index-1].name;

  //배경색 변경하기
  const colorA = data[index-1].color[0];
  const colorB = '#000';

  body.style.background = `linear-gradient(to bottom,${colorA},${colorB})`;

}

nav.addEventListener('click',handleSlider);
```
---
#### [2단계] 함수 쪼개기
1. `setBgColor` 함수
2. `setImage` 함수
3. `setNameText` 함수

```js
  // 1. `setBgColor` 함수
  function setBgColor(node,color1,color2 = "#000") {
    if(typeof node === 'string'){
      node = getNode(node);
    }
    node.style.background = `linear-gradient(to bottom,${color1},${color2})`;
  }

  // 2. `setImage` 함수
  function setImage(node,imgSrc) {
    if(typeof node === 'string'){
      node = getNode(node);
    }
    node.setAttribute('src',imgSrc);
  }

  // 3. `setNameText` 함수
  //기존에 만들어둔 속성을 가져오고 세팅하는 함수인 attr함수를 활용할수도 있지만 setImage라는 용도에맞게 src만 변경가능한 함수를 만듬
  function setNameText(node,value) {
    if(typeof node === 'string'){
      node = getNode(node);
    }
    node.textContent = value;
  }
```
---

#### [3단계] 함수 모듈화

```js
import { getNode, attr, setImage, setBgColor, setNameText } from "../lib/dom/index.js";

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
```

---
#### [4단계] 전역변수 -> 전체함수
```js
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
    list.forEach((li)=>{
      li.classList.remove('is-active');
    })
    li.classList.add('is-active');
  
    const index = li.dataset.index;
    const colorA = data[index-1].color[0];
    const colorB = data[index-1].color[1];
    const thumbNailSrc = `./assets/${data[index-1].name}.jpeg`;
    const thumbNailName = data[index-1].name;
    const thumbNailAlt = `${data[index-1].alt}`;

    setBgColor(body,colorA,colorB);
    setImage(visualImg,thumbNailSrc);
    setNameText(nickName,thumbNailName);
    attr(visualImg,'alt',thumbNailAlt);
  }
  nav.addEventListener('click',handleSlider);
}
poster();
```