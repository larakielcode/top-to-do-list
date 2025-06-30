// main-content.js

import groupsvg from '../asset/icons/group.svg';

export default function displayUi() {
    // code for the navbar
    const navMainSection = document.querySelector('nav');
    const navWrapper = document.createElement('div');
    const navProjectContainer = document.createElement('div');
    const navTodoOptionsContainer = document.createElement('div');

    navMainSection.appendChild(navWrapper);
    navWrapper.classList.add('nav-wrapper');

    navWrapper.appendChild(navProjectContainer);
    navProjectContainer.classList.add('nav-project-container');

    const navProjectPara = document.createElement('p');
    const navProjectImage = document.createElement('img');

    navProjectContainer.appendChild(navProjectImage);
    navProjectImage.classList.add('project-image');
    navProjectImage.src = groupsvg;
    navProjectContainer.appendChild(navProjectPara);
    navProjectPara.textContent = 'PROJECTS';


    navWrapper.appendChild(navTodoOptionsContainer);
    navTodoOptionsContainer.classList.add('nav-todo-options');
}