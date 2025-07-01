// generate-icons.js
import logoImg from '../asset/icons/todo.svg';

export default function displayIcons() {
    const logo = document.querySelector('#header-logo');
    logo.src = logoImg;
}
