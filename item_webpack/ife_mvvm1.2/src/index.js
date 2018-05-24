import _ from 'lodash';
import './style.css';

function addChild(){
    let element = document.createElement('h3');
    element.classList.add('title');
    element.innerHTML = _.join(['Hello', 'webpack', '尝试解析CSS样式'], ' ');
    return element;
}
document.body.appendChild(addChild());