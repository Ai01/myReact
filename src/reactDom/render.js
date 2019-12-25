import { diff, setAttribute, setComponentProps } from './diff';

/**
 * @description: vnode是createElement返回的对象或者string
 *
 * @date: 2019/12/24 6:50 下午
 */
// function _render(vnode) {
//   if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
//
//   if (typeof vnode === 'number') vnode = String(vnode);
//
//   // 字符串直接处理
//   if (typeof vnode === 'string') {
//     return document.createTextNode(vnode);
//   }
//
//   // 处理component
//   if (typeof vnode.tag === 'function') {
//     const component = reateComponent(vnode.tag, vnode.attrs);
//     setComponentProps(component, vnode.attrs);
//     return component.base;
//   }
//
//   const dom = document.createElement(vnode.tag);
//
//   // 设置属性
//   if (vnode.attrs) {
//     Object.keys(vnode.attrs).forEach(key => {
//       setAttribute(dom, key, vnode.attrs[key]);
//     });
//   }
//
//   // 递归渲染children
//   if (Array.isArray(vnode.children) && vnode.children.length) {
//     vnode.children.forEach(i => render(i, dom));
//   }
//
//   return dom;
// }


export function render(vnode, container, dom) {
  return diff(dom, vnode, container);
}
