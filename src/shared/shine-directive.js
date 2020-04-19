/* eslint-disable no-param-reassign */

export default {
  bind: (element, bindings) => {
    debugger;
    Object.keys(bindings.value).forEach(i => {
      element.style[i] = bindings.value[i];
    });
  }
};
