function component(){
    // 创建一个DOM节点
    var element = document.createElement('div');

    // 填充节点内容
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());