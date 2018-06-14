import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*const submit = () =>{
    document.getElementById('tester').innerHTML = "Hi";
}
*/

/*
function subclick () {
    document.getElementById('tester').innerHTML = "Hi";
};
*/
    let tdnaslov = document.getElementById('todo-naslov').value;
    let tddatum = document.getElementById('todo-datum').value;
    let tdtext = document.getElementById('todo-text').value;

let val = [];

document.getElementById('submitic').onclick = () => {
    let ob = {
        naslov: tdnaslov,
        datum: tddatum,
        text: tdtext
    };
    val.push(ob);

    document.getElementById("tester").innerHTML = ob.naslov + " " + ob.datum + " " + ob.text;
}
/*
let zaRender = App odonaslov = val{i.tdnaslov}
*/

    ReactDOM.render(<App todonaslov={tdnaslov} tododatum={tddatum} todotext={tdtext} />, document.getElementById('root'));
registerServiceWorker();
/*};


*/