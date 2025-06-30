// main-content.js

export default function displayUi() {
    const topNavWrapper = document.querySelector('#top-nav');
    const testpara = document.createElement('p');

    topNavWrapper.appendChild(testpara);
    testpara.textContent = 'this works';
}