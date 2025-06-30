// main-content.js

export default function displayUi() {
    const mainContent = document.querySelector('#main-content');
    const testpara = document.createElement('p');

    mainContent.appendChild(testpara);
    testpara.textContent = 'this works';
}