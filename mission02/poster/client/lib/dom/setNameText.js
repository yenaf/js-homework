import { getNode } from "./getNode.js";

export function setNameText(node,value) {
  if(typeof node === 'string'){
    node = getNode(node);
  }
  node.textContent = value;
}