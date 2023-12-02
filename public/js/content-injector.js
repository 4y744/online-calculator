//INJECTS THE COMMON ELEMENTS INTO EVERY PAGE

getHTML('/templates/navbar.html').then(res => document.getElementsByTagName('nav')[0].insertAdjacentHTML('afterbegin', res.body.innerHTML));
getHTML('/templates/footer.html').then(res => document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', res.body.innerHTML));
getHTML('/templates/related.html').then(res => document.getElementsByClassName('related-container')[0].insertAdjacentHTML('afterbegin', res.body.innerHTML));

document.head.innerHTML += `<link rel="stylesheet" href="/css/navbar.css">`;
document.head.innerHTML += `<link rel="stylesheet" href="/css/related.css">`;
document.head.innerHTML += `<link rel="stylesheet" href="/css/footer.css">`;

function getHTML(url)
{
    return fetch(url)
    .then(response => response.text())
    .then(html => new DOMParser().parseFromString(html, "text/html"))
    .catch(err => console.log('Failed to load template: ', err));
}