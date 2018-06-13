import '../style/css.css';
function component(){
    let element = document.createElement('div');
    element.innerHTML = 'This is a new Element!';
    return element;
}

const body = document.body;
body.appendChild(component());