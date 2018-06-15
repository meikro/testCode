import print from './print.js';
import '../style/css.css';
function component(){
    let element = document.createElement('div');
    element.innerHTML = 'This is a new Element!';
    let btn = document.createElement('button');
    btn.innerHTML = "Click me!"
    btn.onclick = function(){
        print('show Info');
    }
    element.appendChild(btn);
    return element;
}

const body = document.body;
let element = component();
body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Module hot ...... ');
        print('Hot show!');
        body.removeChild(element);
        element = component();
        body.appendChild(element);
    });
}