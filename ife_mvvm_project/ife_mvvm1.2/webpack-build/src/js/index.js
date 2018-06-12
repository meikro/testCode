import _ from 'lodash';
import printMe from './print.js';
import "../css/index.css"
import "../css/print.css"
function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['New','Element'],' ');
    btn.classList.add('btn');
    btn.innerHTML = 'Chile Me';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

let obj = {a:'a', b: 'b', c: 'c'};
console.info(Object.keys(obj));


// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }