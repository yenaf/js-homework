//getNode함수
export function getNode(node){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다');
  }
  return document.querySelector(node);
}
//getNodes함수
export function getNodes(nodes) {
  if(typeof nodes !== 'string'){
    throw new Error('getNodes 함수의 인수는 문자 타입이어야 합니다');
  }
  return document.querySelectorAll(nodes)
}