/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)；
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */

/*
 * 为 Object 实现 next() 遍历
 * 
 */


const myObj = {
  name: 'Charles',
  age: '27',
  six: '1',
  time: '5'
}

// Object.defineProperty( myObj, Symbol.iterator, {
//   enumerable: false,
//   writable: false,
//   configurable: true,
//   value: function(){
//     var o = this,
//         idx = 0,
//         ks = Object.keys(this);
//     return {
//       next: function() {
//         console.info(this);
//         console.info(`ks: ${ks[idx]}, value: ${o[ks[idx]]}`);
//         return {
//           key: ks[idx],
//           value: o[this.key],
//           done: idx === ks.length
//         }
//         ++idx;
//       }
//     }
//   }
// })

var objPrototype = Object.prototype;

Object.defineProperty( objPrototype, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function(){
    var o = this,
        idx = 0,
        ks = Object.keys(this);
    return {
      next: function() {
        console.info(this);
        console.info(`ks: ${ks[idx]}, value: ${o[ks[idx]]}`);
        return {
          key: ks[idx],
          value: o[this.key],
          done: idx === ks.length
        }
        ++idx;
      }
    }
  }
})


// console.log(myObj);
const io = myObj[Symbol.iterator]();
console.log(io);
io.next();















/*
Exception: SyntaxError: redeclaration of const myObj
@Scratchpad/2:1:1
*/
/*
Exception: SyntaxError: redeclaration of const myObj
@Scratchpad/2:1:1
*/
/*
[object Object]
*/
/*
Exception: SyntaxError: redeclaration of const myObj
@Scratchpad/2:1:1
*/
/*
Exception: ReferenceError: objPrototype is not defined
@Scratchpad/2:23:1
*/