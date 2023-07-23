import { getNode } from "./getNode.js";

export function setImage(node,imgSrc) {
  if(typeof node === 'string'){
    node = getNode(node);
  }
  node.setAttribute('src',imgSrc);
}