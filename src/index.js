function created(){
    var element = document.createElement('p');
    element.innerHTML = 'Webpack 初体验！';
    return element;
}

var body = document.body;
body.appendChild(created());