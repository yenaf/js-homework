import { getNode } from "./getNode.js";

//속성값을 가져오는 함수
function getAttr(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  return node.getAttribute(prop);
}


//속성값을 변경하는 함수
function setAttr(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof prop !== 'string'){
    throw new typeError('setAttr함수의 매개변수 prop의 타입은 문자("")여야 합니다');
  }
  
  if(!node[prop] && prop !== 'class'){
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop,value);
}


//속성값 getter, setter
export function attr(node,prop,value){
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}