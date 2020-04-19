/* eslint-disable no-param-reassign */
export default function (element, bindings) {
  if (bindings.arg !== "position") return;
  Object.keys(bindings.modifiers).forEach(key => {
    element.style[key] = "5px";
  });
  element.style.position = "absolute";
  element.style.color = "yellow";
}
