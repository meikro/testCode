import {cube} from './math.js';
import '../style/css.css';

function component(){
    let element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cube is equal to ' + cube()
    ].join('\n\n');
    return element;
}
console.info('aaaaa');
const body = document.body;
let element = component();
body.appendChild(element);