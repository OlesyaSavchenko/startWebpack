import { text } from './data.js';

function showText (value) {
    console.log(value);
}

showText(text);

/** */

import './style.css';

/** */

import webpackImg from './static/webpack.gif';

function createImg () {
    const element = document.getElementById("content");
    const imgElement =  document.createElement('img');
    imgElement.src = webpackImg;
    element.append(imgElement);
}

createImg();

/** */

async function red () {
    return 'writee'
}
console.log('red', red().then(console.log))