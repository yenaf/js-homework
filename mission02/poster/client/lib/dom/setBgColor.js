import { getNode } from "./getNode.js";

export function setBgColor(node,color1,color2 = "#000") {
  if(typeof node === 'string'){
    node = getNode(node);
  }
  node.style.background = `linear-gradient(to bottom,${color1},${color2})`;
}