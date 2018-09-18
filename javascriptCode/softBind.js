/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)；
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */

'use strict';

if(!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj){
    debugger;
     var fn = this;
    var curried = [].slice.call( arguments, 1);
    var bound = function() {
      return fn.apply(
        (!this || this === (window || global)) ? obj : this,
        curried.concat.apply( curried, arguments )
      );
    };
    bound.prototype = Object.create( fn.prototype );
    return bound;
  }
}

function foo() {
  console.log(`name:${this.name}`);
}

var obj1 = { name: 'obj'},
    obj2 = { name: 'obj2'},
    obj3 = { name: 'obj3'},
    obj4 = { name: 'obj4'};

var fooOBJ = foo.softBind( obj1 );

    fooOBJ();

obj2.foo = foo.softBind( obj1 );
obj2.foo();

