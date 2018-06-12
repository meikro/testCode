import _ from 'lodash';
import san from 'san';

var App = san.defineComponent({
    template: '<p>Hello {{name}}!</p>',
    initData: function(){
        return {
            name: 'World'
        }
    }
});

var app = new App();

app.attach(document.body);