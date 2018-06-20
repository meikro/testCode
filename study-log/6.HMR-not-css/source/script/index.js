import {cube} from 'Script/math';
import 'Style/css';
import 'Style'

function component(){
    let element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cube is equal to ' + cube(5)
    ].join('\n\n');
    return element;
}
const body = document.body;
let element = component();
body.appendChild(element);

function createP() {
    let element = document.createElement('p');
    element.classList.add('text-center','text-primary');
    element.innerHTML = [
        'This',
        'is',
        'new',
        'Element!'
    ].join(' ');
    return element;
}
body.appendChild(createP());

// if(module.hot){
//     module.hot.accept(['./math.js','../style/index.css'],function(){
//         console.log('热更新应用中.....');
//         var res = cube(25);
//         console.log(res);
//     })
// }
// if(module.hot){
//     console.info('true');
// }
// if(module.hot){
//     console.log(module.hot.accept);
//     module.hot.accept(['Style'],()=>{
//         console.log(arguments);
//         console.info('更新内容....');
//     });
// }